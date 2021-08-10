<template>
  <div >
    <CRow sm="">
      <CCol>
        <CCard>
          <div class="m-3">
            <h3 class="text-info">Nuevo Cliente</h3>
          </div>
          
          <CCardBody>
            <h5 class="bold">Por favor completa los siguientes campos:</h5>
            <br /> 
            <br />
            <CTabs add-tab-classes="mt-1">
              <CTab active>
                <template slot="title">
                  <CIcon name="cil-address-book" /> {{ tabs[0] }}
                </template>
                <CForm @submit.prevent="store()" method="POST" novalidate>
                  <CCardBody>
                   

                    <CRow>
                      <CCol sm="">
                        <CInput
                          label="Nombre(s) *"
                          placeholder="Ingresa tu nombre"
                          maxlength="40"
                          :lazy="false"
                          :value.sync="$v.form.nombre.$model"
                          :isValid="checkIfValid('nombre')"
                        >
                          <template #prepend-content
                            ><CIcon name="cilUser"
                          /></template>
                        </CInput>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.nombre.required"
                          >Este campo es obligatorio</span
                        >
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.nombre.maxLength"
                          >Este campo no debe contener más de
                          {{ $v.form.nombre.$params.maxLength.max }}
                          caracteres.</span
                        >
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Apellidos *"
                          placeholder="Ingresa tus apellidos"
                          maxlength="40"
                          :lazy="false"
                          :value.sync="$v.form.apellidos.$model"
                          :isValid="checkIfValid('apellidos')"
                        >
                          <template #prepend-content
                            ><CIcon name="cilUser"
                          /></template>
                        </CInput>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.apellidos.required"
                          >Este campo es obligatorio</span
                        >
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.apellidos.maxLength"
                          >Este campo no debe contener más de
                          {{ $v.form.apellidos.$params.maxLength.max }}
                          caracteres.</span
                        >
                      </CCol>
                    </CRow>

                    <CRow sm="">
                      <CCol sm="">
                        <CInput
                          type="email"
                          label="Correo Electrónico *"
                          placeholder="Ingresa tu Correo"
                          maxlength="75"
                          :lazy="false"
                          autocomplete="username email"
                          :value.sync="$v.form.correo.$model"
                          :isValid="checkIfValid('correo')"
                        >
                          <template #prepend-content
                            ><CIcon name="cilContact"
                          /></template>
                        </CInput>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.correo.required"
                          >Este campo es obligatorio</span
                        >
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.correo.email"
                          >Este campo debe ser una dirección de correo
                          electrónico válida.</span
                        >
                      </CCol>

                      <CCol sm="">
                        <CInput
                          type="email"
                          label="Correo Electrónico Secundario"
                          placeholder="Ingresa tu Correo"
                          maxlength="75"
                          :lazy="false"
                          :value.sync="form.correo_secundario"
                        >
                          <template #prepend-content
                            ><CIcon name="cilContact"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow>

                      <CCol md="6">
                        <template>
                        <CInput
                          :isValid="checkIfValid('contraseña')"
                          :value.sync="$v.form.contraseña.$model"
                           v-bind:value="$v.form.contraseña.$model"
                          label="Contraseña *"
                          type="password"
                          placeholder="**********"
                          autocomplete="new-password"
                          invalidFeedback="Contraseña requerida que contenga al menos: número, letra mayúscula y minúscula, 8 caracteres"
                        />
                   
                       </template>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.contraseña.required"
                          >Este campo es obligatorio</span
                        > 
</CCol>
<CCol>
  <h5 class="text-info">Generar contraseña</h5>
<CButton
        
          class="info"
          v-on:click="onGenerate"
          >Generar
          </CButton>
