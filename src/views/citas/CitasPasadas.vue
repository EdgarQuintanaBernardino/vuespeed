<template>
              <CRow>
      <CCol sm="">
        <perfect-scrollbar style="height:40em;width:100%;margin:0px 0px 1% 0px">
        <CDataTable :items="items" :column-filter-value.sync="columnFilter" :table-filter-value.sync="tableFilter" :loading="loading" :itemsPerPage="itemsLimit" index-column hover footer fixed striped responsive outlined table-column
            :fields="[ 
            { key: 'id_cita', label: 'ID Cita' },
            { key: 'fecha', label: 'Fecha' },
            { key: 'nombre_cita', label: 'Nombre de cita' },
            { key: 'vehiculo', label: 'Placas' },
            { key: 'id_cliente', label: 'ID Cliente' },
            { key: 'cliente', label: 'Nombre del cliente' },
             { key: 'concretado', label: 'Concretado' },
            { key: 'status', label: 'Status' },
            { key: 'acciones', label: 'Acciones' },
            ]"
            :noItemsView="{ 
            noResults: 'No hay resultados de filtrado disponibles', 
            noItems: 'No hay registros disponibles',
            }"
            :items-per-page-select="{ label: 'Registros por pagina:', values: ['15','30','50','100'] }"
            :table-filter="{ external: true, lazy: true, placeholder: 'Filtrar', label: 'Filtrar:' }"
            :sorter="{ external: true, resetable: true }"
            :columnFilter="{ external: true, lazy: true }"
            @pagination-change="changeItemsLimit"
            :sorter-value.sync="sorter"
            >
             <template #acciones="{item}">
                    <td>
                      <CLink
                        
                        :hidden="permisos(['sinconfirmar.destroy'])"
                        @click="deleteRegistro(item.id_cita)"
                        class="btn-sm btn-danger mr-1"
                        ><CIcon
                          class="align-content-sm-center"
                          name="cil-trash"
                      /></CLink>

                      <CLink
                       :hidden="permisos(['sinconfirmar.edit'])"
                         :to="{
                              name: 'Editar Cita',
                              params: { id: item.id_cita}
                            }"
                        class="btn-sm btn-dark mr-1"
                        ><CIcon
                          class="align-content-sm-center"
                          name="cil-pencil"
                      /></CLink>
                    </td>
                  </template>
                  <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">{{item.status}}</CBadge>
          </td>
        </template>
        <template #concretado="{item}">
          <td>
            <CBadge :color="getBadge(item.concretado)">{{item.concretado}}</CBadge>
          </td>
        </template>
      
        </CDataTable>
         <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
            style="float:right;"
          />
      </perfect-scrollbar>

      </CCol>
   </CRow>
            
</template>

<script>
import axios from 'axios'
import alert from "@/repositories/global/alert";
import CitasRecordatorios from './CitasRecordatorios'
import check from "@/repositories/global/check";

export default {
  name: 'ListadeCitas',
  components: {
    CitasRecordatorios,
   },
   data(){
     return{
       props:{
          items: Array,
         fields: {
           type: Array,
      default () {
        return ['status','concretado']
      }
    },
       },

      items: [],
      activePage: 1,
      maxPages: 1,
      sorter: { column: "", asc: false },
      tableFilter: "",
      columnFilter: {},
      itemsLimit: 50,
      loading: false,
      texto: null,
     
       message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
     }
   },
   watch: {
    activePage() {
      this.getcitas();
    },
    sorter: {
      handler() {
        this.getcitas();
      },
      deep: true
    },
    tableFilter() {
      this.getcitas();
    },
    columnFilter() {
      this.getcitas();
    }
  },
   
   methods:{
     getBadge (status) {
      return status === 'Confirmado' ? 'success'
            : status === 'Sin confirmar' ? 'danger' : 'secondary'
    },
    getBadge (concretado) {
      return concretado === 'Concretado' ? 'success'
            : concretado === 'No concretado' ? 'danger' : 'secondary'
    },

     changeItemsLimit(val) {
      this.itemsLimit = val;
    },
    permisos(permisos) {
      return !check.permiso(permisos);
    },
  
    //Traer datos para la tabla citas
    getcitas() {
      let self = this;
      self.loading = true;
      self.items = [];
      axios
        .post(
          self.$apiAdress +
            "/api/sinconfirmar?token=" +
            localStorage.getItem("api_token") +
            "&page=" +
            self.activePage,
          {
            sorter: self.sorter,
            tableFilter: self.tableFilter,
            columnFilter: self.columnFilter,
            itemsLimit: self.itemsLimit
          }
        )
        .then(function(response) {
          self.texto = `Mostrando desde ${response.data.from} hasta ${response.data.to} de ${response.data.total} registros.`;
          self.items = self.items.concat(response.data.data);
          self.maxPages = response.data.last_page;
          self.loading = false;
        })
        .catch(function(error) {
          self.loading = false;
          alert.responseCatch(error, "Code #1006");
        });
    },
   },
   deleteRegistro(id) {
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres eliminar este registro?",
        html:
          "Enviaras toda la información relacionada a este registro a la papelera de reciclaje.",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {
          let self = this;
          axios
            .post(
              self.$apiAdress +
                "/api/cita/delete/" +
                id +
                "?token=" +
                localStorage.getItem("api_token"),
              {}
            )
            .then(function(response) {
              alert.response200("¡Registro eliminado exitosamente!", "");
              self.getSucursales();
            })
            .catch(function(error) {
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    }, 
   mounted: function(){
     this.getcitas();
     
   },
}
</script>