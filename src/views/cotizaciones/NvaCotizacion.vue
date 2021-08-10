<template>
    <div>
          <CCol lg="6">
                  <CCard :class="`bg-${submitted ? 'info' : 'secondary' }`">
            <pre>{{formString}}</pre>
            <pre>{{tablaString}}</pre>
          </CCard>
                </CCol>
    <h5 class="text-info">Nueva Cotización</h5>
        <CCard sm="" >
          <CCardHeader >
            <CRow>
      <!--Nombre del cliente -->
      <CCol sm="">
       <CFormGroup wrapperClasses="input-group pt-2">
       <template #prepend-content><CIcon name="cilUser"/></template>
       <template #append>
        <CButton color="secondary" @click="getCliente()" title="Recargar"><CIcon name="cilLoop"/></CButton>
        <CButton size="sm" @click="newCliente()" color="info"><CIcon name="cil-plus"/>Nuevo</CButton>     
       </template>
       <template #label>Nombre del Cliente</template>
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
  <!--Vehiculo -->
    <CCol sm="">
         <CFormGroup wrapperClasses="input-group pt-2">
       <template #prepend-content><CIcon name="cilUser"/></template>
       <template #append>
         <CButton color="secondary" @click="getVehiculo()" title="Recargar"><CIcon name="cilLoop"/></CButton>
         <CButton size="sm"   @click="nvoVehiculo = true"  color="info"><CIcon name="cil-plus"/>Nuevo</CButton>
         <CModal
      title="Nuevo vehículo"
      color="info"
      size="xl"
      :show.sync="nvoVehiculo" 
      >
      <NvoVehiculo/>
    <!--inicia el formulario para agregar un nuevo vehiculo-->
     
    <template #footer>
        <CButton @click="nvoVehiculo = false" color="light">Cancelar</CButton>
        
      </template>
     </CModal >
         </template>
       <template #label>Vehiculo (Opcional)</template>
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
      <br>
        </CRow>

          <CRow>
             <CCol sm="">
                         <CInput
                         label="Correo del Cliente"
                :value.sync="form.correo"
       
          placeholder="Escribe el correo para enviar cotizacion"
        />
             </CCol>
      <!--Tipo del Orden -->
    <CCol sm="">
         <CFormGroup wrapperClasses="input-group pt-2">
       <template #prepend-content><CIcon name="cilUser"/></template>
       <template #append><CButton color="secondary" title="Recargar"><CIcon name="cilLoop"/></CButton></template>
       <template #label>Tipo de Orden</template>
       <template #input>
          <multiselect
           v-model="form.tip_orden"
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
      </CRow>
          </CCardHeader>
        
        </CCard>

        <div>
  
      <CCol sm="" >
        <CCard v-if="nvareparacion == true">
  
          <CCardBody>
            <h3 class="text-dark ml-3">Nombre Reparación</h3>
           
               <CInput
                :value.sync="form.nom"
         color="danger"
          placeholder="Escribe el nombre de la reparacion"
        />
        
<CButton
        @click="collapse = !collapse"
        color="info"
        style="float:center;"
        class="mb-2 mr-2 ml-3"
        
      >
       <CIcon name="cilSettings"/> 
         
      Nueva Refacción
     
</CButton> 

<CCollapse :show="collapse">
<FormCotizacion  @add-refaccion="agregarrefaccion" />

</CCollapse>

<CButton
        @click="collapseM = !collapseM"
        color="info"
        style="float:center;"
        class="mb-2 mr-2 ml-2"
      >
      <CIcon name="cilPlus"/> 
      Nueva Mano de obra
     
</CButton> 
<br>

<CCollapse :show="collapseM">
  <br> 
<FormCotizacionMano  @add-refaccion="agregarrefaccion" class="ml-3"/>

</CCollapse>
 <ListaCotizaciones :refacciones="refacciones"
  @delete-refaccion="eliminarrefaccion"
   @actualizar-cotizaciom="actualizarCotizacion"
 />

 <br>
  <br>
 

</CCardBody>
<CCardFooter>

  <CRow >
  <CCol  sm="" >
           <CInput  label="Total"  v-model="suma" style=" float: right;" prepend="$">
               
           </CInput>
          </CCol>
 </CRow>
 <CRow >
            <CCol sm="">
      <CInput style=" float: right;"
        min="0"
    label="Descuento"
        value="value0" @input="numberfour = $event.target.value"  
        placeholder="Descuento"
        v-model="form.desc" prepend="%"
      >
   
      </CInput>
    </CCol>
 </CRow>
