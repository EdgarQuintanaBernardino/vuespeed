<template>
  <b-overlay
    :show="showForm"
    spinner-variant="primary"
    spinner-type="grow"
    spinner-small
    rounded="sm"
    opacity="0.27"
  >
    <h4>
      Detalles del registro:
      <CLink
        :to="{ name: 'Editar Cliente', params: { id: $route.params.id } }"
        v-if="permisos(['general.edit'])"
        v-text="$route.params.id"
      />
      <span v-else v-text="$route.params.id" />
    </h4>
    <fieldset disabled>
      <CRow>
        <CCol sm="">
          <CInput label="Vehículos" type="text" placeholder="5">
            <template #prepend-content
              ><CIcon size="lg" name="cilCarAlt"
            /></template>
          </CInput>
        </CCol>
        <CCol sm="">
          <CInput label="Servicios" type="text" placeholder="0">
            <template #prepend-content><CIcon name="cilUser"/></template>
          </CInput>
        </CCol>
        <CCol>
          <CInput label="Número de Cotizaciones" type="text" placeholder="Número de Cotizaciones">
            <template #prepend-content><CIcon name="cilDollar"/></template>
          </CInput>
        </CCol>
      </CRow>
       <CRow>
                    <CCol >
          <CInput label="Número de órdenes" type="text" placeholder="Número de órdenes">
            <template #prepend-content
              ><CIcon  name="cilListNumbered"
            /></template>
          </CInput>
        </CCol>

        <CCol>
          <CInput label="Monto total vendido" type="text" placeholder="Monto total vendido">
            <template #prepend-content><CIcon name="cilDollar"/></template>
          </CInput>
        </CCol>
               
                      <CCol >
                        <CInput
                          label="Valor promedio de visitas"
                          type="text"
                          placeholder="Valor promedio de visitas"
                          v-model="form.trans"
                        >
                          <template #prepend-content
                            ><img src="https://img.icons8.com/ios-glyphs/16/000000/visible--v1.png"/></template>
                        </CInput>
                      </CCol>
                    </CRow>
        
