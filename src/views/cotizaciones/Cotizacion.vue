<template>
        <div>
        <CCard sm="6">
          <CCardHeader>
            <h2 class="text-info">Ordenes y Cotizaciones</h2>
      <div class="float-right">
      <CButton 
       size="sm"
       class="m-2" 
       color="warning"
       @click="newCliente()"
       >
       <CIcon 
        name="cilLibrary-add"
       />
       Tareas
       <!--para ponerle un icono al boton-->
       
       </CButton>
      <!--Boton que realiza el registro de una nueva recepcion-->
      <CButton
      size="sm"
      class="m-2"        
      color="success"
      @click="newRecepcion()"  
      > 
       <CIcon 
       name="cilSpeedometer"
       /> 
      Recepción
      </CButton>
      <!--Boton que realiza el registro de una nueva cotización-->
      <CButton
      size="sm"       
      @click="newCotizacion()" 
      color="info"
      > 
      <CIcon 
       name="cil-plus"
       /> 
      Cotización
      </CButton>
      </div>
      
          </CCardHeader>
        </CCard>
        <CCard>
          <CCardBody>
           <CTabs>
              <CTab title="Todos" active>
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
                  :fields="[
                    { key: 'tip_orden', label: 'TIPO' },
                    { key: 'name', label: 'CLIENTE' },
                    { key: 'plac', label: 'PLACAS' },
                    { key: 'marc', label: 'MARCA' },
                    { key: 'mod', label: 'MODELO' },
                    { key: 'deuda', label: 'DEUDA' },
                    { key: 'grantotal', label: 'TOTAL' },
                    { key: '', label: 'UTILIDAD' },
                    { key: 'autorizado', label: 'AUTORIZADO' },
                    { key: 'cod_seg', label: 'CODIGO DE SEGUIMIENTO' },
                    { key: 'n_orden', label: 'NÚMERO DE ORDEN' },
                    { key: 'status', label: 'STATUS' },
                    { key: 'created_at', label: 'FECHA DE CREADO' },
                 
                    
                 //    { key: 'id_vehiculo', label: 'ID_VEHÍCULO' },
                    { key: '', label: 'AUTORIZADO' },
                    { key: '', label: 'DETALLES' },
                    { key: 'option', label: 'ACCIONES' },
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
                <template #name="{item}">
                    <td>
                      <CLink
                        class="text-info"
                        v-if="!permisos([''])"
                        :hidden="permisos([''])"
                        @click="showServicios(item.id)"
                        v-text="item.name "
                      />
                      <span v-else v-text="item.name" />
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
                              name: 'Editar',
                           //   params: { id: item.id_cliente }
                            }"
                            ><CIcon size="sm" class="mr-2" name="cilPencil" />
                            Editar 
                          </CDropdownItem>

                          <CDropdownItem
                         
                          >
                            <CIcon
                              size="sm"
                              class="mr-2"
                              name="cilPencil"
                            />Recordatorio</CDropdownItem
                          >
                          
                          <CDropdownItem
                            :hidden="permisos(['vehiculo.destroy'])"
                            @click="deleteVehiculo(item.id_vehiculo)"
                            ><CIcon size="sm" class="mr-2" name="cilTrash" 
                            
                            />
                            Eliminar</CDropdownItem
                          >
                          <CDropdownItem @click="nvocita = true"
                            ><CIcon size="sm" class="mr-2" name="cilCalendar" />
                            Pago o gasto</CDropdownItem
                          >
                          <CDropdownItem @click="nvocita = true"
                            ><CIcon size="sm" class="mr-2" name="cilCalendar" />
                            Facturar</CDropdownItem
                          >
                        </div>
                      </CDropdown>
                    </td>
                  </template>
                </CDataTable>
              </perfect-scrollbar>
              <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
            style="float:right;"
          />
            </CCol>
          </CRow>
              </CTab>

            <CTab title="Cotización">
                
              </CTab>



              <CTab title="Recibido">
              
              </CTab>
              <CTab title="En proceso">
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
                  :fields="[
                    { key: 'tip_orden', label: 'TIPO' },
                    { key: 'name', label: 'USUARIO' },
                    { key: 'marc', label: 'MARCA' },
                    { key: 'total', label: 'TOTAL' },
                    { key: '', label: 'UTILIDAD' },
                    { key: '', label: 'PORCENTAJE' },
                 //    { key: 'id_vehiculo', label: 'ID_VEHÍCULO' },
                    { key: '', label: 'AUTORIZADO' },
                    { key: '', label: 'STATUS' },
                    { key: 'option', label: 'ACCIONES' },

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
                              name: 'Editar',
                           //   params: { id: item.id_cliente }
                            }"
                            ><CIcon size="sm" class="mr-2" name="cilPencil" />
                            Editar 
                          </CDropdownItem>

                          <CDropdownItem
                         
                          >
                            <CIcon
                              size="sm"
                              class="mr-2"
                              name="cilPencil"
                            />Recordatorio</CDropdownItem
                          >
                          
                          <CDropdownItem
                            :hidden="permisos(['vehiculo.destroy'])"
                            @click="deleteVehiculo(item.id_vehiculo)"
                            ><CIcon size="sm" class="mr-2" name="cilTrash" 
                            
                            />
                            Eliminar</CDropdownItem
                          >
                          <CDropdownItem @click="nvocita = true"
                            ><CIcon size="sm" class="mr-2" name="cilCalendar" />
                            Pago o gasto</CDropdownItem
                          >
                          <CDropdownItem @click="nvocita = true"
                            ><CIcon size="sm" class="mr-2" name="cilCalendar" />
                            Facturar</CDropdownItem
                          >
                        </div>
                      </CDropdown>
                    </td>
                  </template>
                </CDataTable>
              </perfect-scrollbar>
              <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
            style="float:right;"
          />
            </CCol>
          </CRow>
              </CTab>
               <CTab title="Terminado">
                 
            
              </CTab>

              <CTab title="Entregado">
                 
            
              </CTab>
            </CTabs>
          </CCardBody>
          <CCardFooter>
           
          </CCardFooter>

        </CCard>
     
  </div>
      
  
</template>

<script>
  import alert from "@/repositories/global/alert";
  import axios from 'axios'
  import check from "@/repositories/global/check";


  export default {
     name: 'cotizaciones',
     data(){
       return{

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

       }
     },
     mounted: function(){
       this.getCotizacion();
     },
     
  methods:{
    permisos(permisos) {
      return !check.permiso(permisos);
    },
    showServicios(id) {
      this.$router.push({ path: `/servicios/${id.toString()}` });
    },
  newCotizacion(){
    this.$router.push({path: '/nvacotizacion'});
  },
  newRecepcion(){
    this.$router.push({path: '/recepcion'});
  },
  getCotizacion() {
      let self = this;
      self.loading = true;
      self.items = [];
      axios
        .post(
          self.$apiAdress +
            "/api/cotizacion?token=" +
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
      this.getCotizacion();
    
    }
  },
    //Tabla filtrada
  watch: {
    activePage() {
      this.getCotizacion();
      
    },
    sorter: {
      handler() {
        this.getCotizacion();
      
      },
      deep: true
    },
    tableFilter() {
      this.getCotizacion();
     
    },
    columnFilter() {
      this.getCotizacion();
 
    }
  }
  }
</script>