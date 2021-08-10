<template>
  <!-- se muestra esta vista principal de nuestro menu clientes y vehiculos-->
  <CCard>
    <CCardHeader>
      <CRow>
        <CCol>
          <h2 class="text-info">Clientes y Vehículos</h2>
        </CCol>

        <CCol class="float-right">

          <CButton
            style="float: right;"
            size="sm"
            @click="vehiculos()"
            shape="pill"
            color="secondary"
            v-c-tooltip.hover="{
              content: `Exportar`
            }"
          >
            <CIcon name="cil-arrow-thick-from-left" />
          </CButton>

        

          <CButton
            style="float: right;"
            size="sm"
            @click="vehiculos()"
            shape="pill"
            color="secondary"
            v-c-tooltip.hover="{
              content: `Importar`
            }"
          >
            <CIcon name="cilArrowThickFromRight" />
          </CButton>
          <CButton
            style="float: right;"
            size="sm"
            @click="vehiculos()"
            shape="pill"
            color="danger"
            ><CIcon name="cil-dollar" /> En piso
          </CButton>
          <CButton
            style="float: right;"
            size="sm"
            @click="deudor()"
            shape="pill"
            color="danger"
            ><CIcon name="cil-dollar" /> Deudores
          </CButton>
        </CCol>
      </CRow>
      <!--Boton que realiza el registro de un nuevo cliente-->
      <CButton
        type="button"
        shape="pill"
        class="btn btn-success m-2"
        @click="newCliente()"
      >
        Nuevo cliente
        <!--para ponerle un icono al boton-->
        <CIcon name="cil-plus" />
      </CButton>
      <!--Boton que realiza el registro de un nuevo vehiculo-->
      <CButton shape="pill" @click="nvoVehiculo = true" color="info">
        Nuevo vehículo
        <CIcon name="cil-plus" />
      </CButton>
      <!--Ventana modal de nuestro boton Nuevo vehiculo-->
      <CModal
        title="Nuevo vehículo"
        color="info"
        size="xl"
        :show.sync="nvoVehiculo"
      >
        <NvoVehiculo />
        <!--inicia el formulario para agregar un nuevo vehiculo-->

        <template #footer>
          <CButton @click="nvoVehiculo = false" color="light">Cancelar</CButton>
        </template>
      </CModal>
    </CCardHeader>

    <CCardBody>
     
      <CButton 
      @click="collapse = !collapse" 
      color="secondary"
      size="sm"
      class="mb-2"
      align-right
    >
     <CIcon name="cil-filter" />
    </CButton>
    <CCollapse :show="collapse"> 


         <div>
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-checkbox-group>
   <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
  </div>
    </CCollapse>
      

      <CTabs>
        <CTab title="Todos los clientes" active>
          <ListaTodos :columnas="selected" />
        </CTab>
        <CTab title="Particulares" >
          <CRow>
            <!--Trae los datos de la tabla de Cliente y Vehiculos realiza la busqueda filtrada -->
            <CCol sm="">
              <perfect-scrollbar
                style="height:40em;width:100%;margin:0px 0px 1% 0px"
              >
                <br />
                <br />
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
                  :fields="selected"
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
                  <template #usuario="{item}">
                    <td>
                      <CLink
                        class="text-info"
                        v-if="!permisos(['clientev.show'])"
                        :hidden="permisos(['clientev.show'])"
                        @click="showRegistro(item.id_cliente)"
                        v-text="item.usuario "
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
        </CTab>
        <CTab title="Flotillas">
          <ListaFlotilla :columnas="selected" />
        </CTab>
        <CTab title="Frecuentes">
          <CRow>
            <!--Trae los datos de la tabla de Cliente y Vehiculos realiza la busqueda filtrada -->
            <CCol sm="">
              <perfect-scrollbar
                style="height:40em;width:100%;margin:0px 0px 1% 0px"
              >
                <br />
                <br />
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
                  :fields="selected"
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
                        :hidden="permisos(['clientev.show'])"
                        @click="showVehiculo(item.id_v)"
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
                              name: 'Editar Vehiculo',
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
                           :hidden="permisos(['vehiculos.destroy'])"
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
          <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
            style="float:right;"
          />
          <p v-text="texto" />
        </CTab>
        <CTab title="No volvieron" >
          <CRow>
            <!--Trae los datos de la tabla de Cliente y Vehiculos realiza la busqueda filtrada -->
            <CCol sm="">
              <perfect-scrollbar
                style="height:40em;width:100%;margin:0px 0px 1% 0px"
              >
                <br />
                <br />
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
                  v-if="selected == 'id'"
                  :fields="selected"
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
                        :hidden="permisos(['clientev.show'])"
                        @click="showVehiculo(item.id_v)"
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
                              name: 'Editar Vehiculo',
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
                           :hidden="permisos(['vehiculos.destroy'])"
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
          <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
            style="float:right;"
          />
          <p v-text="texto" />
        </CTab>
      </CTabs>
    </CCardBody>

    <CCardFooter> </CCardFooter>
  </CCard>