</CCol>
                    </CRow>

 


                    <CRow sm="">
                      <CCol sm="6">
                        <CFormGroup
                          wrapperClasses="input-group pt-2"
                          description="ex. (999) 999-9999"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-phone" />
                          </template>
                          <template #label>
                            Teléfono fijo
                          </template>
                          <template #input>
                            <masked-input
                              type="tel"
                              name="phone"
                              :value.sync="form.telefono_fijo"
                              class="form-control"
                              v-model="form.telefono_fijo"
                              :mask="[
                                '(',
                                /[1-9]/,
                                /\d/,
                                /\d/,
                                ')',
                                ' ',
                                /\d/,
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/
                              ]"
                              :guide="true"
                              placeholderChar="#"
                            />
                          </template>
                        </CFormGroup>
                      </CCol>

                      <CCol sm="6">
                        <CFormGroup
                          wrapperClasses="input-group pt-2"
                          description="ex. (999) 999-9999"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-phone" />
                          </template>
                          <template #label>
                            Teléfono movil *
                          </template>
                          <template #input>
                            <masked-input
                              type="tel"
                              name="phone"
                              :value.sync="$v.form.telefono_movil.$model"
                              :isValid="checkIfValid('telefono_movil')"
                              class="form-control"
                              v-model="form.telefono_movil"
                              :mask="[
                                '(',
                                /[1-9]/,
                                /\d/,
                                /\d/,
                                ')',
                                ' ',
                                /\d/,
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/
                              ]"
                              :guide="true"
                              placeholderChar="#"
                            />
                          </template>
                        </CFormGroup>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.telefono_movil.required"
                          >Este campo es obligatorio</span
                        >
                      </CCol>
                    </CRow>

                   <CRow>
                      <CCol sm="">
                        <template>
                          <label>Tipo de cliente *</label>
                          <select
                            class="browser-default custom-select"
                            v-on:change="changeItem($event)"
                            v-model="$v.form.tip_cliente.$model"
                            track-by="value"
                            :isValid="checkIfValid('tip_cliente')"
                            :taggable="true"
                          >
                            <option
                              v-for="(option, index) in $options.selectcliente" 
                              :key="index" :value.sync="option.value"
                            >
                              {{ option.text }}
                            </option>
                          </select>
                           <span
                          class="text-danger float-right"
                          v-if="!$v.form.tip_cliente.required"
                          >Este campo es obligatorio</span
                        >
                        </template>
                      </CCol>

                      <CCol sm="">
                        <CInputCheckbox
                          v-if="form.tip_cliente == 'Flotilla'"
                            :disabled="inputDisabled == true"
                            :checked.sync="opc_otra"
                            label="Otra"
                            custom
                            class=" float-right"
                          />
                        

                        <CInput
                        v-if="form.tip_cliente == 'Particular' || opc_otra == true"
                          label="Nombre de la Empresa *"
                          placeholder="Nombre de la Empresa"
                          maxlength="100"
                          :lazy="false"
                          :value.sync="$v.form.empresa.$model"
                          :disabled="inputDisabled == true"
                          :isValid="checkIfValid('empresa')"
                         
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                        <span
                        
                          class="text-danger float-right"
                          v-if="!$v.form.empresa.required || form.tip_cliente == 'Particular' || opc_otra == true"
                          >Este campo es obligatorio</span
                        >


 
<div v-if="form.tip_cliente == 'Flotilla' && opc_otra == false">

        <!--          
      <CFormGroup wrapperClasses="input-group pt-2 "  >
                          <template #prepend-content 
                            ><CIcon name="cilList"
                          /></template>
                          
                          <template #label>Nombre de la Empresa *</template>
                          <template #input >
                            <multiselect
                              v-model="form.empresa"
                              :options="empresa"
                              :group-select="true"
                              tag-placeholder="Sin coincidencias"
                              placeholder="Buscar . . ."
                              select-label="Seleccionar"
                              selected-label="Seleccionado"
                              deselect-label="Quitar selección"
                              label="textEmp"
                              track-by="valueEmp"
                              :taggable="true"
                              class="form-control border-0 p-0 m-0"
                              :isValid="checkIfValid('empresa')"

                            />
                          </template>
                          <div>
                              <span
                          class="text-danger float-right"
                          v-if="form.empresa || form.tip_cliente == 'Flotilla' && opc_otra == false"
                          >Este campo es obligatorio</span
                        >
                          </div>
                        </CFormGroup>-->
                        <div class="form-group">
        <label for="empresas">Empresa</label>
        <select v-model="$v.form.empresa.$model" class="form-control" id="empresas">
            <option v-for="empresas in empresa" :value="empresas.textEmp">{{empresas.textEmp}}</option>
        </select>
    </div>
  {{form.empresa.textEmp}}             
