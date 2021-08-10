<template>
  <div>
    <CRow sm="">
      <CCol sm="">
        <CForm  @submit.prevent="store()" method="POST" novalidate>
          <CAlert
            :show.sync="dismissCountDown"
            color="success"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
  <CRow>
    <CCol sm="">
  <div>
    <label>Fecha *</label>
    <datepicker
     
     v-model="$v.form.fecha.$model"
     format="yyyy-MM-dd"
     horizontal
     :isValid="checkIfValid('fecha')"
     :lazy="false"
     :disabledDates="disabledDates"
     inputClass="form-control">
</datepicker>
  </div>

      <!--   <CInput
         :disabledDates="disabledDates"
            label="Fecha *"
            type="datepicker"
            horizontal
            :value.sync="$v.form.fecha.$model"
            :isValid="checkIfValid('fecha')"
            :lazy="false"
            min="2021-05-31"
              /> -->
</CCol>
     <CCol sm="4">
         <CFormGroup wrapperClasses="input-group pt-2">
       <template #prepend-content><CIcon name="cilUser"/></template>
       <template #append><CButton color="secondary" title="Recargar"><CIcon name="cilLoop"/></CButton></template>
       <template #label>Tipo de Orden</template>
       <template #input>
          <multiselect
           v-model="form.nombre"
           :options="$options.multiorden" 
           :group-select="true"
           tag-placeholder="Sin coincidencias"
           placeholder="Buscar . . ."
           select-label="Seleccionar"
           selected-label="Seleccionado"
           deselect-label="Quitar selección"
           label="text"
           track-by="value"
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
        label="Hora *"
          :value.sync="$v.form.hora.$model"
         :isValid="checkIfValid('hora')"
        type="time"
         :lazy="false" 
        >
      </CInput>
    </CCol>
  </CRow>

     <CRow>
    <CCol sm="">
        <CFormGroup wrapperClasses="input-group pt-2">
         
          <template #append><CButton color="secondary" @click="getCliente()" title="Recargar"><CIcon name="cilLoop"/></CButton></template>
          <template #label>Cliente *</template>
          <template #input>
              <multiselect
                v-model="$v.form.cliente.$model"
                :options="cliente"
                :group-select="true"
                tag-placeholder="Sin coincidencias"
                placeholder="Buscar . . ."
                select-label="Seleccionar"
                selected-label="Seleccionado"
                deselect-label="Quitar selección"
                label="text"
                track-by="value"
                :taggable="true"
                class="form-control border-0 p-0 m-0"
                :isValid="checkIfValid('cliente')"
                  />
          </template>
          </CFormGroup>
          <span class="text-danger float-right" v-if="!$v.form.cliente.required">Este campo es obligatorio</span> <!--Valida que el campo es obligatorio-->
          <br>
          <br>
          <CCol sm="">
      <CInput 
        label="Correo Electrónico"
        placeholder="Correo Electrónico"  
        :value.sync="form.correo"

        >
        
       <template #prepend-content><CIcon name="cilContact"/></template>
      </CInput>
       <CInput 
        label="Teléfono Movil"
        placeholder="Teléfono movil"  
        :value.sync="form.cliente.textmv"
        disabled
       >
       <template #prepend-content><CIcon name="cil-phone"/></template>
      </CInput>
    </CCol>
          </CCol>


          <CCol sm="">
        <CFormGroup wrapperClasses="input-group pt-2">
          <template #prepend-content><CIcon name="cil-car-alt"/></template>
          <template #append><CButton color="secondary" @click="getVehiculo()" title="Recargar"><CIcon name="cilLoop"/></CButton></template>
          <template #label>Vehículo </template>
          <template #input>
           <multiselect
                v-model="form.vehiculo"
                :options="vehiculo"
                :group-select="true"
                tag-placeholder="Sin coincidencias"
                placeholder="Buscar . . ."
                select-label="Seleccionar"
                selected-label="Seleccionado"
                deselect-label="Quitar selección"
                label="text"
                track-by="value"
                :taggable="true"
                class="form-control border-0 p-0 m-0"
                  />
       </template>
          </CFormGroup>   
          <br>
          <br>
          <CCol sm="">
              
      <CInput 
        label="Marca"
        placeholder="Marca" 
        :value="form.vehiculo.textm"
        disabled
        >
        
       <template #prepend-content><CIcon name="cil-italic"/></template>
      </CInput>
       <CInput 
        label="Modelo"
        placeholder="Modelo"  
        :value="form.vehiculo.textmd"
        disabled 
       >
       {}
       <template #prepend-content><CIcon name="cil-italic"/></template>
      </CInput>

   
       <CInput 
        label="Color"
        placeholder="Color"  
        :value="form.vehiculo.textcl"
        disabled
        >
       <template #prepend-content><CIcon name="cil-color-fill"/></template>
      </CInput>
    </CCol>
        </CCol>
     </CRow>
     <CRow>
       <CCol>
                  <div>
                    
    <b-form-group label="Desea recolección a domicilio" class="text-dark h5" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.opc_domi"  :aria-describedby="ariaDescribedby" name="some-radios" value="si">Si</b-form-radio>
      <b-form-radio v-model="form.opc_domi" :aria-describedby="ariaDescribedby" name="some-radios" value="no">No</b-form-radio>
    </b-form-group>


  </div>
       </CCol>
     </CRow>
     <CRow>
    <CCol sm="8">
      <CInput
        label="Calle"
        placeholder="Calle"
        :value.sync="form.calle" 
        v-if="form.opc_domi =='si'"
       >
       <template #prepend-content><CIcon name="cil-house"/></template>
      </CInput>
 
                      
    </CCol>

    <CCol sm="4">
      <CInput 
        label="No. Ext."
        placeholder="No.Ext" 
        :value.sync="form.num"
        v-if="form.opc_domi =='si'"
       >
       <template #prepend-content><CIcon name="cil-house"/></template>
      </CInput>                
    </CCol>
    </CRow>

     <CRow>
    <CCol sm="">
      <CInput 
        label="Colonia"
        placeholder="Colonia" 
        :value.sync="form.colonia"
        v-if="form.opc_domi =='si'"
       >
       <template #prepend-content><CIcon name="cil-house"/></template>
      </CInput>
 
                      
    </CCol>

    <CCol sm="3">
      <CInput 
        label="Código postal"
        placeholder="Código postal" 
        :value.sync="form.cp"
        v-if="form.opc_domi =='si'"
       >
       <template #prepend-content><CIcon name="cil-house"/></template>
      </CInput>                
    </CCol>
    
    <CCol>
        <CFormGroup wrapperClasses="input-group pt-2" v-if="form.opc_domi =='si'">
                          <template #prepend-content  
                            ><CIcon name="cilList"
                          /></template>
                           <template #append><CButton color="secondary" @click="getConductor()" title="Recargar"><CIcon name="cilLoop"/></CButton>
                           <CButton color="secondary"  @click="nvocolaborador = true" title="Nuevo"><CIcon name="cilPlus"/></CButton>
                           </template>
                            
                          <template #label>Nombre de chofer </template>
                          <template #input>
                            <multiselect
                            
                              v-model="form.nom_chofer"
                              :options="nom_chofer"
                              :group-select="true"
                              tag-placeholder="Sin coincidencias"
                              placeholder="Buscar . . ."
                              select-label="Seleccionar"
                              selected-label="Seleccionado"
                              deselect-label="Quitar selección"
                              label="text"
                              track-by="text"
                              :taggable="true"
                              class="form-control border-0 p-0 m-0"
                              selectionType="tags"
                              :selection="true"
                            />
                          </template>
                        </CFormGroup>   
    </CCol>
  </CRow>

