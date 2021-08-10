<template>
        
        <CCard sm="6">
          <CCardHeader>
            <h3 class="text-info">Catálogos </h3>
            <CNav variant="pills">
              <CNavItem :hidden="permisos(['catalogo.create','catalogo.show','catalogo.edit', 'catalogo.destroy'])" :active="actCL" to="/catalogos" :class="actCL ? 'text-white ' : ''">
                <CIcon name="cilList"/> Paquetes / Reparaciones
              </CNavItem>
              <CNavItem :hidden="permisos(['catalogo.create'])" :active="actCC" to="/catalogos/registrar" :class="actCC ? 'text-white' : ''">
                <b-icon icon="plus-circle"></b-icon> Mano de Obra
              </CNavItem>
              </CNav>
          </CCardHeader>
<br>
          <CCol>
          <CButton color="success"> Nuevo<CIcon name="cilPlus"/> </CButton>
          </CCol>
          <CCardBody>
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
                  :fields="[
                    { key: '', label: 'NOMBRE' },
                    { key: '', label: 'DESCRIPCIÓN' },
                    { key: '', label: 'COSTO' },
                    { key: '', label: 'PRECIO' },
                    { key: '', label: 'TOTAL M.O.' },
                 //    { key: 'id_vehiculo', label: 'ID_VEHÍCULO' },
                    { key: '', label: 'TOTAL PRODUCTOS' },
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
                    placeholder: 'Buscar',
                    label: 'Buscar:'                          
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
          </CCardBody>
        </CCard>
</template>

<script>
import check from '@/repositories/global/check'

export default {
  name: 'CatIndex',
  props:{
    actCL: Boolean,
    actCC: Boolean,
  },
  data() {
    return {
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
  methods: {
    permisos(permisos) {
      return !check.permiso(permisos)
    }   
  },
}
</script>
