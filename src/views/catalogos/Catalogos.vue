<template>     
        <CCard sm="6">
           
          
            <h3 class="text-info m-4">Catálogos </h3>
            <CTabs class="m-2">
              <CTab  title="Paquetes/Reparaciones">
              <CCol>
                         
<br>
          <CButton color="success"  @click="newPaquete()"> Nuevo<CIcon name="cilPlus"/> </CButton>
          </CCol>
          <CCardBody>
            <CRow>
            <CCol sm="">
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
                    { key: 'descripcion', label: 'DESCRIPCIÓN' },
                    { key: 'costo', label: 'COSTO' },
                    { key: 'precio', label: 'PRECIO' },
                    { key: 'total', label: 'TOTAL PRODUCTOS' },
                    { key: 'sugerido', label: 'SUGERIDOS' },
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
                <!--      <CLink
                        :hidden="permisos(['users.destroy'])"
                        @click="deleteRegistro(item.id_cliente)"
                        class="btn-sm btn-secondary"
                        ><img src="https://img.icons8.com/ios-glyphs/16/000000/visible--v1.png"/>
                        </CLink>
                   
                      <CLink
                        :hidden="permisos(['users.destroy'])"
                        @click="deleteRegistro(item.id_cliente)"
                        class="btn-sm btn-dark ml-1"
                        ><CIcon
                          class="align-content-sm-center"
                          name="cil-pencil"
                      /></CLink>-->
                    
                      <CLink
                        :hidden="permisos(['catalogo.delete'])"
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
              </CTab>
              <CTab title="Manos de obra" >
             <CCol>
   <br>
         <CButton class="ml-3"
       @click="catmanodeobra = true"   color="success">

      Nueva M.O
         <CIcon name="cil-plus"/> 
        </CButton>

         <CModal 
       size="lg"
      title="Nueva Mano de Obra" 
    
      color="info"
      :show.sync="catmanodeobra"
    > 
    <CatManoObra/>
     <template #footer>
        <CButton  @click="catmanodeobra= false" ><CIcon name="cilArrowThickToLeft"/> Cancelar</CButton>
  
      </template>
    </CModal>
  <ListaMano/>
     
          </CCol>
              </CTab>
            </CTabs>
          
        </CCard>
</template>

<script>
import check from '@/repositories/global/check'
import axios from "axios";
import Swal from "sweetalert2";
import CatManoObra from './CatManoObra.vue';
import alert from "@/repositories/global/alert";
import ListaMano from './ListaMano.vue';

export default {
  components: {
    CatManoObra,
    ListaMano 
  },
  name: 'CatIndex',
 
  data() {
    return {
      catmanodeobra: false,
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
      this.getCatalogos();
    },

  methods: {
    newPaquete() {
      this.$router.push({ path: "/nvopaquete" });
    },
    permisos(permisos) {
      return !check.permiso(permisos)
    },
    getCatalogos() {
      let self = this;
      self.loading = true;
      self.items = [];
      axios
        .post(
          self.$apiAdress +
            "/api/catalogo?token=" +
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
                "/api/catalogo/delete/" +
                id +
                "?token=" +
                localStorage.getItem("api_token"),
              {}
            )
            .then(function(response) {
              alert.response200("¡Registro eliminado exitosamente!", "");
              self.getCatalogos();
            })
            .catch(function(error) {
             alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
    changeItemsLimit(val) {
      this.itemsLimit = val;
      this.getCatalogos();
  },
  },
  watch: {
    activePage() {
      this.getCatalogos();
   
    },
    sorter: {
      handler() {
        this.getCatalogos();
    
      },
      deep: true
    },
    tableFilter() {
      this.getCatalogos();
   
     
    },
    columnFilter() {
      this.getCatalogos();
      
    }
  }
}
</script>
