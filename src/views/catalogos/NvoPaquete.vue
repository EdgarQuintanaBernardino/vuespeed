<template>



    <div><CCol lg="6">
          <CCard :class="`bg-${submitted ? 'info' : 'secondary' }`">
            <pre>{{formString}}</pre>
          </CCard>
        </CCol>
        <div>
   <CCol sm="">
    <CCard  color="gradient-secondary">
<h3 class="m-3 text-dark" >Paquete de reparaciones</h3>
      <CRow>
<CCol sm="" class="ml-3 m-3">
      <div class="col-xs-6" id="app">
 
  <div class="form-group">
    
    <label for="make">Marca *</label>
    
    <select class="form-control" name="make" id="make" v-model="form.make">
    
      <option :value="null" disabled selected>Selecciona marca</option>
      <option v-for="option in makes_options" v-bind:value="option.id" v-bind:key="option.text">{{option.text}}</option>
    </select>
  </div>
</div>
<br>

</CCol>
<CCol sm="" class="m-3">
  <div class="form-group">
    <label for="model">Modelo *</label>
    <select class="form-control" name="model" id="form.model" v-model="form.model" >
      <option :value="null" disabled selected>Selecciona modelo</option>
      <option v-for="option in model_options[form.make]" v-bind:value="option.id" v-bind:key="option.id">{{option.text}}</option>
    </select>
  </div>
<br>
</CCol>
<CCol sm="" class="m-3">
  
    <CFormGroup wrapperClasses="input-group pt-2">
                  
                  <template #label class="text-dark">Categoria</template>
                  <template #input>
                    <multiselect
                      v-model="form.categoria"
                      :options="$options.multiCategoria"
                      :group-select="true"
                      tag-placeholder="Sin coincidencias"
                      placeholder="Buscar . . ."
                      select-label="Seleccionar"
                      selected-label="Seleccionado"
                      deselect-label="Quitar selección"
                      label="text"
                      track-by="text"
                      :taggable="true"
                      class="form-control border-0 p-0 m-0"
                      selectionType="tags"
                      :selection="true"
                    />
                  </template>
                </CFormGroup>
<br>
</CCol>
<CCol sm="" class="m-3 mr-2 ">
<CFormGroup wrapperClasses="input-group pt-2">
                  
                  <template #label class="text-dark">Cilindros</template>
                  <template #input>
                    <multiselect
                      v-model="form.cilindros"
                      :options="$options.Cilindros"
                      :group-select="true"
                      tag-placeholder="Sin coincidencias"
                      placeholder="Buscar . . ."
                      select-label="Seleccionar"
                      selected-label="Seleccionado"
                      deselect-label="Quitar selección"
                      label="text"
                      track-by="text"
                      :taggable="true"
                      class="form-control border-0 p-0 m-0"
                      selectionType="tags"
                      :selection="true"
                    />
                  </template>
                </CFormGroup>
<br>
</CCol>
      </CRow>
    </CCard>
   </CCol>
      <CCol sm="">
        <CCard>
          <CCardHeader>
          <h3 class="text-dark ml-1">Nombre Reparación</h3>
          <CInput  
          size="lg"
          class="w-50 "
          placeholder="Escribe el nombre de la reparacion"
          :value.sync="form.descrip"
        />


           <CRow>  
      <CButton
        @click="collapse = !collapse"
        color="dark"
        style="float:center;"
        class="mb-2 mr-2 ml-3"
      >
        <CIcon name="cilSettings"/> 
        Nueva Refacción  
      </CButton> 

<CCollapse :show="collapse">
<FormCotizacion  @add-persona="agregarPersona" />

</CCollapse>

<CButton

        @click="collapseM = !collapseM"
        color="dark"
        style="float:center;"
        class="mb-2 mr-2 ml-2"
      >
      <CIcon name="cilPlus"/> 
      Nueva Mano de obra
</CButton> 
<br>

<CCollapse :show="collapseM">
  <br> 
<FormCotizacionMano  @add-persona="agregarPersona" class="ml-3"/>

