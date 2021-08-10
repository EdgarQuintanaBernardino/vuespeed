<template>
  <div>
    <CCard>
      <CCardHeader>
        <CRow>
          <CCol class="float-right">
            <h4>Vehículo:</h4>

            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="goBack()"
              shape="pill"
              color="secondary"
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
              @click="vehiculos()"
              shape="square"
              color="secondary"
              v-c-tooltip.hover="{
                content: `Editar`
              }"
            >
              <CIcon name="cil-pencil" />
            </CButton>
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="vehiculos()"
              shape="pill"
              color="info"
              ><CIcon name="cil-plus" /> Nuevo servicio
            </CButton>
            <CButton
              style="float: right;"
              class="ml-2"
              size="sm"
              @click="nvocita = true"
              shape="pill"
              color="info"
              ><CIcon name="cil-Calendar" /> Agendar cita
            </CButton>
            <CModal
              size="lg"
              title="Nueva Citas y Recordatorios"
              color="dark"
              :show.sync="nvocita"
            >
              <NvoCita />
              <template #footer>
                <CButton @click="nvocita = false"
                  ><CIcon name="cilArrowThickToLeft" /> Cancelar</CButton
                >
                <CButton color="success"> Guardar</CButton>
              </template>
            </CModal>
          </CCol>
        </CRow>
      </CCardHeader>
    </CCard>

    <CCard>
      <CCardHeader>
        <CTabs>
          <CTab title="Detalles" active>
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
                  :to="{
                    name: 'Editar Vehículo',
                    params: { id: $route.params.id }
                  }"
                  v-if="permisos(['vehiculo.edit'])"
                  v-text="$route.params.id"
                />
                <span v-else v-text="$route.params.id" />
              </h4>
              <fieldset disabled>

                <CRow>

                    <CCol sm="">
          <CInput label="Kilometraje" type="text" placeholder="500">
            <template #prepend-content
              ><CIcon size="lg" name="cilSpeedometer"
            /></template>
          </CInput>
        </CCol>
        <CCol sm="">
          <CInput label="Servicios" type="text" placeholder="0">
            <template #prepend-content><CIcon name="cilSettings"/></template>
          </CInput>
        </CCol>
                  <CCol sm="12"
                    ><h4 class="text-info text-center">
                      Detalles del vehículo
                    </h4>
                    <br />
                    <CRow>
                      <CCol sm="6">
                        <CInput
                          label="Placas"
                          type="text"
                          placeholder="Placas"
                          v-model="form.plac"
                        >
                          <template #prepend-content
                            ><CIcon name="cilItalic"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="6">
                        <CInput
                          label="Marca"
                          type="text"
                          placeholder="Marca"
                          v-model="form.marc"
                        >
                          <template #prepend-content
                            ><CIcon name="cilItalic"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol sm="6">
                        <CInput
                          label="VIN"
                          type="text"
                          placeholder="VIN"
                          v-model="form.vin"
                        >
                          <template #prepend-content
                            ><CIcon name="cilListNumbered"
                          /></template>
                        </CInput>
                      </CCol>
                      <CCol sm="6">
                        <CInput
                          label="Modelo"
                          type="text"
                          placeholder="Modelo"
                          v-model="form.mod"
                        >
                          <template #prepend-content
                            ><CIcon name="cilItalic"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol sm="">
                        <CInput
                          label="Categoria"
                          type="text"
                          placeholder="Categoria"
                          v-model="form.cat"
                        >
                          <template #prepend-content
                            ><CIcon name="cilList"
                          /></template>
                        </CInput>
                      </CCol>
                      <CCol sm="">
                        <CInput
                          label="Año"
                          type="text"
                          placeholder="Año"
                          v-model="form.año"
                        >
                          <template #prepend-content
                            ><CIcon name="cilCalendar"
                          /></template>
                        </CInput>
                      </CCol>
                      <CCol sm="">
                        <CInput
                          label="No.Motor"
                          type="text"
                          placeholder="No.Motor"
                          v-model="form.n_motor"
                        >
                          <template #prepend-content
                            ><CIcon name="cilListNumbered"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Color Principal"
                          type="text"
                          placeholder="Color Principal"
                          v-model="form.c_principal"
                        >
                          <template #prepend-content
                            ><CIcon name="cilColorFill"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol sm="">
                        <CInput
                          label="Engomado"
                          type="text"
                          placeholder="Engomado"
                          v-model="form.engomado"
                        >
                          <template #prepend-content
                            ><CIcon name="cilLibraryAdd"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Marca de motor"
                          type="text"
                          placeholder="Marca de Motor"
                          v-model="form.m_motor"
                        >
                          <template #prepend-content
                            ><CIcon name="cilBookmark"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Transmisión"
                          type="text"
                          placeholder="Transmisión"
                          v-model="form.trans"
                        >
                          <template #prepend-content
                            ><CIcon name="cilSpeedometer"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>
                    <br />
                  </CCol>
                </CRow>

                <br />

                <CCol sm="12"
                  ><h4 class="text-info text-center">Detalles del dueño</h4>
                  <CButton
                    style="float: right;"
                    class="ml-2"
                    size="sm"
                    @click="showRegistro()"
                    shape="pill"
                    color="secondary"
                  >
                    <CIcon name="cil-Low-Vision" />
                  </CButton>
                  <br />
                  <CRow>
                    <CCol sm="">
                      <CInput
                        label="Nombre"
                        type="text"
                        placeholder="Nombre"
                        v-model="form.name"
                      >
                        <template #prepend-content
                          ><CIcon name="cilUser"
                        /></template>
                      </CInput>
                    </CCol>

                    <CCol sm="">
                      <CInput
                        label="Celular"
                        type="text"
                        placeholder="Celular"
                        v-model="form.tel_mov"
                      >
                        <template #prepend-content
                          ><CIcon name="cilPhone"
                        /></template>
                      </CInput>
                    </CCol>
                    <CCol sm="">
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
                </CCol>
              </fieldset>
            </b-overlay>
          </CTab>
          <CTab title="Servicios">
            <CButton
              style="float: right;"
              class="m-3 "
              size="sm"
              @click="vehiculos()"
              shape="square"
              color="success"
              ><CIcon name="cil-plus" /> Vehículo
            </CButton>

            <perfect-scrollbar
              style="height:40em;width:100%;margin:0px 0px 1% 0px"
            >
              <CDataTable
                :items="items"
                :column-filter-value.sync="columnFilter"
                :table-filter-value.sync="tableFilter"
                :loading="loading"
                :itemsPerPage="itemsLimit"
                index-column
                hover
                footer
                fixed
                striped
                responsive
                outlined
                table-column
                :fields="[
                  { key: 'id_cliente', label: 'Tipo' },
                  { key: 'usuario', label: 'Precio' },
                  { key: 'telefono', label: 'Status' },
                  { key: 'placas', label: 'Creado' },
                  { key: 'orden', label: 'Acciones' }
                ]"
                :noItemsView="{
                  noResults: 'No hay resultados de filtrado disponibles',
                  noItems: 'No hay registros disponibles'
                }"
                :items-per-page-select="{
                  label: 'Registros por pagina:',
                  values: ['15', '30', '50', '100']
                }"
                :table-filter="{
                  external: true,
                  lazy: true,
                  placeholder: 'Filtrar',
                  label: 'Filtrar:'
                }"
                :sorter="{ external: true, resetable: true }"
                :columnFilter="{ external: true, lazy: true }"
                @pagination-change="changeItemsLimit"
                :sorter-value.sync="sorter"
              >
                <template #usuario="{item}">
                  <td>
                    <CLink
                      class="text-info"
                      v-if="!permisos(['clientev.show'])"
                      :hidden="permisos(['clientev.show'])"
                      @click="showRegistro(item.id_cliente)"
                      v-text="item.usuario"
                    />
                    <span v-else v-text="item.usuario" />
                  </td>
                </template>
                <template #placas="{item}">
                  <td>
                    <CLink
                      class="text-info"
                      v-if="!permisos(['clientev.show'])"
                      :hidden="permisos(['clientev.show'])"
                      @click="showRegistro(item.id_cliente)"
                      v-text="item.placas"
                    />
                    <span v-else v-text="item.placas" />
                  </td>
                </template>
                <template #eliminar="{item}">
                  <td>
                    <CLink
                      :hidden="permisos(['users.destroy'])"
                      @click="deleteRegistro(item.id_cliente)"
                      class="btn-sm btn-danger"
                      ><CIcon
                        class="align-content-sm-center"
                        name="cil-user-unfollow"
                    /></CLink>
                  </td>
                </template>
              </CDataTable>
            </perfect-scrollbar>

            <CPagination
              :pages="maxPages"
              :active-page.sync="activePage"
              style="float:right;"
            />
          </CTab>
          <CTab title="Información General">
            <b-overlay
              :show="showForm"
              spinner-variant="primary"
              spinner-type="grow"
              spinner-small
              rounded="sm"
              opacity="0.27"
            >
              <fieldset disabled>

                <CRow>
                    <CCol >
          <CInput label="Número de órdenes" type="text" placeholder="Número de órdenes">
            <template #prepend-content
              ><CIcon size="" name="cilListNumbered"
            /></template>
          </CInput>
        </CCol>

        <CCol>
          <CInput label="Monto total vendido" type="text" placeholder="Monto total vendido">
            <template #prepend-content><CIcon name="cilDollar"/></template>
          </CInput>
        </CCol>
                </CRow>
                  
                    <CRow>
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
                      <CCol>
          <CInput label="Número de Cotizaciones" type="text" placeholder="Número de Cotizaciones">
            <template #prepend-content><CIcon name="cilDollar"/></template>
          </CInput>
        </CCol>
                    </CRow>
              </fieldset>
            </b-overlay>
          </CTab>
        </CTabs>
      </CCardHeader>
    </CCard>
  </div>
