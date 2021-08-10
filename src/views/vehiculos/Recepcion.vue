<template>
  <div>
    <CForm  @submit.prevent="store()" method="POST" novalidate>
      <CAlert
            :show.sync="dismissCountDown"
            color="success"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
      <CCol lg="6">
        
      </CCol>

      <CCard sm="6">
      
          <h2 class="text-info ml-4">Recepción del Vehículo</h2>
      
            
      <CCardBody>  
        <CRow>
          <CCol sm="" >
          <CFormGroup wrapperClasses="input-group ">
          <template #prepend-content><CIcon name="cilUser"/></template>
          <template #append><CButton color="secondary" @click="getCliente()" title="Recargar"><CIcon name="cilLoop"/></CButton></template>
          <template #label>Cliente *</template>
          <template #input>
              <multiselect
                v-model="form.cliente"
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
                  />
          </template>
          </CFormGroup>
          </CCol>

        <CCol sm=""> 
          <CFormGroup wrapperClasses="input-group ">
          <template #prepend-content><CIcon name="cil-car-alt"/></template>
          <template #append><CButton color="secondary" @click="getVehiculo()" title="Recargar"><CIcon name="cilLoop"/></CButton></template>
          <template #label>Vehículo *</template>
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
         </CCol>
        </CRow>
 
    
    
        <CRow>
        <CCol sm="">
          <CInput 
            label="No. de orden (interno) *"
            placeholder=""
            :value.sync="form.num_orden"
            type="number">
          </CInput>

          <div>
          <label :for="id">Speed-{{id}}</label>
          </div>
        </CCol>

        <CCol sm="">
          <CFormGroup wrapperClasses="input-group pt-2">
          <template #prepend-content><CIcon name="cilList"/></template>
          <template #append><CButton color="secondary" title="Recargar"><CIcon name="cilLoop"/></CButton></template>
          <template #label>Tipo de servicio </template>
          <template #input>
              <multiselect
              v-model="form.servicio"
              :options="$options.multiselectOptionsServ" 
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
        <br>
        </CRow>
        <h4 class=" text-info">Inventario de Automóvil</h4>
            
        <CRow>
        <CCol sm="4">
      <CInput 
        label="KILOMETRAJE *"
        placeholder="KILOMETRAJE"
        :value.sync="form.kilometraje" type="number">
      </CInput>
              </CCol>
              <CCol sm="4">
               <div class="fondo">
    <label for="range-2">NIVEL DE COMBUSTIBLE</label>
    <b-form-input id="range-2" v-model="form.combustible" type="range" min="0" max="10" step="0.5"></b-form-input>
    <span class="mt-2">Nivel: {{ form.combustible }}</span>
  </div>
    </CCol>
             
