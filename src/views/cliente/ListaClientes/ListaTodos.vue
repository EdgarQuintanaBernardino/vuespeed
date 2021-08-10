<template>
  <CRow>
 
    <!--Trae los datos de la tabla de todos los  Clientes y Vehiculos realiza la busqueda filtrada -->
    <CCol sm="" >

         <download-excel
          class="btn btn-default float-right btn-danger mr-2"
          
          :data="items"
          :fields="header"
          worksheet="Clientes Vehículos"
          name="ClientesyVehículos.xls"
          v-c-tooltip.hover="{
              content: `Exportar`
            }"
          >
          Excel
        </download-excel>

      <perfect-scrollbar style="height:40em;width:100%;margin:0px 0px 1% 0px">
     <br>
       
      <CRow>
            <!--Trae los datos de la tabla de Cliente y Vehiculos realiza la busqueda filtrada -->
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
                  :fields="columnas"
                  :noItemsView="{
                    noResults: 'No hay resultados de filtrado disponibles',
                    noItems: 'No hay registros disponibles'
                  }"
                  :items-per-page-select="{
                    label: 'Registros por pagina:',
                    values: ['15', '30', '50', '100','150']
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
                  <template #usuario="{item}">
                    <td>
                      <CLink
                        class="text-info"
                        v-if="!permisos(['clientev.show'])"
                        :hidden="permisos(['clientev.show'])"
                        @click="showRegistro(item.id_cliente)"
                        v-text="item.usuario"
                      />
                      <span v-else v-text="item.usuario" />
                    </td>
                  </template>
                  <template #placas="{item}">
                    <td>
                      <CLink
                        class="text-info"
                        v-if="!permisos(['vehiculo.show'])"
                        :hidden="permisos(['vehiculo.show|clientev.show'])"
                        @click="showVehiculo(item.id_vehiculo)"
                        v-text="item.placas"
                      />
                      <span v-else v-text="item.placas" />
                    </td>
                  </template>
                  <template #orden="{item}">
                    <td>
                      <CLink
                        class="small text-info"
                        @click="cotizacion(item.orden)"
                        ><CIcon size="sm" name="cil-plus" /> ORDEN DE
                        SERVICIO</CLink
                      >
                    </td>
                  </template>
                  <template #cotizacion="{item}">
                    <td>
                      <CLink
                        class="small text-info"
                        @click="cotizacion(item.cotizacion)"
                        ><CIcon size="sm" name="cil-book" /> NUEVA
                        COTIZACIÓN</CLink
                      >
                    </td>
                  </template>
                  <template #eliminar="{item}">
                    <td>
                      <CLink
                        :hidden="permisos(['users.destroy'])"
                        @click="deleteRegistro(item.id_cliente)"
                        class="btn-sm btn-danger"
                        ><CIcon
                          class="align-content-sm-center"
                          name="cil-user-unfollow"
                      /></CLink>
                    </td>
                  </template>
                  <template #option="{item}">
                    <td>
                      <CDropdown
                        size="sm"
                        toggler-text="OPCIONES"
                        color="link-info"
                        class="m-0 d-inline-block"
                        menu-class="h-10"
                      >
                        <div class="dropdown-menu-sm">
                          <CDropdownItem
                            :to="{
                              name: 'Editar Cliente',
                              params: { id: item.id_cliente }
                            }"
                            ><CIcon size="sm" class="mr-2" name="cilPencil" />
                            Editar cliente
                          </CDropdownItem>
                          <CDropdownItem
                          :to="{
                              name: 'Editar Vehículo',
                              params: { id: item.id_vehiculo }
                            }"
                          >
                            <CIcon
                              size="sm"
                              class="mr-2"
                              name="cilPencil"
                            />Editar vehículo</CDropdownItem
                          >
                          <CDropdownItem
                           :hidden="permisos(['vehiculo.destroy'])"
                            @click="deleteVehiculo(item.id_vehiculo)"
                            ><CIcon size="sm" class="mr-2" name="cilTrash" 
                            
                            />
                            Eliminar vehículo</CDropdownItem
                          >
                          <CDropdownItem @click="nvocita = true"
                            ><CIcon size="sm" class="mr-2" name="cilCalendar" />
                            Programar cita</CDropdownItem
                          >
                        </div>
                      </CDropdown>
                    </td>
                  </template>
                </CDataTable>
              </perfect-scrollbar>
            </CCol>
          </CRow>
      </perfect-scrollbar>
      <CPagination
        :pages="maxPages"
        :active-page.sync="activePage"
        style="float:right;"
      />
      <p v-text="texto" />
      <CModal
        size="lg"
        title="Nueva Citas y Recordatorios"
        color="dark"
        :show.sync="nvocita"
      >
        <NvoCita />
        <template #footer>
          <CButton @click="nvocita = false"
            ><CIcon name="cilArrowThickToLeft" /> Cancelar</CButton
          >
          <CButton color="success"> Guardar</CButton>
        </template>
      </CModal>
    </CCol>
  </CRow>
