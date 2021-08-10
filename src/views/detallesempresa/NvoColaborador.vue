<template>
  
        <CForm @submit.prevent="store()"  method="POST" novalidate>
    
            <CCol>
                <h4 class="text-center">Nuevo Colaborador</h4>
            </CCol>

              
            <CRow>
             <CCol sm="6">
                        <CFormGroup wrapperClasses="input-group pt-2">
                          <template #prepend-content
                            ><CIcon name="cilList"
                          /></template>
                          <template #append
                            ><CButton
                              color="secondary"
                              @click="getSucursal()"
                              title="Recargar"
                              ><CIcon name="cilLoop"/></CButton
                          ></template>
                          <template #label>Sucursal *</template>
                          <template #input>
                            <multiselect
                              v-model="$v.form.sucursal.$model"
                              :options="sucursal"
                              :group-select="true"
                              tag-placeholder="Sin coincidencias"
                              placeholder="Buscar . . ."
                              select-label="Seleccionar"
                              selected-label="Seleccionado"
                              deselect-label="Quitar selección"
                              label="textSuc"
                              track-by="valueSuc"
                              :taggable="true"
                              class="form-control border-0 p-0 m-0"
                              :isValid="checkIfValid('sucursal')"
                            />
                          </template>
                        </CFormGroup>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.sucursal.required"
                          >Este campo es obligatorio</span
                        >
                      </CCol>
                      <CCol sm="6">
                        <CFormGroup wrapperClasses="input-group pt-2">
                          <template #prepend-content
                            ><CIcon name="cilList"
                          /></template>
                          <template #append
                            ><CButton
                              color="secondary"
                              @click="getRoles()"
                              title="Recargar"
                              ><CIcon name="cilLoop"/></CButton
                          ></template>
                          <template #label>Roles *</template>
                          <template #input>
                            <multiselect
                              v-model="$v.form.rol.$model"
                              :options="rol"
                              :group-select="true"
                              tag-placeholder="Sin coincidencias"
                              placeholder="Buscar . . ."
                              select-label="Seleccionar"
                              selected-label="Seleccionado"
                              deselect-label="Quitar selección"
                              label="textRol"
                              track-by="valueRol"
                              :taggable="true"
                              class="form-control border-0 p-0 m-0"
                              :isValid="checkIfValid('rol')"
                            />
                          </template>
                        </CFormGroup>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.rol.required"
                          >Este campo es obligatorio</span
                        >
                      </CCol>
            </CRow>
                      <CRow>
                      <CCol sm="">
                        <CInput
                          label="Nombre(s) *"
                          placeholder="Ingresa tu nombre"
                          
                          :lazy="false"
                          :value.sync="$v.form.nombre.$model"
                          :isValid="checkIfValid('nombre')"
                        >
                          <template #prepend-content
                            ><CIcon name="cilUser"
                          /></template>
                        </CInput>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.nombre.required"
                          >Este campo es obligatorio</span
                        >
                        
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Apellidos *"
                          placeholder="Ingresa tus apellidos"
                          
                          :lazy="false"
                          :value.sync="$v.form.apellidos.$model"
                          :isValid="checkIfValid('apellidos')"
                        >
                          <template #prepend-content
                            ><CIcon name="cilUser"
                          /></template>
                        </CInput>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.apellidos.required"
                          >Este campo es obligatorio</span
                        >
                      </CCol>
                      </CRow>
                    
                    <CRow>
                      <CCol>
                        <CInput
                          type="email"
                          label="Correo Electrónico *"
                          placeholder="Ingresa tu Correo"
                        
                          :lazy="false"
                          autocomplete="username email"
                          :value.sync="$v.form.correo.$model"
                          :isValid="checkIfValid('correo')"
                        >
                          <template #prepend-content
                            ><CIcon name="cilContact"
                          /></template>
                        </CInput>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.correo.required"
                          >Este campo es obligatorio</span
                        >
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.correo.email"
                          >Este campo debe ser una dirección de correo
                          electrónico válida.</span
                        >
                      </CCol>

                        <CCol>
                        <CFormGroup
                          wrapperClasses="input-group pt-2"
                          description="ex. (999) 999-9999"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-phone" />
                          </template>
                          <template #label>
                            Teléfono movil *
                          </template>
                          <template #input>
                            <masked-input
                              type="tel"
                              name="phone"
                              :value.sync="$v.form.telefono_movil.$model"
                              :isValid="checkIfValid('telefono_movil')"
                              class="form-control"
                              v-model="form.telefono_movil"
                              :mask="[
                                '(',
                                /[1-9]/,
                                /\d/,
                                /\d/,
                                ')',
                                ' ',
                                /\d/,
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/
                              ]"
                              :guide="true"
                              placeholderChar="#"
                            />
                          </template>
                        </CFormGroup>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.telefono_movil.required"
                          >Este campo es obligatorio</span
                        >
                      </CCol>
                    </CRow>
         

                    <br>
                     <br>
                    <CRow>
                     
                      <CCol>
                        <div
                          class=" d-grid gap-2 d-md-flex justify-content-md-end"
                        >
                          <CButton
                            type="submit"
                            class="btn btn-success w-40"
                            :disabled="!isValid || submitted"
                            :hidden="submitted"
                            @click="store()"
                            ><CIcon name="cilSave" /> Guardar</CButton
                          >
                        </div></CCol
                      >  
                    </CRow>
                  </CForm>
     