</CRow>
  <CRow>
  
   <CCol >
   <CCard  color="gradient-secondary">
     <CRow>
     <CCol>
    <b-form-group v-slot="{ ariaDescribedby }" size="lg">
     
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="form.selectedInstrumentos"
       
        :aria-describedby="ariaDescribedby"
        name="flavour-2" 
      >
        <b-form-checkbox value="encendedor"> Encendedor</b-form-checkbox><br>
        <b-form-checkbox value="extinguidor">Extinguidor</b-form-checkbox><br>
        <b-form-checkbox value="llanta">Llanta de Refaccion</b-form-checkbox><br>
        <b-form-checkbox value="antena">Antena</b-form-checkbox><br>
        <b-form-checkbox value="Tarjeta de circulacion" >Tarjeta de Circulación	</b-form-checkbox><br>
        <b-form-checkbox value="Tapetes">Autoestereo	</b-form-checkbox><br>
        <b-form-checkbox value="Herramienta">Herramienta	</b-form-checkbox><br>
        <b-form-checkbox value="Gato">Gato</b-form-checkbox><br>
        <b-form-checkbox value="ComprobanteV">Comprobante de Verificación	</b-form-checkbox><br>
        <b-form-checkbox value="Señales">Señales	</b-form-checkbox><br>

      </b-form-checkbox-group>
    </b-form-group>

    <CFormGroup wrapperClasses="input-group pt-2 ml-2">
                          
                          <template #label class=" text-center">  Tapetes </template>
                          <template #input>
                            <multiselect
                              v-model="form.cantTapetes"
                              :options="$options.multiselectOptions"
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
 <CCol>

 <b-form-group v-slot="{ ariaDescribedby }" size="lg">
     
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="form.selectedInstrumentos"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"    
      >
        <b-form-checkbox value="llaveManeral" >Llave Maneral</b-form-checkbox><br>
        <b-form-checkbox value="taponGas">Tapón de Gasolina</b-form-checkbox><br>
        <b-form-checkbox value="instrumentos">Instrumentos de Tablero</b-form-checkbox><br>
        <b-form-checkbox value="caratula">Caratula Estereo</b-form-checkbox><br>
        <b-form-checkbox value="cableCorriente" >Cable Pasa Corriente</b-form-checkbox><br>
        <b-form-checkbox value="birlo">Birlo de Seguridad</b-form-checkbox><br>
        <b-form-checkbox value="vestiduras">Vestiduras</b-form-checkbox><br>
        <b-form-checkbox value="tapones">Tapones y Bayonetas de Motor</b-form-checkbox><br>
        <b-form-checkbox value="botones">Botones Interiores</b-form-checkbox><br>
      </b-form-checkbox-group>
    </b-form-group>
    <br>

<CFormGroup wrapperClasses="input-group pt-2 ml-2">
                          
                          <template #label class=" text-center">  Tapones de ruedas </template>
                          <template #input>
                            <multiselect
                              v-model="form.cantTapones"
                              :options="$options.multiselectOptionsTapones"
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
    
 <CCol>

   <b-form-group v-slot="{ ariaDescribedby }" size="lg">
     
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="form.selectedInstrumentos"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"    
      >
        <b-form-checkbox value="viseras">Viseras</b-form-checkbox><br>
        <b-form-checkbox value="molduras" >Molduras</b-form-checkbox><br>
        <b-form-checkbox value="limpiadores">Limpiadores</b-form-checkbox><br>
        <b-form-checkbox value="cristales">Cristales</b-form-checkbox><br>
        <b-form-checkbox value="manijasExt">Manijas Exteriores</b-form-checkbox><br>
        <b-form-checkbox value="manijasInt" >Manijas Interiores</b-form-checkbox><br>
        <b-form-checkbox value="claxon">Bocina de Claxon	</b-form-checkbox><br>
        <b-form-checkbox value="retrovisor">Espejo Retrovisor	</b-form-checkbox><br>

      </b-form-checkbox-group>
    </b-form-group>
    <br>
    <br>
    <CFormGroup wrapperClasses="input-group pt-2 ml-2">
                          
                          <template #label class=" text-center">  Espejos Laterales </template>
                          <template #input>         
                            <multiselect
                              v-model="form.cantEspejos"
                              :options="$options.multiselectOptionsEspejos"
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
     </CRow>
    <div class="m-3">Su Automovil Tiene : <strong>{{ form.selectedInstrumentos }}</strong></div>   

  
  </CCard>

   </CCol>

  </CRow>            


<br>
<CRow>
 
    <CCol >
          <CTextarea
                label="DESCRIPCIÓN DE LA FALLA REPORTADA POR EL CLIENTE"
                placeholder=""
                rows="2"
                :value.sync="form.nota_cliente" 
              />
    </CCol>
    <CCol >
          <CTextarea
                label="OBSERVACIONES GENERALES (DIAGNÓSTICO)"
                placeholder=""
                rows="2"
                :value.sync="form.observaciones" 
              />
    </CCol>
</CRow>

    

   <CRow>
     <CCol>
     <h4 class="text-info">Imágenes del vehículo</h4>
  <br>

   
<CCol>
<div class="container">
 
      <label>
        <input type="file" id="files" ref="files" accept="image/*" multiple v-on:change="handleFilesUpload()"/>
      </label>
   

        <div v-for="(file, key) in files" >
       
          <img class="preview" v-bind:ref="'image'+parseInt( key )"/>
        </div>
