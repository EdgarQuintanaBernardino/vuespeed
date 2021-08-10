<template>
  <div id="formulario-refaccion">
    <form @submit.prevent="enviarFormulario">
      <CRow>
        <CCol sm="" class="ml-3">
          <label>Refacción</label>
          <input v-model="refaccion.nom" type="text" class="form-control  " />
        </CCol>
        <CCol sm="">
          <label>Costo Unitario</label>
          <input
            v-model="refaccion.cost_unit"
            type="text"
            class="form-control w-75"
          />
        </CCol>
        <CCol sm="">
          <label>Precio Venta</label>
          <input
            class="form-control w-75"
            v-model="refaccion.pre_unit"
            v-on:keyup="operacion()"
            type="float"
            value="value0"
            @input="numberone = $event.target.value"
          />
        </CCol>
        <CCol sm="">
          <label>Cantidad</label>
          <input
            class="form-control w-75"
            v-model="refaccion.cant"
            v-on:keyup="operacion()"
            type="float"
            value="value1"
            @input="numbertwo = $event.target.value"
          />
        </CCol>

        <CCol sm="">
          <label class="text-danger"> <h5>Subtotal</h5></label>
          <input
            type="text"
            class="form-control "
            v-model="refaccion.subtotal"
            disabled
          />

          <!-- <h3 class="text-danger" :value=refaccion.subtotal >{{subtotal}}</h3> -->
        </CCol>

        <CCol sm="">
          <div>
            <br />
            <button for="inline-form-input-name" class="btn btn-info ">
              Agregar
            </button>
          </div>
        </CCol>
      </CRow>
    </form>
  </div>
</template>

<script>
export default {
  name: "formulario-refaccion",
  data() {
    return {
      props: ["value0", "value1"],
      refaccion: {
        nom: "",
        pre_unit: "",
        cost_unit: "",
        cant: "",
        subtotal: "",
        grantotal: ""
      }
    };
  },

  methods: {
    operacion() {
      this.totalIva = parseFloat(this.numberone) * parseFloat(this.numbertwo);

      this.precio = parseFloat(this.totalIva) * 0.25;

      this.refaccion.subtotal =
        parseFloat(this.totalIva) + parseFloat(this.precio);
    },

    enviarFormulario() {
      this.$emit("add-refaccion", this.refaccion);

      this.refaccion = {
        nom: "",
        pre_unit: "",
        cost_unit: "",
        cant: "",
        subtotal: "",
        grantotal: ""
      };
    },
    clearform() {
      let self = this;
      self.refaccion.nom;
      self.refaccion.pre_unit;
      self.refaccion.cost_unit;
      self.refaccion.cant;
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