</template>

<script>
import NvoCita from "../citas/NvoCita";
import Repositories from "../vehiculos/Repositories";
import check from "@/repositories/global/check";

export default {
  components: {
    NvoCita
  },
  data() {
    return {
      showForm: true,
      form: [],
      nvocita: false,
      activeTab: 0,
      items: [],
      activePage: 1,
      maxPages: 1,
      sorter: { column: "", asc: false },
      tableFilter: "",
      columnFilter: {},
      itemsLimit: 50,
      loading: false,
      texto: null,

      message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  mounted: function() {
    this.getRegistro();
    //  this.getFactura()
  },
  methods: {
    newCotizacion() {
      this.$router.push({ path: "/nvacotizacion" });
    },
    showRegistro(id) {
      this.$router.push({ path: `clientes/detalles/${id.toString()}` });
    },

    goBack() {
      this.$router.go(-1);
    },
    changeItemsLimit(val) {
      this.itemsLimit = val;
    },
    permisos(permisos) {
      return check.permiso(permisos);
    },
    async getRegistro() {
      let self = this;
      self.form = await Repositories.getRegistro(self);
      self.showForm = false;
    }
    /* async getFactura() {
      let self      = this;
      self.form     =  await RepositoriesF.getFactura(self);
      self.showForm = false
    },*/
  }
};
</script>