</template>
<script>

import axios from "axios";
import Swal from "sweetalert2";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import MaskedInput from "vue-text-mask";

import { validationMixin } from "vuelidate"

import alert from '@/repositories/global/alert'

import { required, email } from "vuelidate/lib/validators"
export default {

    components:{
        Multiselect,
        MaskedInput
    },
    data(){
        return{
            
        form: this.getEmptyForm(),
        sucursal: [],
        rol: [],

        inputDisabled: true,
        submitted: false,
        }
    },
     mounted: function() {
    this.getSucursal(), this.getRoles();

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
    },
    tablaString() {
      return JSON.stringify(this.directorios, null, 4);
    }
  },
     mixins: [validationMixin],
  validations: {
    form: {
     
      sucursal: { required},
      rol: {required},
      nombre: { required },
      apellidos: { required },
      correo: { required, email },
      telefono_movil: { required},
    }
      },
      methods: {

      goBack() {
      this.$router.go(-1);
    },
      getEmptyForm() {
      return {
        nombre: "",
        apellidos: "",
        correo: "",
        sucursal: "",
        rol: "",
        telefono_movil:""
       
      }
      },
       clearForm() {
      let self = this;
      self.form.nombre = "";
      self.form.apellidos = "";
      self.form.correo = "";
      self.form.sucursal = "";
      self.form.rol="" 
      self.form.telefono_movil=""
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
    //Registrar colaborador
  store(){
     
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
          "Enviaras toda la información relacionada a este registro a la base de datos."
          +"\n"+"<br/> Sucursal:"+this.form.sucursal.textSuc +"\n"+"<br/> Roles:"+this.form.rol.textRol +"\n"+"<br/> Nombre:"+this.form.nombre +
          "\n"+"<br/> Apellidos:"+this.form.apellidos +"\n"+"<br/>Correo electrónico:"+this.form.correo
          +"\n"+"<br/> Telefono móvil:"+this.form.telefono_movil,
        
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

      self.form.val_ant_suc = self.form.sucursal;
      self.form.sucursal = self.form.sucursal.valueSuc;

      self.form.val_ant_rol = self.form.rol;
      self.form.rol = self.form.rol.valueRol;


          axios.post(
        this.$apiAdress +"/api/colaborador/almacenar?token=" + localStorage.getItem("api_token"),
        self.form
        )
            .then(function(response) {
              alert.response200("¡Registro guardado exitosamente!", "");
              self.clearForm();
          self.submitted = false;
             
            })
            .catch(function(error) {
              self.submitted = false;
        
          self.form.sucursal = self.form.val_ant_suc;
          self.form.rol = self.form.val_ant_rol;

          self.errors = alert.responseCatch(error, "Code #1009");
          alert.responseCatch(error, "Code #422");
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
  
    }, 
    getSucursal() {
      let self = this;
      self.sucursal = [];
      axios
        .post(
          this.$apiAdress +
            "/api/sucursal/getAll?token=" +
            localStorage.getItem("api_token"),
          {}
        )
        .then(function(response) {
          console.log(response.data);
          response.data.forEach(function(valor, indice, array) {
            self.sucursal.push({
              valueSuc: valor.id,
              textSuc: valor.suc
            });
          });
        })
        .catch(function(error) {
          alert.responseCatch(error, "Code #1005");
        });
    },
    getRoles() {
      let self = this;
      self.rol = [];
      axios
        .post(
          this.$apiAdress +
            "/api/rol/getAll?token=" +
            localStorage.getItem("api_token"),
          {}
        )
        .then(function(response) {
          console.log(response.data);
          response.data.forEach(function(valor, indice, array) {
            self.rol.push({
              valueRol: valor.nom,
              textRol: valor.nom
            });
          });
        })
        .catch(function(error) {
          alert.responseCatch(error, "Code #1005");
        });
    },

      
  }
}

</script>