<CRow>
    <CCol sm="">
          <CTextarea
                label="Nota"
                placeholder="Notas sobre la cita"
                rows="2"
                :value.sync="form.nota" 
              />
    </CCol>
    </CRow>
     </CForm>
      </CCol>
        </CRow>

      <CModal 
      size="lg"
      title="Nuevo Colaborador"
      color="dark"
      :show.sync="nvocolaborador"
    > 
    <NvoColaborador/>
     <template #footer>
        <CButton  @click="nvocolaborador= false" ><CIcon name="cilArrowThickToLeft"/> Cancelar</CButton>
  
      </template>
    </CModal>

  <CButton type="submit" @click="store()" class="btn btn-success float-right" :disabled="!isValid || submitted" :hidden="submitted"><CIcon name="cilSave"/> Guardar</CButton>  
 
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Multiselect from 'vue-multiselect'
import { validationMixin } from "vuelidate"
import check from '@/repositories/global/check'
import alert from '@/repositories/global/alert'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import { required  } from "vuelidate/lib/validators"
import NvoColaborador from '../detallesempresa/NvoColaborador'
import Datepicker from "vuejs-datepicker"


export default {
  name: 'nvocita',
  components:{
    Multiselect,
     NvoColaborador,
     Datepicker
  },
  data () {
    return {
    nvocolaborador: false,
    model: {
          date: ''
        },
    
        disabledDates: {
          to: new Date(Date.now() - 8640000)
        },

    opc_domi: '',
    vehiculo:[],
    nom_chofer:[],
    value: '',
    submitted: false,
    form: this.getEmptyForm(),
    cliente: [],
    direccion:[],
    nota: [],
    correo:[],
    nombre: [],
     checkboxNames: ['Enviar: '],
      date: '',
        
        message: '',
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,

         modes: [ 
        { shape: 'pill'},
      ],
      colors: ['dark']
    }
    
  },
  mounted: function(){
    this.getCliente()
    this.getVehiculo()
    this.getConductor()
    this.getDireccion()
},

multiorden:[{ value: 'Servicio', text: 'Servicio' },

  { value: 'Garantia', text: 'Garantia' },{ value: 'Rescate Vial', text: 'Rescate Vial' }],
  computed: {
    formString () { return JSON.stringify(this.form, null, 4) },
    isValid() { return !this.$v.form.$invalid },
    isDirty() { return this.$v.form.$anyDirty },
  },
mixins: [validationMixin],
  validations: {
    form: {   
      cliente: {required},
      hora: {required},
      fecha: {required},
    },
  },
 methods:{
   goBack() { this.$router.go(-1) },
   permisos(permisos) {
      return !check.permiso(permisos)
    },
     getEmptyForm() {
      return {
        cliente: '',
        correo:'',
        hora:'',
        nota:'',
        nombre:'',
        vehiculo:'',
        opc_domi:'',
        nom_chofer:'',
        calle:'',
        num:'',
        cp:'',
        colonia:''
      }
   },
   clearForm() { 
      let self = this;
      self.form.cliente = ''
      self.form.hora = ''
      self.form.fecha=''
      self.form.nota = ''
      self.form.nombre = ''
      self.form.vehiculo=''
      self.form.opc_domi=''

      self.form.nom_chofer=''
      self.form.calle=''
      self.form.num=''
      self.form.cp=''
      self.form.colonia=''
    },
     countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
     checkIfValid(fieldName) {
      const field = this.$v.form[fieldName];
      if (!field.$dirty) {
        return null;
      }
      return !(field.$invalid || field.$model === "");
    },

//Registrar nueva cita
  store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
        "Enviaras toda la información relacionada a este registro a la base de datos."+"\n"+"<br/> Fecha:"+ this.form.fecha +"\n"+"<br/> Tipo de servicio:"+ this.form.textnombre +"\n"+"<br/> Hora:"+this.form.hora
         +"\n"+"<br/> Cliente:"+this.form.cliente.text +"\n"+"<br/> Vehículo:"+this.form.vehiculo.valuev +"\n"+"<br/> Recolección:"+this.form.opc_domi +"\n"+"<br/> Calle:"+this.form.calle +"\n"+"<br/> Nombre de chofer :"+this.form.nom_chofer.text
         +"\n"+"<br/> Nota:"+this.form.nota,
       reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {
          let self = this;
      self.submitted = true
      self.errors = []
      self.form.val_ant=self.form.cliente
      self.form.cliente=self.form.cliente.value

      self.form.val_ant_veh=self.form.vehiculo
      self.form.vehiculo=self.form.vehiculo.valuev

      self.form.val_ant_chof = self.form.nom_chofer;
      self.form.nom_chofer = self.form.nom_chofer.text;

      self.form.val_ant_serv = self.form.nombre
      self.form.nombre=self.form.nombre.value

      //self.form.val_ant_correo=self.form.correo
      //self.form.correo=self.form.cliente.correo
         
          axios.post(this.$apiAdress+'/api/cita/almacenar?token='+localStorage.getItem("api_token"), self.form
      ) 
            .then(function (response) {
                    console.log(response.data)
            alert.response200("¡Registro guardado exitosamente!", "");
            self.clearForm()
            self.submitted = false; 
              
      }) 
  
            .catch(function(error) {
                self.submitted = false;
          self.form.cliente=self.form.val_ant
          self.form.vehiculo=self.form.val_ant_veh    
          self.form.nom_chofer=self.form.val_ant_chof 
          self.form.nombre=self.form.val_ant_serv 
         // self.form.correo=self.form.val_ant_correo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
          self.errors = alert.responseCatch(error, 'Code #1009');
            });
        }
      });
    },

   getCliente() {
     
      let self = this;
      self.cliente = []
      axios.post(this.$apiAdress+'/api/usuario/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
        console.log(response.data)
        

        response.data.forEach(function(valor, indice, array) {
          self.cliente.push({
            value: valor.id,
            text: valor.name +"\n" + valor.apell,


            correo:valor.email,
           

            valuemv:valor.tel_mov,
            textmv:valor.tel_mov,
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },
     getConductor() {
      let self = this;
      self.nom_chofer = []
      axios.post(this.$apiAdress+'/api/colaborador/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
        console.log(response.data)
        response.data.forEach(function(valor, indice, array) {
          self.nom_chofer.push({

            value: valor.id,
            text: valor.name
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },

    getDireccion() {
      let self = this;
      self.cliente = []
      axios.post(this.$apiAdress+'/api/factura/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
       console.log(response.data)

        response.data.forEach(function(valor, indice, array) {
          self.cliente.push({
           
            valuecall:valor.calle,
            textcall:valor.calle,

            valuenum:valor.n_ext,
            textnum:valor.n_ext,
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
        
      });
    },

    getVehiculo() {  
      let self = this;
      self.vehiculo = []
      
      axios.post(this.$apiAdress+'/api/vehiculo/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
        console.log(response.data)
      
        response.data.forEach(function(valor, indice, array) {
          self.vehiculo.push({
            valuev: valor.plac,
            text: valor.plac,

            valuem: valor.marc,
            textm: valor.marc,

            valuemd:valor.mod,
            textmd:valor.mod,
          
            valuecl:valor.c_principal,
            textcl:valor.c_principal,
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },
  },
   
}

</script>

