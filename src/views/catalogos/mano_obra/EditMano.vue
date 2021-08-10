<template>
<div class="content-center"> 
  <CCol sm="8" md="10" >
 <CCard class="shadow" style="max-width: 100rem;"  >
        <CForm @submit.prevent="update()" method="POST">
           <CCardHeader color="dark p-1">
        <h4 class="text-white">
          Editar vehículo:
          <CLink
            :to="{
              name: 'Detalles ManoObra',
              params: { id: $route.params.id }
            }"
            class="text-white"
            v-if="permisos(['m_obra.show', 'm_obra.edit'])"
            v-text="$route.params.id"
          />
          <span v-else v-text="$route.params.id" />
        </h4>
      </CCardHeader>
        <CCardBody>
          <CRow v-if="errors != null" class="alert alert-danger p-0 m-0">
            <CCol sm="12"
              ><ul>
                <li class=" text-danger" v-for="error in errors">
                  {{ error[0] }}
                </li>
              </ul></CCol>
          </CRow>
          <CRow>

                <CCol >
                  <CInput
                    label="Nombre *"
                    type="text"
                    placeholder="Nombre"
                    maxlength="50"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.nom"
                  >
                    <template #prepend-content
                      ><CIcon name="cilItalic"
                    /></template>
                  </CInput>
                </CCol>
            
              
                <CCol >
                  <CInput
                    label="Precio *"
                    type="text"
                    placeholder="precio"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.subtotal"
                  >
                    <template #prepend-content>
                      <CIcon name="cilListNumbered"
                    /></template>
                  </CInput>
                </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow class="content-center">
            <CCol>
              <CButton
               
                color="outline-danger"
              @click="goBack()"
                
               
                ><CIcon name="cil-x-circle" /> Cancelar</CButton
              >
            </CCol>
            <CCol>
              <b-spinner
                label="Loading..."
                variant="primary"
                v-if="spinner"
              ></b-spinner>
              <CButton
                type="submit"
                color="outline-dark"
                
                v-if="!submitted"
                ><CIcon name="cilSave" /> Actualizar</CButton
              >
            </CCol>
            
          </CRow>
        </CCardFooter>
      </CForm>
 </CCard>
  </CCol>
</div>
</template>

<script>
import alert from "@/repositories/global/alert";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import check from "@/repositories/global/check";
import Swal from "sweetalert2";
import RepositoriesMO from "../RepositoriesMO";

export default {
     name: "EditMano",

  data() {
    return {
      submitted: false,
      spinner: false,
      showForm: true,
      form: this.getEmptyForm(),
      errors: null
    };
  },
  mounted: function() {
    this.getRegistro();
  },
  computed: {
    //formString() { return JSON.stringify(this.form, null, 4) },
    isValid() {
      return !this.$v.form.$invalid;
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      nom: { required, maxLength: maxLength(80) },
      subtotal: { required, maxLength: maxLength(10) },
     
    }
  },
  methods: {
            goBack() {
      this.$router.go(-1);
    },
    permisos(permisos) {
      return check.permiso(permisos);
    },
    getEmptyForm() {
      return {
        nom: "",
        subtotal: "",
        
      };
    },
    checkIfValid(fieldName) {
      const field = this.$v.form[fieldName];
      if (!field.$dirty) {
        return null;
      }
      return !(field.$invalid || field.$model === "");
    },
    async update() {
      let result = await Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres actualizar este registro?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Actualizar",
        cancelButtonText: `Cancelar`
      });

      if (result.value) {
        let self = this;
        let data = await RepositoriesMO.updateRegistro(self);
        if (data != undefined) {
          self.submitted = false;
          self.spinner = false;
          await alert.response200(3, "¡Actualizado exitosamente!", "");
        }
      }
    },
    async getRegistro() {
      let self = this;
      self.form = await RepositoriesMO.getRegistro(self);
      self.showForm = false;
    } 
  }

}
</script>