<template>
  <div id="tabla-refacciones">
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Costo Unitario</th>
          <th>Precio Venta</th>
          <th>Cantidad</th>
          <th>Subtotal</th>

          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="refaccion in refacciones" :key="refaccion.id">
          <td v-if="editando === refaccion.id">
            <input type="text" class="form-control" v-model="refaccion.nom" />
          </td>
          <td v-else>{{ refaccion.nom }}</td>

          <td v-if="editando === refaccion.id">
            <input
              type="text"
              class="form-control"
              v-model="refaccion.cost_unit"
            />
          </td>
          <td v-else>{{ refaccion.cost_unit }}</td>

          <td v-if="editando === refaccion.id">
            <input
              type="float"
              class="form-control"
              v-model="refaccion.pre_unit"
              v-on:keyup="operacion()"
              value="value0"
              @input="numberone = $event.target.value"
            />
          </td>
          <td v-else>{{ refaccion.pre_unit }}</td>

          <td v-if="editando === refaccion.id">
            <input
              type="float"
              class="form-control"
              v-model="refaccion.cant"
              v-on:keyup="operacion()"
              value="value1"
              @input="numbertwo = $event.target.value"
            />
          </td>
          <td v-else>{{ refaccion.cant }}</td>

          <td v-if="editando === refaccion.id">
            <input
              type="float"
              class="form-control"
              v-model="refaccion.subtotal"
            />
          </td>

          <td v-else>{{ refaccion.subtotal }}</td>

          <!-- <td v-if="editando === refaccion.id">
              <input type="text" class="form-control" v-model="refaccion.grantotal"  disabled/>
          </td>
          <td v-else id="grantotal">{{ refaccion.grantotal }}</td>-->

          <td v-if="editando === refaccion.id" class="inline w-25">
            <button class="btn btn-danger" @click="cancelarEdicion(refaccion)">
              <CIcon size="sm" name="cil-x-circle" />
            </button>
            <button
              class="btn btn-success ml-1"
              @click="guardarrefaccion(refaccion)"
            >
              <CIcon size="sm" name="cil-save" />
            </button>
          </td>
          <td v-else>
            <button
              class="btn btn-danger"
              @click="$emit('delete-refaccion', refaccion.id)"
            >
              <CIcon name="cilTrash" />
            </button>
            <button
              class="btn btn-secondary ml-1"
              @click="editarrefaccion(refaccion)"
            >
              <CIcon name="cilPencil" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "tabla-refacciones",

  props: {
    refacciones: Array
  },
  components: {},
  data() {
    return {
      editando: null,

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
      this.refaccion.subtotal =
        parseFloat(this.numberone) * parseFloat(this.numbertwo);
      console.log("se esta realizando la operacion" + this.refaccion.subtotal);
    },
    editarrefaccion(refaccion) {
      this.refaccionEditada = Object.assign({}, refaccion);
      this.editando = refaccion.id;
    },
    guardarrefaccion(refaccion) {
      if (
        !refaccion.nom.length ||
        !refaccion.cost_unit.length ||
        !refaccion.pre_unit.length
      ) {
        return;
      }
      this.$emit("actualizar-refaccion", refaccion.id, refaccion);
      this.editando = null;
    },
    cancelarEdicion(refaccion) {
      Object.assign(refaccion, this.refaccionEditada);
      this.editando = null;
    }
  }
};
</script>