</CCollapse>
  </Crow>
</CCardHeader>
   <CCardBody>
 <ListaCotizaciones :personas="personas"
  @delete-persona="eliminarPersona"
   @actualizar-cotizaciom="actualizarCotizacion"
 />
  <CCol style=" float: right;" sm="2" >
    <CInput label="Total" class="mr-1"  :value="suma" >{{suma}}</CInput>
    </CCol>
</CCardBody>

        <CCardFooter>
        <CRow>
        <CCol>
          <div class="">
          <button type="submit" class="btn btn-secondary w-75 m-3"  @click="goBack"><CIcon name="cilArrowThickToLeft"/> Cancelar</button>
          </div>
        </CCol>
        <CCol>
        <div class="">
         <button type="submit" @click="store()" class="btn btn-info w-75 m-3" ><CIcon name="cilSave"/> Guardar</button>
        </div>
        </CCol>
      </CRow>
        </CCardFooter>
        </CCard>
      </CCol>
  </div>
  </div>
</template>

<script>
  //Importaciones 
import axios from 'axios'
import NvoVehiculo from '../vehiculos/NvoVehiculo' 
import { required, length} from "vuelidate/lib/validators"
import Multiselect from 'vue-multiselect'
import alert from "@/repositories/global/alert";
import Swal from "sweetalert2";
import 'vue-multiselect/dist/vue-multiselect.min.css'
import ListaCotizaciones from '../cotizaciones/ListaCotizaciones'
import FormCotizacion from '../cotizaciones/FormCotizacion'
import FormCotizacionMano from '../cotizaciones/FormCotizacionMano'

  export default {
     name: 'nvacotizacion',
    props: ['value0'],
     components:{
     Multiselect,
     NvoVehiculo,
          ListaCotizaciones,
          FormCotizacion,
          FormCotizacionMano
     }, 
   data(){
    return{   
      submitted: false,
      
      makes_options: [
      {
        text: "Honda",
        id: "Honda"
      },
      {
        text: "Toyota",
        id: "Toyota"
      },
      {
        text: "Nissan",
        id: "Nissan"
      },
      {
        text: "Suzuki",
        id: "Suzuki"
      },
      {
        text: "Chevrolet",
        id: "Chevrolet"
      },
      {
        text: "Audi",
        id: "Audi"
      },
      {
        text: "Bmw",
        id: "Bmw"
      },
      {
        text: "Ford",
        id: "Ford"
      },
      {
        text: "Ferrari",
        id: "Ferrari"
      },
      {
        text: "Mazda",
        id: "Mazda"
      },
      {
        text: "Fiat",
        id: "Fiat"
      },
      {
        text: "Citroen",
        id: "Citroen"
      }
    ],
    model_options: {
      "Honda": [
        {
          text: "Accord",
          id: "Accord"
        },
        {
          text: "BR-V",
          id: "BR-V"
        },
        {
          text: "CR-V",
          id: "CR-V"
        },
        {
          text: "City",
          id: "City"
        },
        {
          text: "Civic",
          id: "Civic"
        },
        {
          text: "Civic Type-R",
          id: "Civic Type-R"
        },
        {
          text: "Fit",
          id: "Fit"
        },
        {
          text: "HR-V",
          id: "HR-V"
        },
        {
          text: "Odyssey",
          id: "Odyssey"
        },
        {
          text: "Passport",
          id: "Passport"
        },
        {
          text: "Pilot",
          id: "Pilot"
        },
        {
          text: "Ridgeline",
          id: "Ridgeline"
        },
      ],
      "Toyota": [
        {
          text: "Avanza",
          id: "Avanza"
        },
        {
          text: "Camry",
          id: "Camry"
        },
        {
          text: "Corolla",
          id: "Corolla"
        },
        {
          text: "Hi Ace",
          id: "Hi Ace"
        },
        {
          text: "Highlander",
          id: "Highlander"
        },
        {
          text: "Hilux",
          id: "Hilux"
        },
        {
          text: "Prius",
          id: "Prius"
        },
        {
          text: "Prius C",
          id: "Prius C"
        },
        {
          text: "Prius V",
          id: "Prius V"
        },
        {
          text: "RAV4",
          id: "RAV4"
        },
        {
          text: "Sienna",
          id: "Sienna"
        },
        {
          text: "Supra",
          id: "Supra"
        },
        {
          text: "Tacoma",
          id: "Tacoma"
        },
        {
          text: "Tundra",
          id: "Tundra"
        },
        {
          text: "Yaris",
          id: "Yaris"
        },
      ],
      "Nissan": [
        {
          text: "Altima",
          id: "Altima"
        },
        {
          text: "Armada",
          id: "Armada"
        },
        {
          text: "Frontier",
          id: "Frontier"
        },
        {
          text: "Juke",
          id: "Juke"
        },
        {
          text: "Kicks",
          id: "Kicks"
        },
        {
          text: "March",
          id: "March"
        },
        {
          text: "Máxima",
          id: "Máxima"
        },
        {
          text: "Murano",
          id: "Murano"
        },
        {
          text: "NP300",
          id: "NP300"
        },
        {
          text: "NV350",
          id: "NV350"
        },
        {
          text: "Pathfinder",
          id: "Pathfinder"
        },
        {
          text: "Rogue",
          id: "Rogue"
        },
        {
          text: "Sentra",
          id: "Sentra"
        },
        {
          text: "Versa",
          id: "Versa"
        },
        {
          text: "X-Trail",
          id: "X-Trail"
        },
        {
          text: "Zuke",
          id: "Zuke"
        },
        {
          text: "370Z",
          id: "370Z"
        },
      ],
      "Suzuki": [
        {
          text: "Alto",
          id: "Alto"
        },
        {
          text: "Swift",
          id: "Swift"
        }
      ],
      "Chevrolet": [
        {
          text: "Aveo",
          id:  "Aveo"
        },
        {
          text: "Camaro",
          id: "Camaro"
        }
      ],
      "Audi": [
        {
          text: "A7 Sportback",
          id: "A7 Sportback"
        },
        {
          text: "Audi Q3",
          id: "Audi Q3"
        }
      ],
      "Bmw": [
        {
          text: "Serie 5",
          id: "Serie 5"
        },
        {
          text: "Bmw i8",
          id: "Bmw i8"
        }
      ],
      "Ford": [
        {
          text: "Focus",
          id: "Focus"
        },
        {
          text: "Mustang",
          id: "Mustang"
        }
      ],
      "Ferrari": [
        {
          text: "812 Superfast",
          id: "812 Superfast"
        },
        {
          text: "Roma",
          id: "Roma"
        }
      ],
      "Mazda": [
        {
          text: "Mazda 3",
          id: "Mazda 3"
        },
        {
          text: "Mazda CX-5",
          id: "Mazda CX-5"
        }
      ],
      "Fiat": [
        {
          text: "Xsara",
          id:  "Xsara"
        },
        {
          text: "Picasso",
          id: "Picasso"
        }
      ],
      "Citroen": [
        {
          text: "Strada",
          id: "Strada"
        },
        {
          text: "Furgon",
          id: "Furgon"
        }
      ],
    },
    

    nvoVehiculo: false,
    status: 'not_accepted',


    form: this.getEmptyForm(),
    cliente:[],
    options: ['IVA'],
    vehiculo:[],
    orden:[],
    personas: [],
    collapse: false,
    collapseM: false,
    innerCollapse: false,
    editando: null,

    descuento:'',
    totaldescuento:''
    }
   },
     multiCategoria: [
    { value: "Sedán", text: "Sedán" },
    { value: "SUV", text: "SUV" },
   
    { value: "PickUp", text: "PickUp" },
    { value: "Van", text: "Van" },
    { value: "Hatchback", text: "Hatchback" },
    { value: "Convertible", text: "Convertible" },
    { value: "CompactoL", text: "Compacto Lujo" },
    { value: "SedánL", text: "Sedán Lujo" },
  ],
   Cilindros: [
    { value: "4", text: "4" },
    { value: "6", text: "6" },
    { value: "8", text: "8" },
    { value: "10", text: "10" },
  
  ],
    mounted: function(){
    this.getCliente()
    this.getVehiculo()
   },
 
  multicliente:[],
  multiorden:[{ value: 'Servicio', text: 'Servicio' },
  { value: 'Garantia', text: 'Garantia' },{ value: 'Rescate Vial', text: 'Rescate Vial' }],

  validations: {
    form: {
     // cliente: {required}, 
     // orden:{required},
     // vehiculo:{required}
    },
  },
  computed:{
    formString() { return JSON.stringify(this.form, null, 4) },

suma(){
  let SumaTotal = 0;
  for (let i = 0; i < this.personas.length; i++) {
      SumaTotal = SumaTotal + this.personas[i].subtotal;
     
  } console.log('es este' + SumaTotal)
return SumaTotal;

  }
   },
   
    methods:{
    
    //Registrar nueva cita
  store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
        "Enviaras toda la información relacionada a este registro a la base de datos.",
       reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {
          let self = this;
      self.submitted = true
      self.errors = []

    

      self.form.val_ant_categoria=self.form.categoria
      self.form.categoria=self.form.categoria.text

      self.form.val_ant_cilindros=self.form.cilindros  
      self.form.cilindros=self.form.cilindros.text

          axios.post(this.$apiAdress+'/api/catalogo/almacenar?token='+localStorage.getItem("api_token"), self.form
      ) 
            .then(function (response) {
                    console.log(response.data)
            alert.response200("¡Registro guardado exitosamente!", "");
         //   self.clearForm()
            self.submitted = false; 
      
            self.form.categoria=self.form.val_ant_categoria
            self.form.cilindros=self.form.val_ant_cilindros

      }) 
  
            .catch(function(error) {
                self.submitted = false;  
          
         // self.form.correo=self.form.val_ant_correo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
          self.errors = alert.responseCatch(error, 'Code #1009');
            });
        }
      });
    },
      
      operacion() {
            this.persona.subtotal = parseFloat(this.numberone) *
                parseFloat(this.numbertwo);
                this.persona.grantotal=parseFloat(this.persona.subtotal) 
        },

     agregarPersona(persona) {
    let id = 0;
    if (this.personas.length > 0) {
      id = this.personas[this.personas.length - 1].id + 1;
    }
    
    this.personas= [...this.personas, { ...persona, id}];
    console.log(this.personas)
  },

    goBack() {
      this.$router.go(-1);
    },
    newVehiculo(){
    this.$router.push({path: '/cotizacion'});
      },  
     /* agregarDirectorio() {
      let id = 1;
      if (this.directorios.length > 0) {
        id = this.directorios[this.directorios.length - 1].id + 1;
      }
      this.directorios = [...this.directorios, { ...directorio, id }];
      //  this.directorios=[this.directorios, directorio];
    },*/
    
   getEmptyForm() {
    return {

      make: '',
      model:'',
      categoria:'',
      cilindros:'',
      descrip:'',
      suma:'',
      } 
   },

   getCliente() {
      let self = this;
      self.cliente = []
      axios.post(this.$apiAdress+'/api/usuario/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
        console.log(response.data)
        response.data.forEach(function(valor, indice, array) {
          self.cliente.push({
            value: valor.id,
            text: valor.name
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },

    getVehiculo() {
      let self = this;
      self.vehiculo = []
      axios.post(this.$apiAdress+'/api/vehiculo/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
        console.log(response.data)
        response.data.forEach(function(valor, indice, array) {
          self.vehiculo.push({
            value: valor.id,
            text: valor.plac
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },

    eliminarPersona(id) {
      this.personas = this.personas.filter(
        persona => persona.id !== id
      );
    },
    actualizarCotizacion(id, personaActualizada) {
    this.personas = this.personas.map(persona =>
    persona.id === id ? personaActualizada : persona
     )}
    }  
  }
     </script>
     <style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

    