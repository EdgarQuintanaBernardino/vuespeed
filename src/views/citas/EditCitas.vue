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
          Editar Cita:
          <CLink
            :to="{
              name: 'Detalles Cita',
              params: { id: $route.params.id }
            }"
            class="text-white"
            v-if="permisos(['cita.show', 'cita.edit', 'confirmada.edit'])"
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
            <CCol sm="">
              <CCol sm="">
                <CInput
                  label="Fecha *"
                  type="text"
                  placeholder="Fecha"
                  maxlength="50"
                  class="mb-0"
                  :lazy="false"
                  :value.sync="$v.form.fecha.$model"
                >
                  <template #prepend-content
                    ><CIcon name="cilItalic"
                  /></template>
                </CInput>
              </CCol>

              <CCol sm="">
                <CInput
                  label="Nombre Cita *"
                  type="text"
                  placeholder="Nombre Cita"
                  maxlength="200"
                  class="mb-0"
                  :lazy="false"
                  :value.sync="form.nom_cita"
                >
                  <template #prepend-content
                    ><CIcon name="cilListNumbered"
                  /></template>
                </CInput>
              </CCol>
              <CCol sm="">
                <CInput
                  label="Hora*"
                  type="text"
                  placeholder="Hora"
                  maxlength="200"
                  class="mb-0"
                  :lazy="false"
                  :value.sync="$v.form.hora.$model"
                >
                  <template #prepend-content
                    ><CIcon name="cilItalic"
                  /></template>
                </CInput>
              </CCol>

              <CCol sm="">
                <CInput
                  label="Nota *"
                  type="text"
                  placeholder="Nota"
                  maxlength="200"
                  class="mb-0"
                  :lazy="false"
                  :value.sync="form.nota"
                >
                  <template #prepend-content
                    ><CIcon name="cilItalic"
                  /></template>
                </CInput>
              </CCol>
              <CCol sm="">
                <CInput
                  label="Placa Vehículo*"
                  type="text"
                  placeholder="Placa Vehículo"
                  maxlength="200"
                  class="mb-0"
                  :lazy="false"
                  :value.sync="form.plac_vehiculo"
                >
                  <template #prepend-content><CIcon name="cilList"/></template>
                </CInput>
              </CCol>
              <br>
              <CCol sm="">
                <CButton color="success">
                  Convertir a Servicio
                </CButton>
              </CCol>
            </CCol>
            <CCol>
              <transition name="fade">
                <CCard v-if="show" color="gradient-secondary">
                  <CCardHeader>
                    <a class=" text-dark">
                      Recepción de Vehículo a Domicilio:</a
                    >

                    <div class="card-header-actions">
                      <CRow>
                        <CCol>
                          <b-form-radio 
                          v-model="form.opc_domi"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="si"
                          >Si</b-form-radio
                        >
                        </CCol>
                        <CCol>
                        <b-form-radio
                          v-model="form.opc_domi"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="no"
                          >No</b-form-radio
                        >
                        </CCol>
                              <CLink
                                class="card-header-action btn-minimize"
                                @click="isCollapsed = !isCollapsed"
                              >
                                <CIcon
                                  :name="
                                    `cil-chevron-${isCollapsed ? 'bottom' : 'top'}`
                                  "
                                />
                              </CLink>
                      </CRow>
                    
                      
                     
                     
                    </div>
                  </CCardHeader>
                  <CCollapse :show="isCollapsed" :duration="400">
                    <CCardBody>
                      <CCol sm="12">
                        <CInput
                          label="Nombre de chofer"
                          type="text"
                          placeholder="Nombre de chofer"
                          maxlength="200"
                          class="mb-0"
                          :lazy="false"
                          :value.sync="form.nom_chofer"
                        >
                        </CInput>
                      </CCol>

                      <CCol sm="12">
                        <CInput
                          label="Calle"
                          type="text"
                          placeholder="Calle"
                          maxlength="200"
                          class="mb-0"
                          :lazy="false"
                          :value.sync="form.calle"
                        >
                        </CInput>
                      </CCol>

                      <CCol sm="12">
                        <CInput
                          label="No."
                          type="text"
                          placeholder="No."
                          maxlength="200"
                          class="mb-0"
                          :lazy="false"
                          :value.sync="form.num"
                        >
                        </CInput>
                      </CCol>

                      <CCol sm="12">
                        <CInput
                          label="C.P."
                          type="text"
                          placeholder="C.P."
                          maxlength="200"
                          class="mb-0"
                          :lazy="false"
                          :value.sync="form.cp"
                        >
                        </CInput>
                      </CCol>

                      <CCol sm="12">
                        <CInput
                          label="Colonia"
                          type="text"
                          placeholder="Colonia"
                          maxlength="200"
                          class="mb-0"
                          :lazy="false"
                          :value.sync="form.colonia"
                        >
                        </CInput>
                      </CCol>
                    </CCardBody>
                  </CCollapse>
                </CCard>
              </transition>
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
              <CButton type="submit" color="info" class="w-75" v-if="!submitted"
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
  name: "EditCitas",

  data() {
    return {
      submitted: false,
      spinner: false,
      showForm: true,
      form: this.getEmptyForm(),
      errors: null,

      show: true,
      isCollapsed: false,

      modes: [{ shape: "pill" }],
      colors: ["dark"],

      opc_domi: ""
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
      fecha: { required, maxLength: maxLength(10) },
      hora: { required, maxLength: maxLength(80) }
    }
  },
  methods: {
    permisos(permisos) {
      return check.permiso(permisos);
    },
    getEmptyForm() {
      return {
        fecha: "",
        nom_cita: "",
        hora: "",
        nota: "",
        plac_vehiculo: "",
        opc_domi: "",
        calle: "",
        num: "",
        cp: "",
        colonia: "",
        nom_chofer: ""
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
      self.form = await Repositories.getRegistrolista(self);
      self.showForm = false;
    }
  }
};
</script>
