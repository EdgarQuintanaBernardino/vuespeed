<template>
      <CCardBody >
            <CRow>
            <CCol sm="" >
              <perfect-scrollbar
                style="height:40em;width:100%;margin:0px 0px 1% 0px"
              >
                <CDataTable
                  :items="items"
                  :column-filter-value.sync="columnFilter"
                  :table-filter-value.sync="tableFilter"
                  :loading="loading"
                  :itemsPerPage="itemsLimit"
                  index-column
                  hover
                  footer
                  fixed
                  striped
                  responsive
                  outlined
                  table-column
                  :fields="[
                  { key: 'nombre', label: 'NOMBRE' },
                  { key: 'pre_hora', label: 'PRECIO HORA' },
                  { key: 'horas', label: 'HORAS' },
                  { key: 'subtotal', label: 'TOTAL' },
                  { key: 'acciones', label: 'ACCIONES' },
                  ]"
                  :noItemsView="{
                    noResults: 'No hay resultados de filtrado disponibles',
                    noItems: 'No hay registros disponibles'
                  }"
                  :items-per-page-select="{
                    label: 'Registros por pagina:',
                    values: ['15', '30', '50', '100']
                  }"
                  :table-filter="{
                    external: true,
                    lazy: true,
                    placeholder: 'Buscar',
                    label: 'Buscar:'                          
                  }"
                  :sorter="{ external: true, resetable: true }"
                  :columnFilter="{ external: true, lazy: true }"
                  @pagination-change="changeItemsLimit"
                  :sorter-value.sync="sorter"
                >
                <template #acciones="{item}">
                    <td>
                      <CLink
                      v-if="!permisos(['clientev.show'])"
                        :hidden="permisos(['m_obra.show'])"
                              :to="{
                              name: 'Detalles ManoObra',
                              params: { id: item.id}
                            }"
                        class="btn-sm btn-secondary"
                        ><img src="https://img.icons8.com/ios-glyphs/16/000000/visible--v1.png"/>
                        </CLink>

                        <CLink
                        :hidden="permisos(['m_obra.edit'])"
                        class="btn-sm btn-secondary ml-2"
                           :to="{
                              name: 'Editar Mano',
                              params: { id: item.id }
                            }"
                        ><CIcon
                          class="align-content-sm-center "
                          name="cil-pencil"
                      />
                        </CLink>
                    
                      <CLink
                        :hidden="permisos(['m_obra.delete'])"
                        @click="deleteRegistro(item.id)"
                        class="btn-sm btn-danger ml-1"
                        ><CIcon
                          class="align-content-sm-center "
                          name="cil-user-unfollow"
                      /></CLink>
                    </td>
                  </template>
                </CDataTable>
              </perfect-scrollbar>
            </CCol>
          </CRow>
          <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
            style="float:right;"
          /> 
  

    
          </CCardBody>
          
           
</template>
<script>

import check from '@/repositories/global/check'
import alert from "@/repositories/global/alert";

import Swal from "sweetalert2";
import axios from "axios";
export default {
    
    data(){
        return{
          form:[],

          
      items: [],
      activePage: 1,
      maxPages: 1,
      sorter: { column: "", asc: false },
      tableFilter: "",
      columnFilter: {},
      itemsLimit: 50,
      loading: false,
      texto: null,
        }
    },
    mounted: function() {
        this.getManoObra();
        
    },
    methods:{
       showMano(id) {
      this.$router.push({ path: `/catalogos/mano_obra/ShowMano/${id.toString()}` });
    },
        permisos(permisos) {
      return !check.permiso(permisos)
    },
 
 
     getManoObra() {
      let self = this;
      self.loading = true;
      self.items = [];
      axios
        .post(
          self.$apiAdress +
            "/api/mano_obra?token=" +
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
                "/api/mano_obra/delete/" +
                id +
                "?token=" +
                localStorage.getItem("api_token"),
              {}
            )
            .then(function(response) {
              alert.response200("¡Registro eliminado exitosamente!", "");
              self.getManoObra();
            })
            .catch(function(error) {
            alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
    changeItemsLimit(val) {
      this.itemsLimit = val;
      this.getManoObra();
  },
    },
    watch: {
    activePage() {
      this.getManoObra();
    },
    sorter: {
      handler() {
        this.getManoObra();
      },
      deep: true
    },
    tableFilter() {
      this.getManoObra();
    },
    columnFilter() {
      this.getManoObra();
    }
  }
}
</script>