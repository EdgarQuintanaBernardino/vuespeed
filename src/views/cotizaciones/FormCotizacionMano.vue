<template>
  <div id="formulario-mano-obra">
    <CForm inline @submit.prevent="enviarFormulario">
      <CRow inline>
        <CCol sm="">
          <CInput
            label="Mano de obra"
            v-model="refaccion.nom"
            type="text"
            class="ml-2"
          />
        </CCol>
        <CCol sm="">
          <CInput
            label="Precio Por Hora"
            v-model="refaccion.pre_unit"
            class="ml-3"
            v-on:keyup="operacion()"
          />
        </CCol>
        <CCol sm="">
          <CInput
            label="Hora(s)"
            v-model="refaccion.horas"
            class="ml-3"
            min="0"
            v-on:keyup="operacion()"
          />
        </CCol>

        <CCol sm="">
          <label class="text-danger"> <h5>Subtotal</h5></label>
          <input
            type="text"
            v-model="refaccion.subtotal"
            class="form-control m-1"
            disabled
          />

          <!-- <input v-model="refaccion.total" type="number" value="0"  id="total" class="form-control" disabled/> -->
        </CCol>
        <CCol sm="">
          <div>
            <br />
            <button for="inline-form-input-name" class="btn btn-info ml-4">
              Agregar
            </button>
          </div>
        </CCol>
      </CRow>
    </CForm>
  </div>
</template>

<script>
export default {
  name: "formulario-mano-obra",
  data() {
    return {
      props: ["value0", "value1"],

      subtotal: null,
      refaccion: {
        nom: "",
        pre_unit: "",
        horas: "",
        subtotal: ""
      }
    };
  },
  methods: {
    operacion() {
      this.refaccion.subtotal =
        parseFloat(this.refaccion.pre_unit) * parseFloat(this.refaccion.horas);
    },
    enviarFormulario() {
      this.$emit("add-refaccion", this.refaccion);

      this.refaccion = {
        nom: "",
        pre_unit: "",
        horas: "",
        subtotal: ""
      };
    },
    clearform() {
      let self = this;
      self.refaccion.nom;
      self.refaccion.pre_unit;
      self.refaccion.horas;
      self.refaccion.subtotal;
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