<br>
 <CRow>
     <CCol sm="3">
     <CLink size="sm" class="text-info" disabled >Agregar reparación al catálogo</CLink>
 </CCol>
  <CCol sm="9" >
        
     <button type="submit"  class="btn btn-info w-75 m-3" ><CIcon name="cilSave"/> Guardar</button>
 </CCol>
 </CRow>

</CCardFooter>


         
       
         
       
        </CCard>
      </CCol>
      <CRow class="ml-1">
    
        <CCard class="w-25 m-3 ml-2" v-if="nvareparacion == true">

          <CCardHeader class="text-light" color="gradient-dark">
     <CRow>
       <CCol>
            <h2>{{form.nom}}</h2>
       </CCol>
       <CCol>
      
           <CIcon name="cilPencil" style="float:right;" type="submit" class="m-2" />
           
           
           <CIcon name="cilTrash" style="float:right;" type="submit" class="m-2"/>
         
       </CCol>
     </CRow>
          </CCardHeader>

          <CCardBody>
            <h4>Precio: ${{iva}}</h4>
          </CCardBody>
          </CCard>

        <CCard class="w-40 text-center m-3"  >

          <CCardHeader  color="gradient-secondary">

      
          <CLink class="text-dark" @click="addcatalogo = true"> <h5> <CIcon name="cil-magnifying-glass"  type="submit" size="lg"/> Buscar reparacion en el catalogo</h5> </CLink>

          </CCardHeader>
          <CCardBody>
            <CLink class="text-dark" value="nvareparacion" ><h5 style="bold" @click="nvareparacion = true"> <CIcon name="cil-plus"  type="submit" size="lg"/> Agregar nueva reparación</h5></CLink>
          </CCardBody>
          </CCard>
    

      </CRow>
      <CModal
      title="Elige las Reparaciones"
      color="dark"
      size="xl"
      :show.sync="addcatalogo"
    >
    <CatalogoRegistro/>
    </CModal>
    <CRow class="">
      <CCol sm="" >
        <CCard>
    
          <CCardFooter>
           <CRow>
        <CCol>
          <div class="">
        <button type="submit" class="btn btn-light w-100"  @click="goBack"><CIcon name="cilArrowThickToLeft"/> Cancelar</button>
          </div>
        </CCol>
        <CCol>
        <div class="">
     <button type="submit" @click="store()" class="btn btn-info w-75 m-3" ><CIcon name="cilSave"/> Guardar</button>
        </div>
        </CCol>
      </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="5">
        <CCard bodyWrapper color="gradient-dark" >
          <h4 class="text-white"> Total sin Iva: $ {{suma}} </h4>
          <h5 class="text-white">Total con Descuento: ${{descuento}}</h5>
           <h4 class="text-white">Total con Iva: $ {{iva}}</h4>
           <br>
            <h3 class="text-white">Gran Total: {{iva}} </h3>

        </CCard>
      </CCol>
    </CRow>
    
  </div>
  </div>
</template>

<script>
  //Importaciones 
