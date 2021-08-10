<template>

  <CRow>
    <CCol sm="12">
      <CButton
      color="info"
      shape='pill'  @click="nvocolaborador = true"  class="mr-3">
      <CIcon name="cilPlus" />
       Nuevo Colaborador
      </CButton>

      <CModal 
      size="lg"
      title="Nuevo Colaborador"
      color="dark"
      :show.sync="nvocolaborador"
    > 
    <NvoColaborador/>
     <template #footer>
        <CButton  @click="nvocolaborador= false" ><CIcon name="cilArrowThickToLeft"/> Cancelar</CButton>
  
      </template>
    </CModal>



      <CCard>
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
    <b-form-checkbox
      id="id"
      v-model="id"
      name="id"
      value="id"
     
    >
      id
    </b-form-checkbox>

    <b-form-checkbox
      id="nombre"
      v-model="nombre"
      name="nombre"
      value="nombre"
     
    >
      nombre
    </b-form-checkbox>

    <div>State: <strong>{{id}}</strong></div>
    <div>State: <strong>{{nombre}}</strong></div>
   
  </div>
    </CCollapse>
    <div>
          <CDataTable

            :items="items"
            :fields ="lazyTableFields"
            index-column
            hover
            footer
            table-column v-if="id"
            items-per-page-select
            :sorter="{ external: true, resetable: true }"
            :columnFilter="{ external: true, lazy: true }"
            :table-filter="{ external: true, lazy: true }"
            @pagination-change="changeItemsLimit"
            :sorter-value.sync="sorter"
            :column-filter-value.sync="columnFilter"
            :table-filter-value.sync="tableFilter"
            :loading="loading" 

           
          >
       
            <template #id="{item}" v-if="id == 'id'" >
             
                <td>
                  <strong  >{{item.id_cliente}}</strong>
                </td>
               
              </template>
              
              <template #nombre="{item}" v-if="nombre == 'nombre'">
                <td style="display:none;">
                  <strong >{{item.Nombre}}</strong>
                </td>
              </template>
              <template #tel_mov="{item}" >
                <td>
                  {{item.Telefono}}
                </td>  
              </template>
              <template #correo="{item}">
                <td>
                  {{item.correo}}
                </td>
              </template>
              <template #rol="{item}">
                <td>
                    {{item.rol}}
                </td>
              </template>
              
          </CDataTable>
</div>
          <CPagination
            :pages="maxPages"
            :active-page.sync="activePage"
          />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
import check from "@/repositories/global/check";
import NvoColaborador from '../detallesempresa/NvoColaborador'

export default {
  name: 'AdvancedTables',
  components:{
  NvoColaborador,
  },

  data () {  
    return {

        id:'',
        nombre:'',
  
      collapse: false,
      innerCollapse: false,
    
      nvocolaborador: false,
      lazyTableFields: ['id', 'nombre', 'telefono', 'correo', 'rol'],
      items: [],
      activePage: 1,
      maxPages: 1,
      sorter: {column: '', asc: false},
      tableFilter: '',
      columnFilter: {},
      itemsLimit: 10,
      loading: false,

    
    }
  },
  watch: {
    activePage(){
      this.getNotes();
    },
  	sorter: {
    	handler(){
      	this.getNotes();
      },
      deep: true
    },
    tableFilter(){
      this.getNotes();
    },
    columnFilter(){
      this.getNotes();
    }
  },
  methods: {

     permisos(permisos) {
      return !check.permiso(permisos);
    },
    
    changeItemsLimit( val ){
      this.itemsLimit = val;
      this.getNotes();
    },
    getNotes (){
      this.loading = true
      let self = this;
      this.items = [];
      axios.post(  self.$apiAdress +
            "/api/colaborador?token=" +
            localStorage.getItem("api_token") +
            "&page=" +
            self.activePage,
        {
          sorter:       self.sorter,
          tableFilter:  self.tableFilter,
          columnFilter: self.columnFilter,
          itemsLimit:   self.itemsLimit
        }
       )
      .then(function (response) {
        self.items = self.items.concat(response.data.data);
            self.maxPages = response.data.last_page;
        self.loading = false
      }).catch(function (error) {
        self.loading = false
        console.log(error);
        console.log('dedddwe',items)
      });
    }
    ,
    makeFilter(){
      this.getNotes();
    },
  }, 
  mounted: function(){
    this.getNotes();
  },
}
</script>

<style>
  .lazyTable{
    display: block;
    height: 450px;
    overflow-y: scroll;
  }

  .lazyTable tr{
    height:50px;
  }
</style>