<template>     
       
             				
    



  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col>
         <p>
      <b-button size="sm" @click="selectAllRows" class="mr-2" variant="dark" >Seleccionar todos</b-button>
      <b-button size="sm" @click="clearSelected" variant="info">Limpiar seleccionados</b-button>

    </p>
   
       <p>
      seleccionar :<br>
      {{ selected }}
    </p>
      </b-col>
 </b-row>
  <b-row>
      <b-col >
        <b-form-group
          label="Buscar:"
          label-for="filter-input"
          label-cols-sm="2"
          label-align-sm="left"
          style="float:left;"
        >
          <b-input-group    >
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Buscar...."
            
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''" variant="success" >Limpiar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>


      <b-col sm="4" md="4" class="my-1">
        <b-form-group
          label="Paginacion:"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
      
 
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
           
          ></b-form-select>
        </b-form-group>
      </b-col>

     
    </b-row>

    <!-- Main table element -->
    <b-table
      :items="items"

   
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
     :itemsPerPage="itemsLimit"
      stacked="md"
      show-empty
      small
   
     
                  
      :table-filter="{
                    external: true,
                    lazy: true,
                    placeholder: 'Buscar',
                    label: 'Buscar:'                          
                  }"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"

    >

      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import check from '@/repositories/global/check'
import axios from "axios";


import alert from "@/repositories/global/alert";


export default {

  name: 'CatIndex',
 
  data() {
    return {
itemsLimit: 200,
        pageOptions: [5, 10, 15, { value: 100, text: "Mostrar Todos" }],
 

      
        filter: null,
        filterOn: [],
    
        perPage: 5,
     selected: [],
		selectAll: false,
      items: [],

      sorter: { column: "", asc: false },
      tableFilter: "",
      columnFilter: {},
     
      loading: false,
      texto: null,


        selectMode: 'multi',
        selected: []
    }
  },
  mounted: function() {
      this.getCatalogos();
           this.totalRows = this.items.length
    },

  methods: {
  
    select() {
			this.selected = [];
			if (!this.selectAll) {
				for (let i in this.items) {
					this.selected.push(this.items[i].nombre);
				}
      }
    },
      onRowSelected(items) {
        this.selected = items
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
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


  },



}
</script>
