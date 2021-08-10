<template>
  <div>
    <CCard>
      <CCardHeader>
        <CRow>
          <CCol class="float-right">
            <h4> <CIcon name="cil-user" size="lg"/> Cliente: {{form.name}}</h4>
            <p class="text-info">  <CIcon name="cil-phone" /> Cel: {{form.tel_mov}}</p>  
            <p class="text-info"> <CIcon name="cilContact" /> Correo: {{form.email}}</p>
          </CCol>

          <CCol>
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="goBack()"
              shape="pill"
              color="secondary"
              v-c-tooltip.hover="{
                content: `Volver`
              }"
            >
              <CIcon name="cil-arrow-circle-left" />
            </CButton>
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              shape="pill"
              color="secondary"
              v-c-tooltip.hover="{
                content: `Editar`
              }"
             
        :to="{ name: 'Editar Cliente', params: { id: $route.params.id } }"
            >
              <CIcon name="cil-pencil" />
            </CButton>
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="vehiculos()"
              shape="square"
              color="info"
              ><CIcon name="cil-plus" /> Pago
            </CButton>
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="newCotizacion()"
              shape="square"
              color="info"
              ><CIcon name="cil-plus" /> Cotización
            </CButton>
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
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="nvocita = true"
              shape="square"
              color="info"
              ><CIcon name="cil-calendar" /> Agendar cita
            </CButton>
          </CCol>
        </CRow>
        <br>
        
        <CCard class="bg-secondary text-dark">
        <CRow>
          <CCol >
            <H2 class="text-center m-2" >$0</H2>
            <br>
           <H6 class="text-center text-dark">Total Cotizado</H6>
            </CCol>
            <CCol>
            <H2 class="text-center m-2">$0</H2>
              <br>
             <H6 class="text-center text-dark">Ticket Promedio</H6>
            
            </CCol>
            <CCol>
           <H2 class="text-center text-danger m-2">$0</H2>
             <br>
            <H6 class="text-center text-dark">Debe</H6>
            </CCol>
            <CCol>
            <H2 class="text-center text-success m-2">$0</H2>
              <br>
             <H6 class="text-center text-dark">Total Cobrado</H6>
            </CCol>
              <CCol>
            <H2 class="text-center m-2">$0</H2>
              <br>
             <H6 class="text-center text-dark">Balance de cliente</H6>
            </CCol>
              </CRow>
        </CCard>
      </CCardHeader>
    </CCard>

    <CCard>
      <CCardHeader>
        <!--   tab para los servicios que tenga un cliente    -->
        <CTabs>
          <CTab title="Servicios" active>
            <CButton
              style="float: right;"
              class="m-3 "
              size="sm"
            
              shape="square"
              color="success"
              ><CIcon name="cil-plus" /> Orden de servicio
            </CButton>

            <!--Trae los datos de la tabla de Cliente y Vehiculos realiza la busqueda filtrada -->

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
                  { key: '', label: 'Tipo' },
                  { key: '', label: 'Vehículo' },
                  { key: '', label: 'Deuda' },
                  { key: '', label: 'Status' },
                  { key: '', label: 'Creado' },
                  { key: 'acciones', label: 'Acciones' }
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
                  placeholder: 'Filtrar',
                  label: 'Filtrar:'
                }"
                :sorter="{ external: true, resetable: true }"
                :columnFilter="{ external: true, lazy: true }"
                @pagination-change="changeItemsLimit"
                :sorter-value.sync="sorter"
              >
                
                <template #acciones="{item}">
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
              </CDataTable>
            </perfect-scrollbar>
            <CPagination
              :pages="maxPages"
              :active-page.sync="activePage"
              style="float:right;"
            />
          </CTab>
            <!-- tab para visualizar la tabla de los vehículos de un cliente  -->
          <CTab title="Vehículos">
         <VehiculosCliente/>
        
          </CTab>
      <!-- tab para visualizar las difentes citas que se han registrado al usuario  -->
          <CTab title="Citas">
           <CitasCliente/>
          </CTab>

          <!-- tab para la información en general del cliente   -->
          <CTab title="Detalle">
            <br />
            <Detalles />
          </CTab>
          <CTab title="Directorio">
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
                  { key: '', label: 'Nombre' },
                  { key: '', label: 'Puesto' },
                  { key: '', label: 'Email' },
                  { key: '', label: 'Teléfono' }
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
                  placeholder: 'Filtrar',
                  label: 'Filtrar:'
                }"
                :sorter="{ external: true, resetable: true }"
                :columnFilter="{ external: true, lazy: true }"
                @pagination-change="changeItemsLimit"
                :sorter-value.sync="sorter"
              >
              </CDataTable>
            </perfect-scrollbar>
          </CTab>
          <CTab title="Notas de crédito">
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
                  { key: '', label: 'Fecha' },
                  { key: '', label: 'Monto' },
                  { key: '', label: 'Pagado' }
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
                  placeholder: 'Filtrar',
                  label: 'Filtrar:'
                }"
                :sorter="{ external: true, resetable: true }"
                :columnFilter="{ external: true, lazy: true }"
                @pagination-change="changeItemsLimit"
                :sorter-value.sync="sorter"
              >
              </CDataTable>
            </perfect-scrollbar>
          </CTab>
        </CTabs>
      </CCardHeader>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";
import NvoCita from "../citas/NvoCita";
import Detalles from "../cliente/Detalles";
import check from "@/repositories/global/check";
import CitasRecordatorios from "../citas/CitasRecordatorios";
import Repositories from "../cliente/Repositories";
import AddVehiculo from './datos_clientes_vehiculos/AddVehiculo.vue';
import VehiculosCliente from './VehiculosCliente.vue'
import CitasCliente from './CitasCliente.vue'

export default {
  components: {
    Detalles,
    AddVehiculo,
    CitasRecordatorios,
    NvoCita,
    VehiculosCliente,
    CitasCliente
  },
  data() {
 
    return {
      props:{
 items: Array,
         fields: {
           type: Array,
      default () {
        return ['status','concretado']
      }
         }
      },
      tabs: [
        "Próximas citas",
        "Citas pasadas",
        "Citas confirmadas",
        "Citas sin confirmar"
      ],
      
      activeTab: 0,
  
      addVehiculo: false,
      nvocita: false,
      activeTab: 0,
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
      showDismissibleAlert: false,

      form:[],
      showForm:true,
    };
  },
  
  methods: {
    getBadge (status) {
      return status === 'Confirmado' ? 'success'
            : status === 'Sin confirmar' ? 'danger' : 'secondary'
    },
    getBadge (concretado) {
      return concretado === 'Concretado' ? 'success'
            : concretado === 'No concretado' ? 'danger' : 'secondary'
    },

       showVehiculo(id) {
      this.$router.push({ path: `vehiculos/detallesv/${id.toString()}` });
    },

      async getRegistro() {
      let self = this;
      self.form = await Repositories.getRegistro(self);
      self.showForm = false;
    },
    newCotizacion() {
      this.$router.push({ path: "/nvacotizacion" });
    },

    goBack() {
      this.$router.go(-1);
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
            "/api/cita?token=" +
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
  
  changeItemsLimit(val) {
      this.itemsLimit = val;
      this.getcitas();
      this.getvehiculos();
    } ,
  },
  
     mounted: function(){
      this.getcitas()
      
      this.getRegistro();
    }
};
</script>