<CRow>
        <CCol sm="12"
          ><h4 class="text-info text-center">Generales</h4>
          <br />
          <CRow>
            <CCol sm="6">
              <CInput
                label="Creado"
                type="text"
                placeholder="Creado"
                v-model="form.created_at"
              >
                <template #prepend-content
                  ><CIcon name="cilCalendar"
                /></template>
              </CInput>
            </CCol>

            <CCol sm="6">
              <CInput
                label="Nombre"
                type="text"
                placeholder="Nombre"
                v-model="form.name"
              >
                <template #prepend-content><CIcon name="cilUser"/></template>
              </CInput>
            </CCol>
          </CRow>

          <CRow>
            <CCol sm="6">
              <CInput
                label="Apellidos"
                type="text"
                placeholder="Apellidos"
                v-model="form.apell"
              >
                <template #prepend-content><CIcon name="cilUser"/></template>
              </CInput>
            </CCol>
            <CCol sm="6">
              <CInput
                label="Correo Electrónico"
                type="text"
                placeholder="Correo Electrónico"
                v-model="form.email"
              >
                <template #prepend-content
                  ><CIcon name="cil-envelope-open"
                /></template>
              </CInput>
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="">
              <CInput
                label="Empresa"
                type="text"
                placeholder="Empresa"
                v-model="form.emp"
              >
                <template #prepend-content
                  ><CIcon name="cilInstitution"
                /></template>
              </CInput>
            </CCol>
            <CCol sm="">
              <CInput
                label="Celular "
                type="text"
                placeholder="Celular"
                v-model="form.tel_mov"
              >
                <template #prepend-content><CIcon name="cilPhone"/></template>
              </CInput>
            </CCol>
            <CCol sm="">
              <CInput
                label="Sucursal"
                type="text"
                placeholder="Sucursal"
                v-model="form.id_suc_act"
              >
                <template #prepend-content
                  ><CIcon name="cilInstitution"
                /></template>
               </CInput>
            </CCol>
         </CRow>
          <br />
        </CCol>
      </CRow>
    </fieldset>

    <fieldset disabled>
      <CRow> </CRow>
    </fieldset>

    <fieldset disabled>
      <h4>
        Detalles de Factura:
        <CLink
          :to="{ name: 'Editar Factura', params: { id: $route.params.id } }"
          v-if="permisos(['factura.edit'])"
          v-text="$route.params.id"
        />
        <span v-else v-text="$route.params.id" />
      </h4>
      <CRow>
        <CCol sm=""
          ><h4 class="text-info text-center">Facturación</h4>
          <CRow>
            <CCol sm="4">
              <CInput
                label="Persona"
                type="text"
                placeholder="Persona"
                v-model="form.tip"
              >
                <template #prepend-content><CIcon name="cilUser"/></template>
              </CInput>
            </CCol>
            <CCol sm="4">
              <CInput
                label="Razón Social"
                type="text"
                placeholder="Razón Social"
                v-model="form.r_social"
              >
                <template #prepend-content
                  ><CIcon name="cil-envelope-open"
                /></template>
              </CInput>
            </CCol>
      
               <CCol sm="4">
              <CInput
                label="RFC"
                type="text"
                placeholder="RFC"
                v-model="form.rfc"
              >
                <template #prepend-content
                  ><CIcon name="cil-envelope-open"
                /></template>
              </CInput>
            </CCol>

          </CRow>
          <CRow>
            <CCol sm="">
              <CInput
                label="Calle"
                type="text"
                placeholder="Calle"
                v-model="form.calle"
              >
                <template #prepend-content><CIcon name="cilText"/></template>
              </CInput>
            </CCol>
            <CCol sm="">
              <CInput
                label="No.Int."
                type="text"
                placeholder="No.Int."
                v-model="form.n_int"
              >
                <template #prepend-content><CIcon name="cilText"/></template>
              </CInput>
            </CCol>
            <CCol sm="">
              <CInput
                label="No.Ext."
                type="text"
                placeholder="No.Ext."
                v-model="form.n_ext"
              >
                <template #prepend-content><CIcon name="cilText"/></template>
              </CInput>
            </CCol>
           
          </CRow>

          <CRow>
             <CCol sm="4">
              <CInput
                label="C.P"
                type="text"
                placeholder="C.P"
                v-model="form.cp"
              >
                <template #prepend-content><CIcon name="cilText"/></template>
              </CInput>
            </CCol>
            
            <CCol sm="4">
              <CInput
                label="Colonia"
                type="text"
                placeholder="Colonia"
                v-model="form.col"
              >
                <template #prepend-content><CIcon name="cilText"/></template>
              </CInput>
            </CCol>
            <CCol sm="4">
              <CInput
                label="Estado "
                type="text"
                placeholder="Estado"
                v-model="form.est"
              >
                <template #prepend-content><CIcon name="cilText"/></template>
              </CInput>
            </CCol>
          </CRow>
          <br />
        </CCol>
      </CRow>
    </fieldset>
    <fieldset disabled>
      <CRow>
        <CCol sm=""
          ><h4 class="text-info text-center">Crédito</h4>
          <br />
          <CRow>
            <CCol sm="6">
              <CInput
                label="Días de crédito"
                type="text"
                placeholder="Días de crédito"
                v-model="form.dias"
              >
                <template #prepend-content><CIcon name="cil-dollar"/></template>
              </CInput>
            </CCol>
            <CCol sm="6">
              <CInput
                label="Límite de crédito"
                type="text"
                placeholder="Límite de crédito"
                v-model="form.l_credito"
              >
                <template #prepend-content><CIcon name="cil-dollar"/></template>
              </CInput>
            </CCol>
          </CRow>
            <CRow>
            <CCol sm="6">
              <CInput
                label="Crédito utilizado"
                type="text"
                placeholder="Crédito utilizado"
                v-model="form.dias"
              >
                <template #prepend-content><CIcon name="cil-dollar"/></template>
              </CInput>
            </CCol>
             <CCol sm="6">
              <CInput
                label="Crédito restante"
                type="text"
                placeholder="Crédito restante"
                v-model="form.dias"
              >
                <template #prepend-content><CIcon name="cil-dollar"/></template>
              </CInput>
            </CCol>
            </CRow>
        </CCol>
      </CRow>
    </fieldset>
  </b-overlay>
</template>

<script>

import Repositories from "../cliente/Repositories";
import check from "@/repositories/global/check";


export default {
  name: "Detalles",

  data: () => {
    return {
      showForm: true,
      form: []
      // formf:[]
    };
  },
  mounted: function() {
    this.getRegistro();
 
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    permisos(permisos) {
      return check.permiso(permisos);
    },
    async getRegistro() {
      let self = this;
      self.form = await Repositories.getRegistro(self);
      self.showForm = false;
    },
  }
};
</script>