</div>

                      </CCol>

                    </CRow>
                    <br/>

                    <CRow>
                      <CCol sm="6">
                        <CFormGroup wrapperClasses="input-group pt-2">
                          <template #prepend-content
                            ><CIcon name="cilList"
                          /></template>
                          <template #append
                            ><CButton
                              color="secondary"
                              @click="getSucursal()"
                              title="Recargar"
                              ><CIcon name="cilLoop"/></CButton
                          ></template>
                          <template #label>Sucursal *</template>
                          <template #input>
                            <multiselect
                              v-model="$v.form.sucursal.$model"
                              :options="sucursal"
                              :group-select="true"
                              tag-placeholder="Sin coincidencias"
                              placeholder="Buscar . . ."
                              select-label="Seleccionar"
                              selected-label="Seleccionado"
                              deselect-label="Quitar selección"
                              label="textSuc"
                              track-by="valueSuc"
                              :taggable="true"
                              class="form-control border-0 p-0 m-0"
                              :isValid="checkIfValid('sucursal')"
                            />
                          </template>
                        </CFormGroup>
                        <span
                          class="text-danger float-right"
                          v-if="!$v.form.sucursal.required"
                          >Este campo es obligatorio</span
                        >
                      </CCol>
                      <CCol>
                         <h6>Enviar correo de bienvenida</h6>

                    <template v-for="(mode, index) in modes">
                      <div
                        class="d-flex justify-content-between my-4"
                        :key="index"
                      >
                        <CSwitch
                          :isValid="checkIfValid('notificacion')"
                          :checked.sync="$v.form.notificacion.$model"
                          :key="key"
                          :color="color"
                          v-bind="mode"
                          v-for="(color, key) in colors"
                        >
                        </CSwitch>
                      </div>
                    </template>
                      </CCol>
                    </CRow>
                    <br />
                   
                  </CCardBody>
   </CForm>
                  <CCardFooter>
                    <CRow>
                      <CCol>
                        <div class="d-grid gap-2 d-md-block">
                          <button
                            type="submit"
                            class="btn btn-light w-50"
                            @click="goBack"
                          >
                            <CIcon name="cilArrowThickToLeft" /> Cancelar
                          </button>
                        </div>
                      </CCol>
                      <CCol>
                        <div
                          class=" d-grid gap-2 d-md-flex justify-content-md-end"
                        >
                          <CButton
                            @click="store()"
                            type="submit"
                            class="btn btn-success w-50"
                            :disabled="!isValid || submitted"
                            :hidden="submitted"
                            ><CIcon name="cilSave" /> Guardar</CButton
                          >
                        </div></CCol
                      >
                    </CRow>
                  </CCardFooter>
             
              </CTab>

              <CTab>
                <template slot="title">
                  <CIcon name="cil-book" /> {{ tabs[1] }}
                </template>
                <FormDirectorios @add-directorio="agregarDirectorio" />
                <ListaDirectorios
                  :directorios="directorios"
                  @delete-directorio="eliminarDirectorio"
                  :disabled="!isValid || submitted"
                  :hidden="submitted"
                  method="POST"
                />
                <CCol lg="6">
                  <CCard :class="`bg-${submitted ? 'info' : 'secondary'}`">
                    <pre>{{ tablaString }}</pre>
                  </CCard>
                </CCol>

                <CCardFooter>
                  <CRow>
                    <CCol>
                      <div class="d-grid gap-2 d-md-block">
                        <button
                          type="submit"
                          class="btn btn-light w-50"
                          @click="goBack"
                        >
                          <CIcon name="cilArrowThickToLeft" /> Cancelar
                        </button>
                      </div>
                    </CCol>

                    <CCol>
                      <div
                        class=" d-grid gap-2 d-md-flex justify-content-md-end"
                      >
                        <CButton
                          type="submit"
                          class="btn btn-success w-50"
                          @click="store(Array)"
                          :disabled="!isValid || submitted"
                          :hidden="submitted"
                        >
                          <CIcon name="cilSave" /> Guardar</CButton
                        >
                      </div></CCol
                    >
                  </CRow>
                </CCardFooter>
              </CTab>

              <CTab>
                <template slot="title">
                  <CIcon name="cilNotes" /> {{ tabs[2] }}
                </template>
                <CForm @submit.prevent="store()" method="POST">
                  <CCardBody>
                    <CAlert :show.sync="dismissCountDown" color="success" fade>
                      ({{ dismissCountDown }}) {{ message }}
                    </CAlert>
                    <CRow>
                      <CCol sm="">
                        <CFormGroup wrapperClasses="input-group pt-2">
                          <template #prepend-content
                            ><CIcon name="cilList"
                          /></template>
                          <template #append
                            ><CButton color="secondary" title="Recargar"
                              ><CIcon name="cilLoop"/></CButton
                          ></template>
                          <template #label>Tipo de persona </template>
                          <template #input>
                            <multiselect
                              v-model="form.tipo"
                              :options="$options.multiselectOptions"
                              :group-select="true"
                              tag-placeholder="Sin coincidencias"
                              placeholder="Buscar . . ."
                              select-label="Seleccionar"
                              selected-label="Seleccionado"
                              deselect-label="Quitar selección"
                              label="texttip"
                              track-by="valuetip"
                              :taggable="true"
                              class="form-control border-0 p-0 m-0"
                              selectionType="tags"
                              :selection="true"
                            />
                          </template>
                        </CFormGroup>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="RFC "
                          placeholder="RFC"
                          maxlength="13"
                          :value.sync="form.rfc"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow sm="">
                      <CCol sm="">
                        <CInput
                          label="Razón Social"
                          placeholder="Razón social"
                          :value.sync="form.razon_social"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Calle"
                          placeholder="Calle"
                          :value.sync="form.calle"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow sm="">
                      <CCol sm="">
                        <CInput
                          label="No. Int."
                          placeholder="No. Int."
                          :value.sync="form.numero_interior"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="No. Ext."
                          placeholder="No. Ext."
                          :value.sync="form.numero_exterior"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          type="number"
                          label="C.P"
                          placeholder="C.P"
                          :value.sync="form.codigo_postal"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow sm="">
                      <CCol sm="">
                        <CInput
                          label="Colonia"
                          placeholder="Colonia"
                          :value.sync="form.colonia"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Localidad"
                          placeholder="Localidad"
                          :value.sync="form.localidad"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow sm="">
                      <CCol sm="">
                        <CInput
                          label="Estado"
                          placeholder="Estado"
                          :value.sync="form.estado"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>

                      <CCol sm="">
                        <CInput
                          label="Ciudad/Delegación"
                          placeholder="Ciudad/Delegación"
                          :value.sync="form.ciudad"
                        >
                          <template #prepend-content
                            ><CIcon name="cilText"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>

                    <CRow sm="">
                      <CCol sm="6">
                        <CFormGroup
                          wrapperClasses="input-group pt-2"
                          description="ex. (999) 999-9999"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-phone" />
                          </template>
                          <template #label>
                            Teléfono 1
                          </template>
                          <template #input>
                            <masked-input
                              type="tel"
                              name="phone"
                              :value.sync="form.telefono1"
                              class="form-control"
                              v-model="form.telefono1"
                              :mask="[
                                '(',
                                /[1-9]/,
                                /\d/,
                                /\d/,
                                ')',
                                ' ',
                                /\d/,
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/
                              ]"
                              :guide="true"
                              placeholderChar="#"
                            />
                          </template>
                        </CFormGroup>
                      </CCol>

                      <CCol sm="6">
                        <CFormGroup
                          wrapperClasses="input-group pt-2"
                          description="ex. (999) 999-9999"
                        >
                          <template #prepend-content>
                            <CIcon name="cil-phone" />
                          </template>
                          <template #label>
                            Teléfono 2
                          </template>
                          <template #input>
                            <masked-input
                              type="tel"
                              name="phone"
                              :value.sync="form.telefono2"
                              class="form-control"
                              v-model="form.telefono2"
                              :mask="[
                                '(',
                                /[1-9]/,
                                /\d/,
                                /\d/,
                                ')',
                                ' ',
                                /\d/,
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/
                              ]"
                              :guide="true"
                              placeholderChar="#"
                            />
                          </template>
                        </CFormGroup>
                      </CCol>
                    </CRow>

                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                        >Notas para Facturación</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        :value.sync="form.notas"
                        v-model="form.notas"
                      >
                      </textarea>
                    </div>
                  </CCardBody>
                  <CCardFooter>
                    <CRow>
                      <CCol>
                        <div class="d-grid gap-2 d-md-block">
                          <button
                            type="submit"
                            class="btn btn-light w-50"
                            @click="goBack"
                          >
                            <CIcon name="cilArrowThickToLeft" /> Cancelar
                          </button>
                        </div>
                      </CCol>
                      <CCol>
                        <div
                          class=" d-grid gap-2 d-md-flex justify-content-md-end"
                        >
                          <CButton
                            type="submit"
                            class="btn btn-success w-50"
                            :disabled="!isValid || submitted"
                            :hidden="submitted"
                            ><CIcon name="cilSave" /> Guardar</CButton
                          >
                        </div></CCol
                      >
                    </CRow>
                  </CCardFooter>
                </CForm>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cilCreditCard" /> {{ tabs[3] }}
                </template>
                <CForm @submit.prevent="store()" method="POST">
                  <CCardBody>
                    <CAlert :show.sync="dismissCountDown" color="success" fade>
                      ({{ dismissCountDown }}) {{ message }}
                    </CAlert>
                    <CRow>
                      <CCol sm="">
                        <CInput
                          label="Días de crédito"
                          placeholder="Días de crédito"
                          :value.sync="form.dias"
                        >
                          <template #prepend-content
                            ><CIcon name="cil-dollar"
                          /></template>
                        </CInput>
                      </CCol>
                      <CCol sm="">
                        <CInput
                          label="Límite de Crédito"
                          placeholder="Límite de crédito"
                          :value.sync="form.credito"
                        >
                          <template #prepend-content
                            ><CIcon name="cil-dollar"
                          /></template>
                        </CInput>
                      </CCol>
                    </CRow>
                  </CCardBody>
                  <CCardFooter>
                    <CRow>
                      <CCol>
                        <div class="d-grid gap-2 d-md-block">
                          <button
                            type="submit"
                            class="btn btn-light w-50"
                            @click="goBack"
                          >
                            <CIcon name="cilArrowThickToLeft" /> Cancelar
                          </button>
                        </div>
                      </CCol>
                      <CCol>
                        <div
                          class=" d-grid gap-2 d-md-flex justify-content-md-end"
                        >
                          <CButton
                            type="submit"
                            class="btn btn-success w-50"
                            :disabled="!isValid || submitted"
                            :hidden="submitted"
                            ><CIcon name="cilSave" /> Guardar</CButton
                          >
                        </div></CCol
                      >
                    </CRow>
                  </CCardFooter>
                </CForm>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import MaskedInput from "vue-text-mask";
