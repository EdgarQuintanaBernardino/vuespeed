<template>
  <CCol sm="">
    <CInput label="Placas o VIN" placeholder="Buscar por VIN o número de placa">
    </CInput>

    <CButton @click="nvoVehiculo = true" color="info">
      <CIcon name="cilMagnifyingGlass" />
      Buscar
    </CButton>
    <div sm="">
      <!--Nos permite llenar nuestro formulario manualmente-->
      <CLink
        @click="collapse = !collapse"
        class="text-info"
        style="float:center;"
      >
        Llenar manualmente
      </CLink>

      <CForm @submit.prevent="store()" method="POST" novalidate>
        <CAlert :show.sync="dismissCountDown" color="success" fade>
          ({{ dismissCountDown }}) {{ message }}
        </CAlert>

        <CCollapse :show="collapse">
          <p>
            <CRow>
            <CCol sm="">
                  <CInput
                label="Nombre"
                type="text"
                placeholder="Nombre"
                 :value.sync="$v.form.name.$model"
                
               
                disabled
              >
                <template #prepend-content><CIcon name="cilUser"/></template>
              </CInput> 
              
              <!--  <CFormGroup wrapperClasses="input-group pt-2">
                  <template #prepend-content><CIcon name="cilUser"/></template>
                  
                  <template #label>Cliente *</template>
                  <template #input>
                    <multiselect
                      v-model="form.name"
                      :options="name"
                      :group-select="true"
                      tag-placeholder="Sin coincidencias"
                      placeholder="Buscar . . ."
                      select-label="Seleccionar"
                      selected-label="Seleccionado"
                      deselect-label="Quitar selección"
                      label="text"
                      track-by="value"
                      :taggable="true"
                      class="form-control border-0 p-0 m-0"
                      :isValid="checkIfValid('name')"
                      :lazy="false"
                    />
                  </template>
                </CFormGroup>-->
           
              
              </CCol>
              

              <CCol sm="">
                <CInput
                  
                  label="Placas *"
                  placeholder="Ingresa tus placas"
                  maxlength="7"
                  :value.sync="$v.form.placas.$model"
                  :isValid="checkIfValid('placas')"
                  @input="calcula"
                  
                >
                  <template #prepend-content
                    ><CIcon name="cil-italic"
                  /></template>
                </CInput>
                <span
                  class="text-danger float-right"
                  v-if="!$v.form.placas.required"
                  >Este campo es obligatorio</span
                >
              </CCol>
            </CRow>
            <br>

            <CRow>
              <CCol sm="">
                <CInput
                  label="Vin/No. de chasis"
                  placeholder="Ingresa tu Vin/No. de chasis"
                  :value.sync="form.n_chasis"
                >
                  <template #prepend-content
                    ><CIcon name="cil-ListNumbered"
                  /></template>
                </CInput>
              </CCol>


              <CCol sm="">
<CInputCheckbox
              
              :checked.sync="opc_otro"
              label="Otro"
              invalidFeedback=""
              custom
              class=" float-right"
            />
            
                <CInput placeholder="escribe nueva marca" label="Marca *" 
                v-model="form.make"
                 v-if="opc_otro == true"
                 >
                </CInput>

      <div class="col-xs-6" id="app" v-else>
 
        <div class="form-group">
          <label for="make">Marca *</label>
          <select class="form-control" name="make" id="make" v-model="form.make">
            <option :value="null" disabled selected>Selecciona marca</option>
            <option v-for="option in makes_options" v-bind:value="option.id" v-bind:key="option.text">{{option.text}}</option>
          </select>
        </div>
      </div>

         <!--       <div class="form-group">
                  <label for="exampleFormControlSelect1">Marca *</label>
                  <select
                    :value.sync="form.modelos"
                    class="form-control"       
                    v-model="selectedMarcas"
                    @change="selectMar"
                    track-by="id"
                  >
                    <option
                      v-for="mar in marcas"
                      :key="mar.id"
                      :value="mar.id"
                      >{{ mar.nombre }}</option
                    >
                  </select>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="">
                <div class="form-group">
                  <label for="exampleFormControlSelect2">Modelos *</label>
                  <select
                    class="form-control"
                    v-model="form.modelos"
                    :value.sync="form.modelos"
                    v-if="selectedMarcas !=-1" 
                    track-by= "id"
                    >
                    <option
                      v-for="mod in marcas[selectedMarcas-1].modelos"
                      :key="mod.id"
                      :value="mod.id"
                      >{{mod}}</option
                    >
                  </select>
                </div>-->
              </CCol>
            </CRow>


            <CRow>
