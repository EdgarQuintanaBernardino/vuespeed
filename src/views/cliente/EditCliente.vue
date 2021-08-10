<template>

   <CTabs variant="pills">
      <CTab title="Generales"> 
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
              Editar registro:
              <CLink
                :to="{
                  name: 'Detalles Cliente',
                  params: { id: $route.params.id }
                }"
                class="text-white"
                v-if="permisos(['general.show', 'general.edit'])"
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
                        label="Nombre *"
                        type="text"
                        placeholder="Nombre"
                        maxlength="50"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.name"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="12">
                      <CInput
                        label="Apellidos *"
                        type="text"
                        placeholder="Apellidos"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.apell"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                    <CCol sm="12">
                      <CInput
                        label="Correo *"
                        type="text"
                        placeholder="Correo"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.email"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol sm="12">
                      <CInput
                        label="Correo Secundario *"
                        type="text"
                        placeholder="Correo secundario"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.email_secund"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                    <CCol sm="12">
                      <CInput
                        label="Telefono fijo *"
                        type="text"
                        placeholder="Telefono fijo"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.tel_fij"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol sm="12">
                      <CInput
                        label="Telefono movil *"
                        type="text"
                        placeholder="Telefono movil"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.tel_mov"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                    <CCol sm="12">
                      <CInput
                        label="Tipo de cliente *"
                        type="text"
                        placeholder="Tipo de cliente"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.tip_cliente"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol sm="12">
                      <CInput
                        label="Empresa *"
                        type="text"
                        placeholder="Empresa"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.emp"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                    <CCol sm="12">
                      <CInput
                        label="Sucursal *"
                        type="text"
                        placeholder="Sucursal"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.id_suc_act"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
                        /></template>
                      </CInput>
                    </CCol>
                    <CCol sm="12">
                      <CInput
                        label="Acceso *"
                        type="text"
                        placeholder="Acceso"
                        maxlength="200"
                        class="mb-0"
                        :lazy="false"
                        :value.sync="form.reg_tab_acces"
                      >
                        <template #prepend-content
                          ><CIcon name="cilText"
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
                    :disabled="!isValid || submitted"
                    v-if="!submitted"
                    ><CIcon name="cilSave" /> Actualizar</CButton
                  >
                </CCol>
              </CRow>
            </CCardFooter>
          </CForm>
        </CCard>
      </b-overlay>
    </CTab>
    <CTab title="Factura">
      <EditFactura />
    </CTab>
    <CTab title="Crédito">
      <EditCredito />
    </CTab>
  </CTabs>

</template>

<script>
import Repositories from "./Repositories";
import alert from "@/repositories/global/alert";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import check from "@/repositories/global/check";
import Swal from "sweetalert2";
import EditFactura from "../cliente/EditFactura";
import EditCredito from "../cliente/EditCredito";

export default {
  name: "EditCliente",
  components: {
    EditFactura,
    EditCredito
  },
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
      name: { required, maxLength: maxLength(50) },
      apell: { required },
      email: { required, maxLength: maxLength(200) },
      tel_mov: { required },
      tip_cliente: { required },
      emp: { required },
      id_suc_act: { required },
      reg_tab_acces: { required }
    }
  },
  methods: {
    permisos(permisos) {
      return check.permiso(permisos);
    },
    getEmptyForm() {
      return {
        name: "",
        apell: "",
        email: "",
        email_secund: "",
        tel_fij: "",
        tel_mov: "",
        tip_cliente: "",
        emp: "",
        id_suc_act: "",
        reg_tab_acces: ""
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
