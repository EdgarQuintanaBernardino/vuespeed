<template>
  <div>
    <CRow sm="">
      <CCol sm="">
        <CForm  @submit.prevent="store()" method="POST" novalidate class="text-info">
        
<CCol sm="" >
         <CInput
            label="Descripción *"
            :value.sync="$v.form.nombre.$model"
            :isValid="checkIfValid('nombre')"
            :lazy="false"
              >
                <template #prepend-content>
                      <CIcon name="cil-User"
                    /></template>
         </CInput>
</CCol>
<CCol sm="">
         <CInput
            label="Costo *"
            type="number"
            min=0
            :value.sync="$v.form.subtotal.$model"
            :isValid="checkIfValid('subtotal')"
            :lazy="false"
              >
                <template #prepend-content>
                      <CIcon name="cil-Dollar"
                    /></template>
         </CInput>
</CCol>

</CForm>
      </CCol>

        </CRow>
        <CButton type="submit" @click="store()" class="btn btn-dark float-right"  :disabled="!isValid || submitted" :hidden="submitted" ><CIcon name="cilSave"/> Guardar</CButton> 
  </div>
 
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'
import alert from '@/repositories/global/alert'
import { validationMixin } from "vuelidate"
import { required  } from "vuelidate/lib/validators"
export default {

    data(){
        return{
           submitted: false,
             form: this.getEmptyForm(),
        }
    },
  mixins: [validationMixin],
  validations: {
    form: {   
      nombre: {required},
      subtotal: {required},
      
    }
    },
    computed:{
    formString () { return JSON.stringify(this.form, null, 4) },
    isValid() { return !this.$v.form.$invalid },
    isDirty() { return this.$v.form.$anyDirty },
    },
    methods:{
      getEmptyForm() {
      return {
        nombre: '',
        subtotal:'',
       
      }
   },
     
    clearForm() {
      let self = this;
      self.form.nombre = ''
      self.form.subtotal = ''
    },
    checkIfValid(fieldName) {
      const field = this.$v.form[fieldName];
      if (!field.$dirty) {
        return null;
      }
      return !(field.$invalid || field.$model === "");
    },
    //Registrar nueva cita
  store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
        "Enviaras toda la información relacionada a este registro a la base de datos."+"\n"+"<br/> Nombre:"+ this.form.nombre +"\n"+"<br/> Precio:"+ this.form.subtotal,
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
          axios.post(this.$apiAdress+'/api/mano_obra/almacenar?token='+localStorage.getItem("api_token"), self.form
      )
            .then(function (response) {
            alert.response200("¡Registro guardado exitosamente!", "");
            self.clearForm()
            self.submitted = false;
      }) 
            .catch(function(error) {
                self.submitted = false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                self.errors = alert.responseCatch(error, 'Code #1009');
            });
        }
      });
    },

    }
    
    
}
</script>