<CCol sm="">
    <CInput placeholder="escribe nuevo modelo" label="Modelo *" 
                v-model="form.model"
                 v-if="opc_otro == true"
                 >
                </CInput>

                <div class="form-group" v-else>
    <label for="model">Modelo *</label>
    <select class="form-control" name="model" id="form.model" v-model="form.model" >
      <option :value="null" disabled selected>Selecciona modelo</option>
      <option v-for="option in model_options[form.make]" v-bind:value="option.id" v-bind:key="option.id">{{option.text}}</option>
    </select>
  </div>
  </CCol>

              <CCol sm="">
                <CFormGroup wrapperClasses="input-group pt-2">
                  <template #prepend-content><CIcon name="cilList"/></template>
                  <template #append
                    ><CButton color="secondary" title="Recargar"
                      ><CIcon name="cilLoop"/></CButton
                  ></template>
                  <template #label>Categoria</template>
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
                      track-by="value"
                      :taggable="true"
                      class="form-control border-0 p-0 m-0"
                      selectionType="tags"
                      :selection="true"
                    />
                  </template>
                </CFormGroup>
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="">
                <CInput
                  label="Año"
                  placeholder="Ingresa Año"
                  :value.sync="form.año"
                >
                  <template #prepend-content
                    ><CIcon name="cilCalendar"
                  /></template>
                </CInput>
              </CCol>

              <CCol sm="">
                <CInput
                  label="No. de motor"
                  placeholder="Ingresa tu No. de motor"
                  :value.sync="form.n_motor"
                >
                  <template #prepend-content
                    ><CIcon name="cilListNumbered"
                  /></template>
                </CInput>
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="">
                <CInput
                  label="Color"
                  placeholder="Ingresa Color del auto"
                  :value.sync="form.color"
                >
                  <template #prepend-content
                    ><CIcon name="cilColorFill"
                  /></template>
                </CInput>
              </CCol>

              <CCol sm="">
                <CFormGroup wrapperClasses="input-group pt-2">
                 
                  <template #label>Engomado *</template>
                  <template #input>
                    <multiselect
                      disabled
                      v-model="form.engomado"
                      :options="$options.multiselectOptions"
                      :group-select="true"
                      tag-placeholder="Sin coincidencias"
                      placeholder="Buscar . . ."
                      select-label="Seleccionar"
                      selected-label="Seleccionado"
                      deselect-label="Quitar selección"
                      label="text"
                      track-by="value"
                      :taggable="true"
                      class="form-control border-0 p-0 m-0"
                      selectionType="tags"
                      :selection="true"
                    />
                  </template>
                </CFormGroup>
                <span
                  class="text-danger float-right"
                  v-if="!$v.form.engomado.required"
                  >Este campo es obligatorio</span
                >
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="">
                <CInput
                  label="Marca de motor"
                  placeholder="Ingresa Marca de motor"
                  :lazy="false"
                  :value.sync="form.marca_motor"
                >
                  <template #prepend-content
                    ><CIcon name="cilBookmark"
                  /></template>
                </CInput>
              </CCol>

              <CCol sm="">
                <CFormGroup wrapperClasses="input-group pt-2">
                  <template #prepend-content
                    ><CIcon name="cilSpeedometer"
                  /></template>
                  <template #append
                    ><CButton color="secondary" title="Recargar"
                      ><CIcon name="cilLoop"/></CButton
                  ></template>
                  <template #label>Transmisión</template>
                  <template #input>
                    <multiselect
                      v-model="form.transmision"
                      :options="$options.multiTransmision"
                      :group-select="true"
                      tag-placeholder="Sin coincidencias"
                      placeholder="Buscar . . ."
                      select-label="Seleccionar"
                      selected-label="Seleccionado"
                      deselect-label="Quitar selección"
                      label="text"
                      track-by="value"
                      :taggable="true"
                      class="form-control border-0 p-0 m-0"
                      selectionType="tags"
                      :selection="true"
                    />
                  </template>
                </CFormGroup>
              </CCol>
            </CRow>
          </p>
          <CButton
            type="submit"
            class="btn btn-success float-right"
            @click="store()"
            :disabled="!isValid || submitted"
            :hidden="submitted"
            ><CIcon name="cilSave" /> Guardar</CButton
          >
        </CCollapse>
      </CForm>
    </div>
  </CCol>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { validationMixin } from "vuelidate";