</template>

<script>
//Importaciones
import NvoCita from "../citas/NvoCita";
import ListaFlotilla from "../flotilla/ListaFlotilla";
import ListaTodos from "./ListaClientes/ListaTodos"
import axios from "axios";
import "vue-multiselect/dist/vue-multiselect.min.css";
import alert from "@/repositories/global/alert";
import check from "@/repositories/global/check";
import Swal from "sweetalert2";
import NvoVehiculo from "../vehiculos/NvoVehiculo";
import EditarVehiculo from "../vehiculos/EditarVehiculo";
import Piso from "../vehiculos/Piso";


export default {
  name: "clientes",
  components: {
    ListaFlotilla,
    ListaTodos,
    NvoCita,
    NvoVehiculo,
    EditarVehiculo,
    Piso
  },
  data() {
    return {

      collapse: false,
      innerCollapse: false,
         selected: ["id_cliente","usuario","email","placas","cotizacion","orden","option","eliminar"],

         options:[
        {item:"id_cliente",name:"ID"},
        { item: 'usuario', name: 'USUARIO' },   
        { item: 'telefono', name: 'TEL' },  
        { item: 'empresa', name: 'EMPRESA' },  
        { item: 'cotizaciones', name: 'TOTAL_DE_COTIZACIONES' },  
        { item: 't_ordenes', name: 'TOTAL_DE_ORDENES' },  
        { item: 'placas', name: 'PLACAS' },  
        { item: 'vin', name: 'VIN' },  
        { item: 'email', name: 'EMAIL' },
        { item: 'orden', name: 'Orden de Servicio' },   
        { item: 'cotizacion', name: 'Cotizacion' }, 
        { item: 'option', name: 'Opciones' },  
        { item: 'eliminar', name: 'Eliminar' }, 
       

         ],
        optionsold: [
          { item: 'id', name: 'ID' },
          { item: 'B', name: 'USUARIO' },
          { item: 'C', name: 'EMAIL'},
          { item: 'D', name: 'TEL' },
          { item: 'E', name: 'TIPO DE CLIENTE' },
          { item: 'F', name: 'EMPRESA' },
          { item: 'G', name: 'PLACAS' },
          { item: 'H', name: 'VIN' },
          { item: 'I', name: 'MARCA' },
          { item: 'J', name: 'MODELO' },
          { item: 'K', name: 'TOTAL DE COTIZACIONES' },
          { item: 'M', name: 'TOTAL DE ORDENES' },
          
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
      texto: null,

      message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  mounted: function() {
 
    this.getClienteV();
  },
  methods: {
    permisos(permisos) {
      return !check.permiso(permisos);
    },
    showRegistro(id) {
      this.$router.push({ path: `clientes/detalles/${id.toString()}` });
    },
    showVehiculo(id) {
      this.$router.push({ path: `vehiculos/detallesv/${id.toString()}` });
    },
    newCliente() {
      this.$router.push({ path: "/regcliente" });
    },
    deudor() {
      this.$router.push({ path: "/deudores" });
    },
    cotizacion() {
      this.$router.push({ path: "/nvacotizacion" });
    },
    editCliente() {
      this.$router.push({ path: "/editcliente" });
    },
    editVehiculo() {
      this.$router.push({ path: "/editarvehiculo" });
    },
    vehiculos() {
      this.$router.push({ path: "/piso" });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },

    //Eliminar un cliente o usuario
    deleteRegistro(id) {
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres eliminar este registro?",
        html: "Enviaras toda la información relacionada a este registro a la papelera de reciclaje.",
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
              self.getClienteV();
            })
            .catch(function(error) {
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
    //Eliminar un vehículo
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
              self.getClienteV();
            })
            .catch(function(error) {
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },

    //Traer datos para la tabla vehiculo/cliente
    getClienteV() {
      let self = this;
      self.loading = true;
      self.items = [];
      axios
        .post(
          self.$apiAdress +
            "/api/usuariov?token=" +
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

          console.log("la respuesta es ..")
          console.log(response)
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
    changeItemsLimit(val) {
      this.itemsLimit = val;
      this.getClienteV();
    
    }
  },
  //Tabla filtrada
  watch: {
    activePage() {
      this.getClienteV();
      
    },
    sorter: {
      handler() {
        this.getClienteV();
      
      },
      deep: true
    },
    tableFilter() {
      this.getClienteV();
     
    },
    columnFilter() {
      this.getClienteV();
 
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
