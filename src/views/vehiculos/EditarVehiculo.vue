<template>
  <b-overlay
    :show="showForm"
    spinner-variant="primary"
    spinner-type="grow"
    spinner-small
    rounded="sm"
    opacity="0.27"
  >
    <CCard class="shadow">
      <CCardHeader color="dark p-1">
        <h4 class="text-white">
          Editar vehículo:
          <CLink
            :to="{
              name: 'Detalles Vehículos',
              params: { id: $route.params.id }
            }"
            class="text-white"
            v-if="permisos(['vehiculo.show', 'vehiculo.edit'])"
            v-text="$route.params.id"
          />
          <span v-else v-text="$route.params.id" />
        </h4>
      </CCardHeader>
      <CForm @submit.prevent="update()" method="POST">
        <CCardBody>
          <CRow v-if="errors != null" class="alert alert-danger p-0 m-0">
            <CCol sm="12"
              ><ul>
                <li class=" text-danger" v-for="error in errors">
                  {{ error[0] }}
                </li>
              </ul></CCol
            >
          </CRow>
          <CRow>
            <CCol sm="9">
              <CRow>
                <CCol sm="12">
                  <CInput
                    label="Placas *"
                    type="text"
                    placeholder="Placas"
                    maxlength="50"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.plac"
                  >
                    <template #prepend-content
                      ><CIcon name="cilItalic"
                    /></template>
                  </CInput>
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="12">
                  <CInput
                    label="VIN *"
                    type="text"
                    placeholder="VIN"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.vin"
                  >
                    <template #prepend-content
                      ><CIcon name="cilListNumbered"
                    /></template>
                  </CInput>
                </CCol>
                <CCol sm="12">
                  <CInput
                    label="Marca *"
                    type="text"
                    placeholder="Marca"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.marc"
                  >
                    <template #prepend-content
                      ><CIcon name="cilItalic"
                    /></template>
                  </CInput>
                </CCol>
              </CRow>

              <CRow>
                <CCol sm="12">
                  <CInput
                    label="Modelo *"
                    type="text"
                    placeholder="Modelo"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.mod"
                  >
                    <template #prepend-content
                      ><CIcon name="cilItalic"
                    /></template>
                  </CInput>
                </CCol>
                <CCol sm="12">
                  <CInput
                    label="Categoria *"
                    type="text"
                    placeholder="Categoria"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.cat"
                  >
                    <template #prepend-content
                      ><CIcon name="cilList"
                    /></template>
                  </CInput>
                </CCol>
              </CRow>

              <CRow>
                <CCol sm="12">
                  <CInput
                    label="Año *"
                    type="text"
                    placeholder="Año"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.año"
                  >
                    <template #prepend-content
                      ><CIcon name="cilCalendar"
                    /></template>
                  </CInput>
                </CCol>
                <CCol sm="12">
                  <CInput
                    label="No. Motor *"
                    type="text"
                    placeholder="No. Motor"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.n_motor"
                  >
                    <template #prepend-content
                      ><CIcon name="cilListNumbered"
                    /></template>
                  </CInput>
                </CCol>
              </CRow>

              <CRow>
                <CCol sm="12">
                  <CInput
                    label="Color Principal *"
                    type="text"
                    placeholder="Color Principal"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.c_principal"
                  >
                    <template #prepend-content
                      ><CIcon name="cilColorFill"
                    /></template>
                  </CInput>
                </CCol>
                <CCol sm="12">
                  <CInput
                    label="Engomado *"
                    type="text"
                    placeholder="Engomado"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.engomado"
                  >
                    <template #prepend-content
                      ><CIcon name="cilLibraryAdd"
                    /></template>
                  </CInput>
                </CCol>
                <CCol sm="12">
                  <CInput
                    label="Marca de motor *"
                    type="text"
                    placeholder="Marca de motor"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.m_motor"
                  >
                    <template #prepend-content
                      ><CIcon name="cilBookmark"
                    /></template>
                  </CInput>
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="12">
                  <CInput
                    label="Transmisión *"
                    type="text"
                    placeholder="Transmisión"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.trans"
                  >
                    <template #prepend-content
                      ><CIcon name="cilSpeedometer"
                    /></template>
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
              <b-spinner
                label="Loading..."
                variant="primary"
                v-if="spinner"
              ></b-spinner>
              <CButton
                type="submit"
                color="info"
                class="w-75"
                
                v-if="!submitted"
                ><CIcon name="cilSave" /> Actualizar</CButton
              >
            </CCol>
          </CRow>
        </CCardFooter>
      </CForm>
    </CCard>
  </b-overlay>
</template>

<script>
import Repositories from "./Repositories";
import alert from "@/repositories/global/alert";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import check from "@/repositories/global/check";
import Swal from "sweetalert2";

export default {
  name: "EditCliente",

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
      plac: { required, maxLength: maxLength(10) },
      marc: { required, maxLength: maxLength(80) },
      mod: { required, maxLength: maxLength(80) },
      engomado: { required }
    }
  },
  methods: {
    permisos(permisos) {
      return check.permiso(permisos);
    },
    getEmptyForm() {
      return {
        plac: "",
        vin: "",
        marc: "",
        mod: "",
        cat: "",
        año: "",
        n_motor: "",
        c_principal: "",
        engomado: "",
        m_motor: "",
        trans: ""
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
        let data = await Repositories.updateRegistro(self);
        if (data != undefined) {
          self.submitted = false;
          self.spinner = false;
          await alert.response200(3, "¡Actualizado exitosamente!", "");
        }
      }
    },
    async getRegistro() {
      let self = this;
      self.form = await Repositories.getRegistro(self);
      self.showForm = false;
    }
  }
};
</script>