</template>

<script>
//Importaciones
import NvoCita from "../../citas/NvoCita";
import axios from "axios";
import check from "@/repositories/global/check";
import Swal from "sweetalert2";
import NvoVehiculo from "../../vehiculos/NvoVehiculo";
import EditarVehiculo from "../../vehiculos/EditarVehiculo";
import alert from "@/repositories/global/alert";

import Vue from "vue";
import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);

export default {
  name: "ListaClientes",
  components: {
    NvoCita,
    NvoVehiculo,
    EditarVehiculo
  },
  props:['columnas'],
  computed: {
    header() {

      /// let prueba= JSON.stringify(this.columnas);  
let prueba={};
      
for(let a=0;a<this.columnas.length;a++){
      if(this.columnas[a]=='id_cliente'){
        prueba.ID="id_cliente";       
      }
       if(this.columnas[a]=='usuario'){
        prueba.USUARIO="usuario";       
      }
 if(this.columnas[a]=='telefono'){
        prueba.TEL="telefono";       
      }
 if(this.columnas[a]=='empresa'){
        prueba.EMPRESA="empresa";       
      }
 if(this.columnas[a]=='placas'){
        prueba.PLACAS="placas";       
      }
 if(this.columnas[a]=='vin'){
        prueba.VIN="vin";       
      }
 if(this.columnas[a]=='email'){
        prueba.EMAIL="email";       
      }
if(this.columnas[a]=='t_ordenes'){
        prueba.TOTAL_DE_ORDENES="t_ordenes";       
      }
 if(this.columnas[a]=='cotizaciones'){
        prueba.TOTAL_DE_COTIZACIONES="cotizaciones";       
      }
 


}
return prueba;
  
    }
  },
  data() {
    return {

      json_fields: {
      
     
        ID:"id_cliente",
        USUARIO:"usuario",
        TEL: "telefono",
        EMPRESA:"empresa",
        TOTAL_DE_COTIZACIONES: "",
        TOTAL_DE_ORDENES:"",
        PLACAS:"placas",
        VIN:"vin",
        EMAIL:"email",
       TOTAL_DE_ORDENES:"t_ordenes",
       TOTAL_DE_COTIZACIONES:"cotizaciones"
                  
      
    },
    json_data: [],
    json_meta: [
      [
        {
          key: "charset",
          value: "utf-8",
        },
      ],
    ],

      nvocita: false,
      nvoVehiculo: false,
      editarvehiculo: false,
      activeTab: 0,

      //datos de la tabla filtrada
      items: [],
      activePage: 1,
      maxPages: 1,
      sorter: { column: "", asc: false },
      tableFilter: "",
      columnFilter: {},
      itemsLimit: 50,
      loading: false,
      texto: null
    };
  },
  mounted: function() {
    this.getClientesT();
  },
  methods: {
    permisos(permisos) {
      return !check.permiso(permisos);
    },
    showRegistro(id) {
      this.$router.push({ path: `clientes/detalles/${id.toString()}` });
    },
    newCliente() {
      this.$router.push({ path: "/regcliente" });
    },
    cotizacion() {
      this.$router.push({ path: "/nvacotizacion" });
    },
    editCliente() {
      this.$router.push({ path: "/regcliente" });
    },
    editVehiculo() {
      this.$router.push({ path: "/editarvehiculo" });
    },
    vehiculos() {
      this.$router.push({ path: "/piso" });
    },
    showVehiculo(id) {
      this.$router.push({ path: `vehiculos/detallesv/${id.toString()}` });
    },

   //Eliminar un cliente o usuario
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
                "/api/usuario/delete/" +
                id +
                "?token=" +
                localStorage.getItem("api_token"),
              {}
            )
            .then(function(response) {
              alert.response200("¡Registro eliminado exitosamente!", "");
              self.getClientesT();
            })
            .catch(function(error) {
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
    //borrar un vehiculo, pero no cliente
    deleteVehiculo(id) {
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
                "/api/vehiculo/delete/" +
                id +
                "?token=" +
                localStorage.getItem("api_token"),
              {}
            )
            .then(function(response) {
              alert.response200("¡Registro eliminado exitosamente!", "");
              self.getClientesT();
            })
            .catch(function(error) {
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
    //Traer datos para la tabla vehiculo/cliente
    getClientesT() {
      let self = this;
      self.loading = true;
      self.items = [];
      axios
        .post(
          self.$apiAdress +
            "/api/clientesT?token=" +
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
       
        });
    },
    changeItemsLimit(val) {
      this.itemsLimit = val;
      this.getClientesT();
    }
  },
  //Tabla filtrada
  watch: {

    columnas:function(old,now){

    },
    activePage() {
      this.getClientesT();
    },
    sorter: {
      handler() {
        this.getClientesT();
      },
      deep: true
    },
    tableFilter() {
      this.getClientesT();
    },
    columnFilter() {
      this.getClientesT();
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
