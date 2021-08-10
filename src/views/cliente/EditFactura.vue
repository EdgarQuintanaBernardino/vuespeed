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
          Editar registro:
          <CLink
            :to="{ name: 'Detalles Cliente', params: { id: $route.params.id_factura }}"
            class="text-white"
            v-if="permisos(['factura.show', 'factura.edit'])"
            v-text="$route.params.id_factura"
          />
          <span v-else v-text="$route.params.id_factura" />
        </h4>
      </CCardHeader>
      <CForm @submit.prevent="update()" method="POST">
        <CCardBody>
          <CRow v-if="errors != null" class="alert alert-danger p-0 m-0">
            <CCol sm="12"
              ><ul>
                <li class=" text-danger" v-for="error in errors">
                  {{error[0]}}
                </li>
              </ul></CCol
            >
          </CRow>
          <CRow>
            <CCol sm="9">
              <CRow>
                <CCol sm="12">
                  <CInput
                    label="Tipo de persona "
                    type="text"
                    placeholder="Tipo de persona"
                    maxlength="50"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.tip"
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
                    label="RFC "
                    type="text"
                    placeholder="RFC"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.rfc"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
                  </CInput>
                </CCol>
                <CCol sm="12">
                  <CInput
                    label="Razón social"
                    type="text"
                    placeholder="Razón social"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.r_social"
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
                    label="Calle "
                    type="text"
                    placeholder="Calle "
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.calle"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
                  </CInput>
                </CCol>
                <CCol sm="12">
                  <CInput
                    label="Número Ext. "
                    type="text"
                    placeholder="Número Ext."
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.n_ext"
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
                    label="Código postal "
                    type="text"
                    placeholder="Código postal "
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.cp"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
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
                    :value.sync="form.col"
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
                    label="Localidad"
                    type="text"
                    placeholder="Localidad"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.loc"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
                  </CInput>
                </CCol>

                <CCol sm="12">
                  <CInput
                    label="Estado"
                    type="text"
                    placeholder="Estado"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.est"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
                  </CInput>
                </CCol>

                <CCol sm="12">
                  <CInput
                    label="Ciudad"
                    type="text"
                    placeholder="Ciudad"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.cd"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
                  </CInput>
                </CCol>

                <CCol sm="12">
                  <CInput
                    label="Teléfono 1"
                    type="text"
                    placeholder="Teléfono 1"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.tel1"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
                  </CInput>
                </CCol>

                <CCol sm="12">
                  <CInput
                    label="Teléfono 2"
                    type="text"
                    placeholder="Teléfono 2"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.tel2"
                  >
                    <template #prepend-content
                      ><CIcon name="cilText"
                    /></template>
                  </CInput>
                </CCol>

                <CCol sm="12">
                  <CInput
                    label="Notas"
                    type="text"
                    placeholder="Notas"
                    maxlength="200"
                    class="mb-0"
                    :lazy="false"
                    :value.sync="form.notas"
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
              <CButton type="submit" color="info" class="w-75"
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
import RepositoriesF from "./RepositoriesF";
import alert from "@/repositories/global/alert";
import check from "@/repositories/global/check";
import Swal from "sweetalert2";

export default {
  name: "EditFactura",
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

  methods: {
    permisos(permisos) {
      return check.permiso(permisos);
    },
    getEmptyForm() {
      return {
        tip: "",
        rfc: "",
        r_social: "",
        calle: "",
        n_ext: "",
        cp: "",
        col: "",
        loc: "",
        est: "",
        cd: "",
        tel1: "",
        tel2: "",
        notas: ""
      };
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
        let data = await RepositoriesF.updateRegFactura(self);
        if (data != undefined) {
          self.submitted = false;
          self.spinner = false;
          await alert.response200(3, "¡Actualizado exitosamente!", "");
          console.log(data.updateRegFactura)
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
