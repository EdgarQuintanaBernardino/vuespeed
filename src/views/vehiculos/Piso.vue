<template>
        <div>
        <CCard sm="6">
          <CCardHeader>
            <h4 class="text-info">Vehículos</h4>
          </CCardHeader>
         </CCard>
         <CButton shape="pill" @click="nvoVehiculo = true" color="info">
        Nuevo
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
          Nota: aparecen los vehículos con servicios activos. No aparecen los vehículos con tipo de Orden "Rescate Vial" ni los cancelados o entregados.
 <CCard>
<CCardBody>
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
                    { key: 'id_cliente', label: 'ID' },
                    { key: 'usuario', label: 'CLIENTE' },
                    { key: 'marca', label: 'MARCA' },
                    { key: 'kilometros', label: 'KILÓMETROS' },
                    { key: 'dias_piso', label: 'DÍAS EN PISO ' },
                    { key: 'ser_act', label: 'SERVICIOS ACTIVOS' },
                    { key: '', label: 'ACCIONES' },
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
            </CCol>
          </CRow>
          <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
            style="float:right;"
          />
          <p v-text="texto" />

  </CCardBody>

    </CCard>
  </div>


  

</template>

<script>
import NvoVehiculo from "../vehiculos/NvoVehiculo";

export default {
  components: {
    NvoVehiculo,

  },
  data(){
    return{
      nvoVehiculo: false,

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

    }
  },
 
   methods: {
    
   countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    changeItemsLimit(val) {
      this.itemsLimit = val;
 
    }
    }

   //Tabla filtrada
 
  
}
</script>