<template>
<b-overlay :show="showForm" spinner-variant="primary" spinner-type="grow" spinner-small rounded="sm" opacity="0.27">
  <CCard class="shadow">
    <CCardHeader color="dark p-1">
      <h4 class="text-white">
        Editar Crédito:
        <CLink :to="{ name: 'Detalles Cliente', params: { id: $route.params.id }}" class="text-white" v-if="permisos(['global'])" v-text="$route.params.id" />
        <span v-else v-text="$route.params.id" />
      </h4>
    </CCardHeader>
    <CForm @submit.prevent="update()" method="POST">
      <CCardBody>
        <CRow v-if="errors != null" class="alert alert-danger p-0 m-0">
          <CCol sm="12"><ul><li class=" text-danger" v-for="error in errors">{{ error[0] }}</li></ul></CCol>
        </CRow>
        <CRow>
          <CCol sm="9">
            <CRow>
              <CCol sm="12">
                <CInput label="Días de crédito " type="text" placeholder="Días de crédito" maxlength="50" class="mb-0" :lazy="false" :value.sync="form.dias">
                  <template #prepend-content><CIcon name="cilText"/></template>
                </CInput>
              
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInput label="Límite de Crédito " type="text" placeholder="Límite de Crédito" maxlength="200" class="mb-0" :lazy="false" :value.sync="form.l_credito" >
                  <template #prepend-content><CIcon name="cilText"/></template>
                </CInput>
              </CCol>
              
            </CRow>
          </CCol>
        </CRow>
        <!--
        <CCol lg="6">
          <CCard :class="`bg-${submitted ? 'info' : 'secondary' }`">
            <pre>{{formString}}</pre>
          </CCard>
        </CCol>
        -->
      </CCardBody>
      <CCardFooter>
        <CRow class="content-center">
          <CCol>
            <b-spinner label="Loading..." variant="primary" v-if="spinner"></b-spinner>
            <CButton type="submit" color="info" class="w-75" :disabled="!isValid || submitted" v-if="!submitted"><CIcon name="cilSave"/> Actualizar</CButton>
          </CCol>
        </CRow>
      </CCardFooter>
    </CForm>
  </CCard>
</b-overlay>
</template>

<script>
import Repositories from './Repositories'
import RepositoriesC from './RepositoriesC'
import alert from '@/repositories/global/alert'
import { validationMixin } from "vuelidate"
import { required, maxLength } from "vuelidate/lib/validators"
import check from '@/repositories/global/check'
import Swal from 'sweetalert2'

export default {
  name: 'EditarCredito',
  data() {
    return {
      submitted: false,
      spinner: false,
      showForm: true,
      form: this.getEmptyForm(),
      errors: null,
    }
  },
  mounted: function() {
    this.getRegistro()
  },
  computed: {
    //formString() { return JSON.stringify(this.form, null, 4) },
    isValid() { return !this.form.$invalid },
  },
 
  
  methods: {
    permisos(permisos) {
      return check.permiso(permisos)
    },
    getEmptyForm() {
      return {
      dias:'',
      l_credito:''
      }
    },
    checkIfValid(fieldName) {
      const field = this.$v.form[fieldName]
      if(!field.$dirty) {
        return null
      } 
      return !(field.$invalid || field.$model === '')
    },

    async update() {
      let result = await Swal.fire({
        icon: 'info',
        title: '¿Estás seguro que quieres actualizar este registro?',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: 'Actualizar',
        cancelButtonText: `Cancelar`,
      })

      if(result.value) {
        let self  = this;
        let data  = await RepositoriesC.updateRegCredito(self)
        if(data != undefined) {
          self.submitted  = false
          self.spinner    = false
          await alert.response200(3, '¡Actualizado exitosamente!', '')
        }
      }
    },
    async getRegistro() {
      let self          = this;
      self.form         = await Repositories.getRegistro(self);
      self.showForm     = false
    },
  }
}
</script>