import axios from 'axios'
import NvoVehiculo from '../vehiculos/NvoVehiculo' 
import NvoCliente from '../cliente/NvoCliente.vue' 
import { required, length} from "vuelidate/lib/validators"
import alert from "@/repositories/global/alert";
import Swal from "sweetalert2";
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import ListaCotizaciones from './ListaCotizaciones.vue'
import FormCotizacion from './FormCotizacion.vue'
import FormCotizacionMano from './FormCotizacionMano.vue'
import CatalogoRegistro from './CatalogosRegistro/CatalogoRegistro.vue'


  export default {
     name: 'nvacotizacion',
    props: ['value0'],
     components:{
     Multiselect,
     NvoVehiculo,
          ListaCotizaciones,
          FormCotizacion,
          FormCotizacionMano,
          CatalogoRegistro
     }, 
   data(){
    return{ 
      submitted: false,
    addcatalogo:false,
     nvareparacion:false,
    nvoVehiculo: false,
    status: 'not_accepted',
    form: this.getEmptyForm(),
    cliente:[],
 
    options: ['IVA'],
    vehiculo:[],
    tip_orden:[],

    refacciones:[],
    collapse: false,
    collapseM: false,
    innerCollapse: false,
    editando: null,

   
    totaldescuento:''
    }
   },
    mounted: function(){
    this.getCliente()
    this.getVehiculo()
   },
 
  multicliente:[],
  multiorden:[{ value: 'Servicio', text: 'Servicio' },
  { value: 'Garantia', text: 'Garantia' },{ value: 'Rescate Vial', text: 'Rescate Vial' }],
  validations: {
    form: {
     /* cliente: {required}, 
      orden:{required},
      vehiculo:{required}*/
      
    },
  },
  computed:{
    sumasn(){

    let SumaTotal = 0;
  for (let i = 0; i < this.refacciones.length; i++) {
      SumaTotal = SumaTotal + this.refacciones[i].subtotal;
      console.log(this.SumaTotal)
  }
return SumaTotal;
    },

 suma(){
  let SumaTotal = 0;
  let desc=0.05;
  let sumaiva=0;
  let totaltodo=0;
  for (let i = 0; i < this.refacciones.length; i++) {
       
SumaTotal = SumaTotal +this.refacciones[i].subtotal;
sumaiva=SumaTotal * desc;
totaltodo=SumaTotal + sumaiva;

      console.log(totaltodo)
  }

return totaltodo;
  },

descuento(){

 let descuento=this.sumasn * 0.05;
 let totaldesc= this.suma- descuento;

 return totaldesc;
},

iva(){
   let iva= this.descuento * 0.16;
   this.totaliva= iva + this.descuento;
   return this.totaliva;
},






    formString() {
      return JSON.stringify(this.form,null, 4);
    },
      tablaString() {
      return JSON.stringify(this.refacciones, null, 4);
    }

  

   },
    methods:{
      operacion() {
            this.refaccion.mensaje3 = parseFloat(this.numberone) *
                parseFloat(this.numbertwo);
                this.totalIva=parseFloat(this.refaccion.mensaje3) * 0.16
                this.refaccion.grantotal=parseFloat(this.refaccion.mensaje3) + parseFloat(this.totalIva)
        },

     agregarrefaccion(refaccion) {
    let id = 0;
    if (this.refacciones.length > 0) {
      id = this.refacciones[this.refacciones.length - 1].id + 1;
    }
    
    this.refacciones= [...this.refacciones, { ...refaccion, id}];
    console.log(this.refacciones)
  },

 
    goBack() {
      this.$router.go(-1);
    },
    newVehiculo(){
    this.$router.push({path: '/cotizacion'});
      },  
          newCliente(){
    this.$router.push({path: '/RegCliente'});
      }, 
     /* agregarDirectorio() {
      let id = 1;
      if (this.directorios.length > 0) {
        id = this.directorios[this.directorios.length - 1].id + 1;
      }
      this.directorios = [...this.directorios, { ...directorio, id }];
      //  this.directorios=[this.directorios, directorio];
    },*/
    
   getEmptyForm() {
    return {
      cliente: '',
      tip_orden:'',
      vehiculo:'',
      nom:'',
      refacciones:'',
      correo:''
    

      }
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
            text: valor.name + "\n" + valor.apell
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
            text: valor.plac
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },

    eliminarrefaccion(id) {
      this.refacciones = this.refacciones.filter(
        refaccion => refaccion.id !== id
      );
    },
    actualizarCotizacion(id, refaccionActualizada) {
  this.refacciones = this.refacciones.map(refaccion =>
    refaccion.id === id ? refaccionActualizada : refaccion
  )
},

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
      self.submitted = true
      self.errors = []

      self.form.val_ant_cliente=self.form.cliente
      self.form.cliente=self.form.cliente.text

      self.form.val_ant_vehiculo=self.form.vehiculo
      self.form.vehiculo=self.form.vehiculo.text

      self.form.val_ant_orden=self.form.tip_orden
      self.form.tip_orden=self.form.tip_orden.text


  
   axios.post(this.$apiAdress+'/api/cotizacion/almacenar?token='+localStorage.getItem("api_token"), self.form).then(function (response) {
             
            alert.response200("¡Registro guardado exitosamente!", "");
         //   self.clearForm()
            self.submitted = false; 

          self.form.cliente=self.form.val_ant_cliente
          self.form.vehiculo=self.form.val_ant_vehiculo
          self.form.tip_orden=self.form.val_ant_orden
      console.log(response.data)
         
      }).catch(function(error) {
                self.submitted = false;  
          
         // self.form.correo=self.form.val_ant_correo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
          self.errors = alert.responseCatch(error, 'Code #1009');
            });
        }
      });
    }


    
    }
    
     
  }
     </script>
     <style src="vue-multiselect/dist/vue-multiselect.min.css"></style> 