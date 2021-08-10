<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Crear nuevo rol
          </h3>
          <CRow>
      <CCol sm="12">
        <CInput
          label="Nuevo rol"
          placeholder="Nuevo rol"
           :value.sync="$v.form.nombre.$model"
        />
      </CCol>
    </CRow>
    <CRow>
    <CCol sm="">
          <CTextarea
                label="Descripción"
                placeholder="Descripción del nuevo rol"
                rows="2"
                 :value.sync="form.descripcion"
              />
    </CCol>
    </CRow>

        <CButton color="primary" @click="goBack">Regresar</CButton>
        <CButton color="primary" @click="store()">Crear</CButton>
       
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import alert from "@/repositories/global/alert";
import { validationMixin } from "vuelidate";
import {required} from "vuelidate/lib/validators";

export default {
    name: 'NvoRol',
    components:{

    },
    data(){
        return{
            form: this.getEmptyForm(),
        }
    },
    computed: {
    formString () { return JSON.stringify(this.form, null, 4) },
    isValid() { return !this.$v.form.$invalid },
    isDirty() { return this.$v.form.$anyDirty },
  },
   mixins: [validationMixin],
  validations: {
    form: {
      nombre: { required },
        
      },
  },
    
methods:{
    goBack() {
      this.$router.go(-1);
    },
    permisos(permisos) {
      return !check.permiso(permisos)
    },
     getEmptyForm() {
      return {
        nombre: '',
        descripcion:'',
        
      }
   },
   clearForm() {
      let self = this;
      self.form.nombre = ''
      self.form.descripcion = ''
     
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    //Registrar nueva cita
  store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
        "Enviaras toda la información relacionada a este registro a la base de datos."
        +"\n"+"<br/> Nombre:"+this.form.nombre+"\n"+"<br/> Placas:"+this.form.descripcion,
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

          axios.post(this.$apiAdress+'/api/rol/almacenar?token='+localStorage.getItem("api_token"), self.form
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