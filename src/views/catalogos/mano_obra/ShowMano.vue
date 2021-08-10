<template>
<div class="d-flex justify-content-center">
<CCol sm="8" md="10" >
<CCard  class="align-center"  style="max-width: 80rem;">
  <CCardHeader >
      <b-overlay 
              :show="showForm"
              spinner-variant="primary"
              spinner-type="grow"
              spinner-small
              rounded="sm"
              opacity="0.27"
            >
            
              <h4>
                DETALLE DE SERVICIO FRECUENTE:

                <CLink
                  :to="{
                    name: 'Editar Mano ',
                    params: { id: $route.params.id }
                  }"
                  v-if="permisos(['m_obra.edit'])"
                  v-text="$route.params.id"
                />
                <span v-else v-text="$route.params.id" />
              </h4>

                <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="goBack()"
              shape="pill"
              color="dark"
              v-c-tooltip.hover="{
                content: `Volver`
              }"
            >
              <CIcon name="cil-arrow-circle-left" />
            </CButton>
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              shape="pill"
              color="dark"
                :to="{
                              name: 'Editar Mano',
                              params: { id: $route.params.id }
                            }"
              v-c-tooltip.hover="{
                content: `Editar`
              }"
            >
              <CIcon name="cil-pencil" />
            </CButton>
            <br><br>
              <fieldset disabled>

                <CRow>

                    <CCol sm="">
          <CInput label="Nombre" type="text"  v-model="form.nom">
            <template #prepend-content
              ><CIcon size="lg" name="cil-User"
            /></template>
          </CInput>
        </CCol>
        <CCol sm="">
          <CInput label="Precio" type="text"  v-model="form.subtotal">
            <template #prepend-content><CIcon name="cil-Dollar"/></template>
          </CInput>
        </CCol>
                 
                
                  </CRow>
              
              </fieldset>
            </b-overlay>
  </CCardHeader>
</CCard>
</CCol>
</div>
</template>
<script>
import RepositoriesMO from "../RepositoriesMO";
import check from "@/repositories/global/check";
export default {
    name:"Detalle_ManoObra",
   data() {
    return {
      showForm: true,
      form: [],
    }},
    mounted: function() {
    this.getRegistro();
    //  this.getFactura()
  },
     methods:{
        goBack() {
      this.$router.go(-1);
    },
     permisos(permisos) {
      return !check.permiso(permisos);
    },
    async getRegistro() {
      let self = this;
      self.form = await RepositoriesMO.getRegistro(self);
      self.showForm = false;
    },
     }
}
</script>