import alert from "@/repositories/global/alert";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength,
  helpers
} from "vuelidate/lib/validators";
import NvoCliente from "./NvoCliente";
import ListaDirectorios from "./ListaDirectorios";
import FormDirectorios from "./directorios/FormDirectorios";

export default {
  name: "registros",
  components: {
    FormDirectorios,
    ListaDirectorios,
    NvoCliente,
    Multiselect,
    MaskedInput
  },
  data() {
    return {
      empresaSeleccionado: {},//<-- el seleccionado estará aquí
    empresa: [],
      opc_otra: false,
         generateText: "G",
        copyText: "c",
        characters: [
          {
              name: "Lowercase",
              value: "abcdefghijklmnopqrstuvwxyz",
              checked: true,
          },
          {
              name: "Uppercase",
              value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
              checked: true,
          },
          {
              name: "Numbers",
              value: "0123456789",
              checked: true,
          },
          {
              name: "Special Characters",
              value: "_-+=)(*&^%$#@!`~",
              checked: false,
          },
        ],
        contraseña: "",
        gLength: 12,

      inputDisabled: true,
     

      cliente: false,
      flotilla: true,
      directorios: [],
      submitted: false,
      agregar: false,
      form: this.getEmptyForm(),
      formDir: this.getEmptyFormDir(),

      tipo: [],
      tip_cliente:null,

      errors: [],
      fields: [
        "nombre",
        "puesto",
        "correo",
        "telefono",
        {
          key: "delete",
          label: "",
          _style: "width:1%",
          sorter: false,
          filter: false
        }
      ],
      sucursal: [],
     

      items: [],
      sorter: { column: "", asc: false },
      tableFilter: "",
      columnFilter: {},
      itemsLimit: 10,
      loading: false,

      notificacion: "",

      message: "",
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,

      modes: [{ shape: "pill" }],
      colors: ["dark"],

      tabs: ["Generales", "Directorio", "Facturación", "Crédito"],
      activeTab: 0
    };
  },
  multiselectOptions: [
    { valuetip: "Física", texttip: "Física" },
    { valuetip: "Moral", texttip: "Moral" }
  ],
  selectcliente: [
    { value: "Particular", text: "Particular" },
    { value: "Flotilla", text: "Flotilla" }
  ],

  /* selectOptions: [
        'Flotilla', 'Particular',
        { 
          value: ['Flotilla', 'Particular'], 
          label: 'Selecciona una opcion'
        }
      ],*/

  watch: {
    sorter: {
      handler() {
        this.getdirectorio();
      },
      deep: true
    },
    tableFilter() {
      this.getdirectorio();
    },
    columnFilter() {
      this.getdirectorio();
    }
  },
  mounted: function() {
    this.getSucursal(), this.getdirectorio(),this.getEmpresas();
  },
  computed: {
    formString() {
      return JSON.stringify(this.form, null, 4);
    },
    isValid() {
      return !this.$v.form.$invalid;
    },
    isDirty() {
      return this.$v.form.$anyDirty;
    },
    tablaString() {
      return JSON.stringify(this.directorios, null, 4);
    }
  },  
  mixins: [validationMixin],
  validations: {
    form: {
      nombre: { required, maxLength: maxLength(40) },
      apellidos: { required, maxLength: maxLength(40) },
      correo: { required, email },
      telefono_movil: { required, maxLength: maxLength(14) },
      tip_cliente: { required },
      empresa: { required },
      sucursal: { required, maxLength: maxLength(150) },
     
      notificacion: { required },
      contraseña: {
        required,
        minLength: minLength(8),
        
      },
      
      rfc: { maxLength: maxLength(13) }
    }
  },
  methods: {

    getEmpresas() {
      let self = this;
      self.empresa = [];
      axios
        .post(
          this.$apiAdress +
            "/api/empresa/getAll?token=" +
            localStorage.getItem("api_token"),
          {}
        )
        .then(function(response) {
          console.log(response.data);
          response.data.forEach(function(valor, indice, array) {
            self.empresa.push({
              valueEmp: valor.emp,
              textEmp: valor.emp
            });
          });
        })
        .catch(function(error) {
          alert.responseCatch(error, "Code #1005");
        });
    },

onMouseEnterGenerateBtn: function() {
        this.generateText = "Generate";
      },
      onMouseLeaveGenerateBtn: function() {
        this.generateText = "G";
      },
      onMouseEnterCopyBtn: function() {
        this.copyText = "copy";
      },
      onMouseLeaveCopyBtn: function() {
        this.copyText = "c";
      },
      onGenerate: function() {
          let result = "";
          let charactersVal = "";
          for (var j = 0; j < this.characters.length; j++) {
            if (this.characters[j].checked) {
              charactersVal += this.characters[j].value;
            }
          }
          for ( var i = 0; i < this.gLength; i++ ) {
            result += charactersVal.charAt(Math.floor(Math.random() * charactersVal.length));
          }
          this.$v.form.contraseña.$model= result;
        },
        onCopyPass: function() {
            let textToCopy = this.contraseña;
            try {
                // 1) Copy text
                navigator.clipboard.writeText(textToCopy);

                // 2) Catch errors
              } catch (err) {
                console.error('Failed to copy: ', err);
              }
        },
    newcontraseña(){
    this.$router.push({path: '/generadorcont'});
  },
   

    changeItem: function changeItem(event) {
      this.form.empresa = event.target.value;
      
      //this.form.empresa=event.target.value == "flotilla" || "";
      this.inputDisabled = event.target.value == "Particular";
      //this.form.empresa = event.target.value == "Flotilla" == '';

      if (this.form.empresa == 'Flotilla') {
        this.form.empresa=''
      }
    },

    agregarDirectorio(directorio) {
      let id = 1;
      if (this.directorios.length > 0) {
        id = this.directorios[this.directorios.length - 1].id + 1;
      }
      this.directorios = [...this.directorios, { ...directorio, id }];
      //  this.directorios=[this.directorios, directorio];
    },
    eliminarDirectorio(id) {
      this.directorios = this.directorios.filter(
        directorio => directorio.id !== id
      );
    },

    goBack() {
      this.$router.go(-1);
    },
    getEmptyForm() {
      return {
        nombre: "",
        apellidos: "",
        correo: "",
        correo_secundario: "",
        contraseña: "",
        telefono_fijo: "",
        telefono_movil: "",
        empresa: "",
        sucursal: "",
       
        notificacion: true,
        tip_cliente: "",
       

        //Datos para llenar la información de facturación
        tipo: "",
        rfc: "",
        razon_social: "",
        calle: "",
        numero_interior: "",
        numero_exterior: "",
        codigo_postal: "",
        colonia: "",
        localidad: "",
        estado: "",
        ciudad: "",
        telefono1: "",
        telefono2: "",
        notas: "",

        //Datos para llenar la información de crédito
        dias: "",
        credito: ""
        
      };
    },
    getEmptyFormDir() {
      return {
        directorios: ""
      };
    },
    clearForm() {
      let self = this;
      self.form.nombre = "";
      self.form.apellidos = "";
      self.form.correo = "";
     
 
      self.form.correo_secundario = "";
      self.form.contraseña = "";
      self.form.telefono_fijo = "";
      self.form.telefono_movil = "";
      self.form.tip_cliente = "";
      self.form.empresa = "";
      self.form.sucursal = "";
      

      //Datos para vaciar la información de facturación
      self.form.tipo = "";
      self.form.rfc = "";
      self.form.razon_social = "";
      self.form.calle = "";
      self.form.numero_interior="",
      self.form.numero_exterior = "";
      self.form.codigo_postal = "";
      self.form.colonia = "";
      self.form.localidad = "";
      self.form.estado = "";
      self.form.ciudad = "";
      self.form.telefono1 = "";
      self.form.telefono2 = "";
      self.form.notas = "";

      //Datos para vaciar la información de crédito
      self.form.dias = "";
      self.form.credito = "";
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    checkIfValid(fieldName) {
      const field = this.$v.form[fieldName];
      if (!field.$dirty) {
        return null;
      }
      return !(field.$invalid || field.$model === "");
    },
    

//Registrar usuario
  store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
          "Enviaras toda la información relacionada a este registro a la base de datos."
          +"\n"+"<br/> Nombre:"+this.form.nombre+"\n"+"<br/> Apellidos:"+this.form.apellidos+"\n"+"<br/> Correo Electronico:"+this.form.correo+
          "\n"+"<br/> Correo Electrónico secundario:"+this.form.correo_secundario+"\n"+"<br/>Telefono Fijo:"+this.form.telefono_fijo
          +"\n"+"<br/> Telefono móvil:"+this.form.telefono_movil+"\n"+"<br/> Tipo de cliente:"+this.form.tip_cliente+
          "\n"+"<br/> Nombre de la empresa:"+this.form.empresa+"\n"+"<br/> Sucursal:"+this.form.sucursal.textSuc+"\n",
        
    
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`

      }).then(result => {
        if (result.isConfirmed) {
          let self = this;
          
      self.submitted = true;
      self.errors = []; 

      self.form.val_ant_suc = self.form.sucursal;
      self.form.sucursal = self.form.sucursal.textSuc;

      self.form.val_ant_tipo = self.form.tipo;
      self.form.tipo = self.form.tipo.valuetip;
       
console.log(this.form.tip_cliente) 


          axios.post(
        this.$apiAdress +"/api/general/almacenar?token=" + localStorage.getItem("api_token"),
        self.form
        )
            .then(function(response) {
              console.log(response)
              alert.response200("¡Registro guardado exitosamente!", "");
              self.clearForm();
          self.submitted = false;
             
            })
            .catch(function(error) {
              self.submitted = false;
          self.form.tipo = self.form.val_ant_tipo;
          self.form.tip_cliente = self.form.val_ant_cli;
          self.form.sucursal = self.form.val_ant_suc;

          self.errors = alert.responseCatch(error, "Code #1009");
          alert.responseCatch(error, "Code #422");
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
    
    getSucursal() {
      let self = this;
      self.sucursal = [];
      axios
        .post(
          this.$apiAdress +
            "/api/sucursal/getAll?token=" +
            localStorage.getItem("api_token"),
          {}
        )
        .then(function(response) {
          console.log(response.data);
          response.data.forEach(function(valor, indice, array) {
            self.sucursal.push({
              valueSuc: valor.id,
              textSuc: valor.suc
            });
          });
        })
        .catch(function(error) {
          alert.responseCatch(error, "Code #1005");
        });
    },
  
    getdirectorio() {
      this.loading = true;
      let self = this;
      this.items = [];
      axios
        .post(
          this.$apiAdress +
            "/api/directorio?token=" +
            localStorage.getItem("api_token") +
            "&page=" +
            self.activePage,
          {
            sorter: self.sorter,
            tableFilter: self.tableFilter,
            columnFilter: self.columnFilter,
            itemsLimit: self.itemsLimit
          }
        )
        .then(function(response) {
          self.items = self.items.concat(response.data.data);
          self.maxPages = response.data.last_page;
          self.loading = false;
          console.log(response);
        })
        .catch(function(error) {
          self.loading = false;
          console.log(error);
        });
    },
    makeFilter() {
      this.getdirectorio();
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

.generator {
  padding: 10px;
  text-align: center;
  grid-area: generator;
  border-right: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.g-result {
  border: 2px solid #000;
  border-radius: 20px;
  font-size: 16px;
  margin: 20px;
  position: relative;
}
.g-result input {
  background-color: transparent;
  padding: 10px 20px;
  color: #000;
  border: none;
}
</style>