import alert from "@/repositories/global/alert";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import check from "@/repositories/global/check";
import Swal from "sweetalert2";
import Repositories from "../Repositories";


export default {
  name: "NvoVehiculo",
  components: {
    Multiselect
  },
  data() {
    return {
      selectedMarcas:-1,

      opc_otro: false,
   
      submitted: false,
      form: this.getEmptyForm(),
      name: [],
      make: [],
      model: [],
      categoria: [],
      engomado: [],
      transmision: [],
      nvoVehiculo: false,
      collapse: false,
      innerCollapse: false,
      //alerta
      message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
  
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
        id: 6
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
      "BMW": [
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
    }

    };
    
  },

  mounted: function() {
    this.getCliente();
    this.getRegistro();  
   // this.selectmarca();
  },
  computed: {

    formString() {
      return JSON.stringify(this.form, null, 4);
    },
    isValid() {
      return !this.$v.form.$invalid;
    },
    isDirty() {
      return this.$v.form.$anyDirty;
    }
  },
  multiselectOptions: [
    { value: "Amarillo", text: "Amarillo" },
    { value: "Azul", text: "Azul" },
    { value: "Rosa", text: "Rosa" },
    { value: "Rojo", text: "Rojo" },
    { value: "Verde", text: "Verde" }
  ],
  multiTransmision: [
    { value: "Automática", text: "Automática" },
    { value: "Manual", text: "Manual" }
  ],
  multiCategoria: [
    { value: "Sedan", text: "Sedán" },
    { value: "SUV", text: "SUV" },
    { value: "PickUp", text: "PickUp" },
    { value: "Van", text: "Van" },
    { value: "Hatchback", text: "Hatchback" },
    { value: "Convertible", text: "Convertible" },
    { value: "CompactoL", text: "Compacto Lujo" },
    { value: "SedanL", text: "Sedán Lujo" },
    { value: "SUVL", text: "SUV Lujo" },
    { value: "Cam_carga", text: "Camioneta Carga" },
    { value: "Camion", text: "Camión" },
  ],
  mixins: [validationMixin],
  validations: {
    form: {
    //  tipo: { required },
      name: { required, maxLength: maxLength(150) },
      placas: { required, maxLength: maxLength(10) },
    //  make: { required},
     // model: { required},
      engomado: { required }
    }
  },
  
  methods: {
        IsNumberIn(val){
          let response=null;
          switch(val){
            case "1":
               response={ value: "Verde", text: "Verde" };
               break;
            case "2":
              response={ value: "Verde", text: "Verde" };
              break;           
            case "3":
              response= { value: "Rojo", text: "Rojo" };
              break;
            case "4":
              response= { value: "Rojo", text: "Rojo" };
              break;
            case "5":
              response={ value: "Amarillo", text: "Amarillo" };
              break;  
             case "6":
              response={ value: "Amarillo", text: "Amarillo" };
              break;
            case "7":
             response={ value: "Rosa", text: "Rosa" };
             break;  
            case "8":
             response={ value: "Rosa", text: "Rosa" };
             break; 
            case "9":
             response= { value: "Azul", text: "Azul" };
             break;
             case "0":
              response= { value: "Azul", text: "Azul" };
              break;
          }

        return response;
        },
    calcula(val){
          let encontrado=null;
          let temp;
        for(let a=0;a<val.length;a++){
           temp=this.IsNumberIn(val.charAt(a));
          if(temp!=null){
            encontrado=temp;
          }
    
        }
    if(val.length==0||encontrado==null){
      this.form.engomado=[];
    }else{
      this.form.engomado=encontrado;
    }
    },
 

    goBack() {
      this.$router.go(-1);
    },
    permisos(permisos) {
      return !check.permiso(permisos);
    },
    showRegistro(id) {
      this.$router.push({ path: `clientes/detalles/${id.toString()}` });
    },
    newCliente() {
      this.$router.push({ path: "/regcliente" });
    },
    getEmptyForm() {
      return {
        tipo: "Automovil",
        name: "",
        placas: "",
        n_chasis: "",
        make: "",
        model: "",
        categoria: "",
        año: "",
        n_motor: "",
        color: "",
        engomado: "",
        marca_motor: "",
        transmision: ""
      };
    },
    clearForm() {
      let self = this;
      self.form.name = "";
      self.form.placas = "";
      self.form.n_chasis = "";
      self.form.make = "";
      self.form.model = "";
      self.form.categoria = "";
      self.form.año = "";
      self.form.n_motor = "";
      self.form.color = "";
      self.form.engomado = "";
      self.form.marca_motor = "";
      self.form.trasmision = "";
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    checkIfValid(fieldName) {
      const field = this.$v.form[fieldName];
      if (!field.$dirty) {
        return null;
      }
      return !(field.$invalid || field.$model === "");
    },


    //Registrar usuario 
    store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
          "Enviaras toda la información relacionada a este registro a la base de datos."  +"\n"+"<br/> Nombre:"+this.form.name+"\n"+"<br/> Placas:"+this.form.placas+"\n"+"<br/> Vin/No.chasis:"+this.form.n_chasis
           +"\n"+"<br/> Marca:"+this.form.make +"\n"+"<br/> Modelo:"+this.form.model +"\n"+"<br/> Categoria:"+this.form.categoria.value
            +"\n"+"<br/> Año:"+this.form.año +"\n"+"<br/> No.motor:"+this.form.n_motor +"\n"+"<br/> Color:"+this.form.color
             +"\n"+"<br/> Engomado:"+this.form.engomado.value +"\n"+"<br/> Marca de motor:"+this.form.marca_motor +"\n"+"<br/> Transmisión:"+this.form.transmision.value,
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {
         
 let self = this;
      self.submitted = true;
      self.errors = [];

      self.form.val_ant_name = self.form.name;
      self.form.name= self.form.name.value

      self.form.val_ant_cat = self.form.categoria;
      self.form.categoria = self.form.categoria.value;

      self.form.val_ant_eng = self.form.engomado;
      self.form.engomado = self.form.engomado.value;

      self.form.val_ant_tra = self.form.transmision;
      self.form.transmision = self.form.transmision.value;
      
        axios
        .post(
          this.$apiAdress +
            "/api/vehiculo/almacenar?token=" +
            localStorage.getItem("api_token"),
          self.form
        )
            .then(function(response) {
           alert.response200("¡Registro guardado exitosamente!", "");
          self.clearForm();
          console.log(response.data)
          self.submitted = false;
             
            })
            
            .catch(function(error) {
              self.submitted = false;
          
          self.form.categoria = self.form.val_ant_cat;
          self.form.engomado = self.form.val_ant_eng;
          self.form.transmision = self.form.val_ant_tra;
          self.form.name=self.form.val_ant_name;
          self.errors = alert.responseCatch(error, "Code #1009");
            });
            
        }
      });
    },

    

   
   

   async getCliente() {
      let self = this;
      self.name = [];
    // self.form.name = await Repositories.getnombre(self);
     // self.showForm = false;
      axios
        .post(
          this.$apiAdress +
            "/api/usuario/getAll?token=" +
            localStorage.getItem("api_token"),
          {}
        )
        .then(function(response) {
          console.log(response.data);
          console.log("bien");
          response.data.forEach(function(valor, indice, array) {
            self.cliente.push({
              value: valor.id,
              text: valor.name +"\n" + valor.apell
           
            
            });
          });
        })
        .catch(function(error) {
          alert.responseCatch(error, "Code #1005");
        });


        
    }


    , async getRegistro() {
      let self = this;
      self.form.name = await Repositories.getnombre(self);
      self.showForm = false;
    },
  }
};
</script>