<br>
      <CButton v-on:click="addFiles()"  color="secondary" shape="square" class="mr-2"> <img src="https://img.icons8.com/fluency/45/000000/camera.png"/></CButton>
      <CButton v-on:click="submitFiles()" color="secondary" shape="square"><img src="https://img.icons8.com/office/45/000000/save-close.png"/></CButton>
    
  </div>
  <br>
    <br>
      <br>

</CCol>
   </CCol>
     </CRow>
       </CCardBody>
          <CCardFooter>

   <CButton type="submit" @click="store()"  :hidden="submitted" class=" float-right" color="success">Registrar Recepcion
   </CButton> 
 
          </CCardFooter>
          
        </CCard>
    </CForm>

  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import { validationMixin } from "vuelidate"
import alert from '@/repositories/global/alert'
import { required, maxLength,   } from "vuelidate/lib/validators"

export default {
  components:{Multiselect},
  data(){
    return{
         selectedInstrumentos: [],
         cantTapetes: [],
         cantEspejos:[],
         cantTapones:[],

         id: null,
         files:[],
      
      //toma de fotos
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',

      horizontal: { label:'col-1', input:'col-4' },

      combustible: '',
      cardCollapse: true,
       
      servicio: [],
      submitted: false,
      form: this.getEmptyForm(),
      cliente: [],
      vehiculo:[],
    //alerta
      message: '',
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  } ,  



  multiselectOptions: [
    { value: "no", text: "No tiene" },
    { value: "1", text: "1" },
    { value: "2", text: "2" },
    { value: "3", text: "3" },
    { value: "4", text: "4" },
    { value: "5", text: "5" },
    { value: "6", text: "6" },
    { value: "7", text: "7" },
    {value: "8", text: "8" },
  ],
  multiselectOptionsTapones: [
    { value: "no", text: "No tiene" },
    { value: "1", text: "1" },
    { value: "2", text: "2" },
    { value: "3", text: "3" },
    { value: "4", text: "4" }
  ],
  multiselectOptionsEspejos: [
    { value: "no", text: "No tiene" },
    { value: "1", text: "1" },
    { value: "2", text: "2" },
  ],
   multiselectOptionsServ: [                                         
    { value: 'Servicio', text: 'Servicio' },
    { value: 'Garantía', text: 'Garantía' },
    { value: 'Rescate víal', text: 'Rescate víal' },
   ],
  mounted: function(){
    this.getCliente()
    this.getVehiculo()
    this.id = this._uid
   }, 
  computed: {
    tablaString() {
    return JSON.stringify(this.form, null, 4);
    },
    formString () { return JSON.stringify(this.form, null, 4) },
    isValid() { return !this.$v.form.$invalid },
    isDirty() { return this.$v.form.$anyDirty },
  },
  mixins: [validationMixin],
 validations: {
    form: {
    
    },
  },
   methods: {
      addFiles(){
        this.$refs.files.click();
      },
      submitFiles(){
        //Inicializar los datos del formulario
        let formData = new FormData();

        //Repite cualquier archivo enviado y agregue los archivos a los datos del formulario.
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }

        //Realice la solicitud a la URL POST / select-files
        axios.post( '/file-multiple-preview',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

        //Maneja la carga de archivos
        handleFilesUpload(){

        //Obtenga los archivos cargados de la entrada.
        let uploadedFiles = this.$refs.files.files;

        //Agrega el archivo cargado al array de archivos
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
        
        //Genere vistas previas de imágenes para los archivos cargados
        this.getImagePreviews();
      },

        //Obtiene la imagen de vista previa del archivo.
        getImagePreviews(){

        //Repita todos los archivos y genere una vista previa de la imagen para cada uno.
        for( let i = 0; i < this.files.length; i++ ){

          //Asegúrese de que el archivo sea un archivo de imagen
          if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {

            //Crea un nuevo objeto FileReader
            let reader = new FileReader();

            //Agregue un detector de eventos para cuando se haya cargado el archivo para actualizar el src en la vista previa del archivo.
               
            reader.addEventListener("load", function(){
              this.$refs['image'+parseInt( i )][0].src = reader.result;
            }.bind(this), false);

            /*Lea los datos del archivo a través del lector. 
            Cuando tiene cargado, escuchamos el evento propagado y configuramos la imagen src a lo que se cargó desde el lector.*/
            reader.readAsDataURL( this.files[i] );
          }
        }
      },

      goBack() { this.$router.go(-1) },
      countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
        permisos(permisos) {
        return !check.permiso(permisos)
      },
     getEmptyForm() {
      return {
        cliente: '',
        vehiculo:'',
        kilometraje:'',
        num_orden:'',
        nota_cliente:'',
        observaciones:'',
        cantTapetes:'',
        cantTapones:'',
        cantEspejos:'',
        combustible:'',
        selectedInstrumentos:[],
        cantTapones:'',
        cantEspejos:'',
        cantTapetes:'',
        servicio:'',
      }
     },
      clearForm() {
      let self = this;
      self.form.cliente = ''
      self.form.vehiculo=''
      self.form.kilometraje=''
      self.form.num_orden=''
      self.form.nota_cliente=''
      self.form.observaciones=''
      self.form.cantTapetes=''
      self.form.cantTapones=''
      self.form.cantEspejos=''
      self.form.combustible=''
      self.form.selectedInstrumentos=[]
      self.form.servicio=''
      },
       getCliente() {
      let self = this;
      self.cliente = []
      axios.post(this.$apiAdress+'/api/usuario/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
        console.log(response.data)
        console.log("bien")
        response.data.forEach(function(valor, indice, array) {
          self.cliente.push({
            value: valor.id,
            text: valor.name +"\n" + valor.apell
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
            value: valor.id,
            text: valor.plac,
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },
  /*  currentDateTime() {
      const current = new Date();
      const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
    
      const dateTime = date +' ';
      
      return dateTime;
     console.log(dateTime)
    }*/
      store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
          "Enviaras toda la información relacionada a este registro a la base de datos.",
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
    //registrar cliente
       self.form.val_ant=self.form.cliente
      self.form.cliente=self.form.cliente.value
    // registrar vehiculos
      self.form.val_ant_veh=self.form.vehiculo
      self.form.vehiculo=self.form.vehiculo.value
    //registrar tipo de servicio
      self.form.val_ant_serv=self.form.servicio
      self.form.servicio=self.form.servicio.value
    // registrar cantidad de tapetes
      self.form.val_ant_tapetes=self.form.cantTapetes
      self.form.cantTapetes=self.form.cantTapetes.value
    // registrar cantidad de tapones
      self.form.val_ant_tapones=self.form.cantTapones
      self.form.cantTapones=self.form.cantTapones.value
      // registrar cantidad de espejos
      self.form.val_ant_espejos=self.form.cantEspejos
      self.form.cantEspejos=self.form.cantEspejos.value

        axios.post(
        this.$apiAdress +"/api/recepcion/almacenar?token=" + localStorage.getItem("api_token"),
        self.form
        )
            .then(function(response) {
              alert.response200("¡Registro guardado exitosamente!", "");
              self.clearForm();
              self.submitted = false;
              console.log(response.data)
            })
            .catch(function(error) {
              self.submitted = false;
              self.form.cliente=self.form.val_ant
              self.form.vehiculo=self.form.val_ant_veh   
              self.form.servicio=self.form.val_ant_serv 
              self.form.cantTapetes=self.form.val_ant_tapetes
              self.form.cantTapones=self.form.val_ant_tapones
              self.form.cantEspejos=self.form.val_ant_espejos
          
          self.errors = alert.responseCatch(error, "Code #1009");
          alert.responseCatch(error, "Code #422");
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
   }
}
</script>
<style src="spinkit/spinkit.min.css"></style>
<style scoped>
.card-body div{
  margin: auto;
}
</style>