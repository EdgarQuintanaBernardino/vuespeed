<template>
  <CRow>
    <CCol>
      <CCard style="max-width: 80rem;">
        <CRow class="inline">
        <CCol sm="" class="m-4">
          <h5 class="ml-3"> <CIcon 
        name="cil-settings" size="lg"
       />
      Servicio del registro:
   
      <span class="text-info"  v-text="$route.params.id" />
    </h5>
    <h5 class="ml-3"><CIcon name="cil-user" size="lg"/> Cliente: <span class="text-info"> {{form.name}} {{form.apell}} </span></h5>
    <h5 class="ml-3"><CIcon name="cil-car-alt" size="lg"/> Vehículo: <span class="text-info"> {{form.marc}} {{form.mod}} {{form.plac}} </span> </h5>
        </CCol>

<CCol class="m-4">
<CRow style="float:right;">
    <CButton style="float:right;" class="ml-2" color="info" v-c-tooltip.hover="{
            content: `Enviar seguimiento de servicio al cliente`
            }">
      <CIcon name="cil-paper-plane"/>
    </CButton>

    <CDropdown style="float:right;" class="ml-2"
                toggler-text="imprimir" 
                color="ligth"
              >
                <CDropdownItem @click="contratorecepcion()"> Recepción</CDropdownItem>
                <CDropdownItem @click="contratoadhesion()"> Contrato de adhesión </CDropdownItem>
                <CDropdownItem @click="contratocotizacion()"> Cotización</CDropdownItem>
                <CDropdownItem @click="contratoconformidad()"> Conformidad del cliente</CDropdownItem>
              </CDropdown>

        <CDropdown  style="float:right;" class="ml-2"
                toggler-text="Opciones" 
                color="ligth"
              >
                <CDropdownItem @click="ImprimirFactura()">Facturar</CDropdownItem>
                <CDropdownItem> <CIcon name="cil-x-circle"/> Cancelar servicio</CDropdownItem>
              </CDropdown>

              <CButton  class="btn btn-pill ml-2">
       <CIcon name="cil-arrow-thick-from-right"/>
       </CButton>
</CRow>
</CCol>


</CRow>

<CRow > 
<CCol >
    <br>
      <CButton style="float:right;" class="btn btn-pill btn-warning ml-2 " size="sm" @click=" pagosygastos = true" >
       <CIcon name="cil-dollar"/> PAGO/GASTO
       </CButton>
       <CModal 
      size="xl"
      
      :show.sync="pagosygastos"
    > 
    <PagosGastos/>
      <template #footer>
        <CButton  @click="pagosygastos= false" ><CIcon name="cilArrowThickToLeft"/> Cancelar</CButton>
      </template>
    </CModal>

       <CButton  style="float:right;" class="btn btn-pill btn-info ml-2 " size="sm" @click="nvocita = true">
       <CIcon name="cil-calendar"/> CREAR PRÓXIMO SERVICIO
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
                ><CIcon name="cilArrowThickToLeft" /> Cancelar</CButton>
              <CButton color="success"> Guardar</CButton>
            </template>
          </CModal>

       <CButton  style="float:right;" class="btn btn-pill btn-secondary ml-2 " size="sm" @click="OrdenCliente = true">
       <CIcon name="cil-paper-plane"/> ENVIAR ORDEN AL CLIENTE
       </CButton>
       <CModal
       size="lg"
      title="Enviar Orden de Servicio"
      :show.sync="OrdenCliente"
    >
      <CCol>
       <h6>Cliente:{{form.name}}</h6>
        <h6>Celular:{{form.tel_mov}}</h6>
        <h6>Correo electrónico: {{form.email}} </h6>
        <br>
        
         <CTextarea
                label="Mensaje"
               value="Puedes dar seguimiento a tu servicio automotriz en: https://app.speed.mx/#/seguimiento/pMWfCi4"
                rows="2"
              />
      </CCol>
       <CCol>
        <h5>El mensaje será enviado al número: {{form.tel_mov}}</h5>
      </CCol>
    </CModal>
</CCol>
</CRow>

<div>
  <CCol>
    <br>
    <hr>
    <br>
    
<h6> Click en los estados para cambiar la orden manualmente </h6>

<div class="container">
  <div class="progress">
  <div class="percent"></div>
</div>
  
  <CCol class=" sm-col-4">   
    <div>
      <div class="steps" @click="Bprogreso()" >
  <h5>Cotizado</h5><div class="step" id="1" ></div>
  <h5>Recibido</h5> <div class="step" id="2"></div>
  <h5>Procesando</h5> <div class="step" id="3"></div>
  <h5>Terminado</h5> <div class="step" id="4"></div>
  <h5>Entregado</h5> <div class="step" id="5"></div>
  </div>
    </div>
  
  </CCol>
</div>
</CCol>
</div>

<CCol>
  <CCardBody>
            <CTabs>
              <CTab title="Recepción">
                 <CCol sm="">
                 <br>
                 <h5 class="text-info">No se ha registrado la recepción del vehículo</h5>
                 </CCol>
                 <CCol sm="">
                <CButton  @click="recepcion = true"  class="mr-3">
                <CIcon name="cil-pencil"/> LLENAR HOJA DE RECEPCIÓN
                </CButton>

                <CModal 
                size="lg"
                title="Recepción del vehículo"
                color="dark"
                :show.sync="recepcion"
                > 
               <Recepcion/>
               <template #footer>
                  <CButton  @click="recepcion= false" ><CIcon name="cilArrowThickToLeft"/> Cancelar</CButton>
                </template>
              </CModal>
                 </CCol>
              </CTab>

              <CTab title="Cotización">
                
                    <h4>trt</h4>
                
              </CTab>


              <CTab title="Orden de trabajo">
              <OrdendeTrabajo/>
              </CTab>
              <CTab title="Mensajes (0)" >
                <Mensajes/>
              </CTab>


              <CTab title="Entrega">
                <br>
                <h4 class="text-info">Encuesta de servicio</h4>
                <CCol>
                <hr>
               
              <CButton shape='pill'  @click="nvaencuesta = true"  class="mr-3" color="info">
              Llenar encuesta
              <CIcon name="cil-pencil"/> 
              </CButton>
       <CModal 
      size="lg"
      title="Llenar encuesta"
      color="dark"
      :show.sync="nvaencuesta"
    > 
    <Encuesta/>
     <template #footer>
        <CButton  @click="nvaencuesta= false" ><CIcon name="cilArrowThickToLeft"/> Cancelar</CButton>
  
      </template>
    </CModal>
                <h5 class="text-info">la encuesta no ha sido contestada</h5>
                <h6>Enlace de encuesta http://jsjsjsjsjs</h6 >
                 </CCol>
               
              </CTab>
            </CTabs>
          </CCardBody>
</CCol>
 </CCard>
 </CCol>
 <CCol sm="3">
<CCard >
  <div class="ml-3">
    <br>
<h5 class="">Servicio: S1e5d</h5>
 <br>
<h5>No. Orden: STC-5 </h5>
<br>
<h5>Recepción: 12/03/2021 </h5>
<br>
<h5>Autorizado:
<CButton color="secondary" class="" style="float:center;" size="sm">
  Cancelar Autorización
</CButton></h5>
<br>
<h5>Tipo de Orden:Garantía</h5>
<br>
</div>
</CCard>

<CCard >
  <CCardHeader > 

<h5 class="ml-1">Técnico Asignado
<CButton
        shape="pill"
        @click="collapse = !collapse"
        color="success"
        style="float:right;"
       size="sm"
     
      > <CIcon name="cil-plus"/> 
</CButton> </h5>

  </CCardHeader>

  <CCardBody>
<CCollapse :show="collapse">
<CFormGroup wrapperClasses="input-group pt-2">
                         
                   <template #append><CButton color="secondary" @click="getConductor()" title="Recargar"><CIcon name="cilLoop"/></CButton>
                   <CButton color="secondary"  @click="nvocolaborador = true" title="Nuevo"><CIcon name="cilPlus"/></CButton>
                   </template>
                            
                          <template #label>Nombre de técnico </template>
                          <template #input>
                            <multiselect
                            
                              v-model="form.nom_tecnico"
                              :options="nom_tecnico"
                              :group-select="true"
                              tag-placeholder="Sin coincidencias"
                              placeholder="Buscar . . ."
                              select-label="Seleccionar"
                              selected-label="Seleccionado"
                              deselect-label="Quitar selección"
                              label="textc"
                              track-by="valuec"
                              :taggable="true"
                              class="form-control border-0 p-0 m-0"
                              selectionType="tags"
                              :selection="true"
                            />
                          </template>
                        </CFormGroup> <br>

</CCollapse>
  </CCardBody>
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

</CCard>

<CCard class=" inline">

<h5 class="m-3" >Diagnóstico

  <CButton 
      shape='pill'  
      @click="nvodiagnostico = true" 
       color="success"
       size="sm"
         style="float:right;"
       > 
      <CIcon name="cil-plus"/> 
  </CButton></h5>
    <CModal 
      size="lg"
      title="Diagnóstico"
      color="dark"
      :show.sync="nvodiagnostico"
    > 
    <Diagnostico/>
     <template #footer>
     <CButton  @click="nvodiagnostico= false" ><CIcon name="cilArrowThickToLeft"/> Cancelar</CButton>
     <CButton color="success" class=" ml-2"><CIcon name="cil-save"/> Guardar</CButton>
    </template>
    </CModal>

</CCard>

<CCard>
<CCardHeader>
  

<h5>Recordatorios
<CButton
        shape="pill"
        @click="recordatorios = !recordatorios"
        color="success"
        style="float:right;"
         size="sm"
      > <CIcon name="cil-plus"/> 
</CButton> </h5>


</CCardHeader>
  <CCardBody>
  
<CCollapse :show="recordatorios">
        <div class="panel-body">
          <div class="form-group">
            <input class="form-control" placeholder="Recordatorio" v-model="recordatorio.nombre">
          </div>
          <div class="form-group">
            <input type="date" class="form-control" placeholder="Fecha de recordatorio" v-model="recordatorio.frecordatorio">
          </div>
<!-- Esta parte le hara fanta on button -->
          <CButton class="btn btn-secondary m-2"  v-on:click="addrecordatorio"> Guardar</CButton>
        </div></CCollapse>
        



    <!-- Mostrar los contatos -->
    <div v-for="(recordatorio, index) in agenda" class="list-group-item text-dark">

          <h6 class="list-group-item-heading text-dark">
            <CIcon name="cilUser" size="sm"/>
            Nombre:{{ recordatorio.nombre }}
          </h6>
      
          <h6 class="text-dark">
            <CIcon name="cil-Calendar" size="sm"/>
            Fecha:{{ recordatorio.frecordatorio }}
          </h6>
          <h6>Resuelto:<CSwitch class=" float-right"  color="success" variant="3d" v-bind="labelIcon" :checked.sync="resuelta"/></h6>
           <br>
          <button class="btn btn-xs btn-danger" v-on:click="borrarrecordatorio(index)"><CIcon name="cilTrash"/>Borrar</button>
  
      
    </div>


  </CCardBody>
</CCard>

<CCard>
<CCol>
<h5 class=" text-success text-center m-1">Autorizado</h5>
<br>

    
</CCol>
</CCard>
</CCol>

</CRow>

</template>
 

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Multiselect from 'vue-multiselect'
import alert from '@/repositories/global/alert'
import Recepcion from '../vehiculos/Recepcion.vue';
import NvoColaborador from '../detallesempresa/NvoColaborador'
import Diagnostico from './Diagnostico.vue';
import Vue from 'vue';
import VueSignaturePad from 'vue-signature-pad';
import PagosGastos from './PagosGastos.vue'
import OrdendeTrabajo from './OrdendeTrabajo.vue'
import NvoCita from "../citas/NvoCita";
import Encuesta from "./Encuesta.vue"
import Repositories from "../cotizaciones/Repositories";
import Mensajes from './Mensajes.vue'


Vue.use(VueSignaturePad);
export default {
  components: { Recepcion, Diagnostico, Multiselect, NvoColaborador, PagosGastos, OrdendeTrabajo, NvoCita,Encuesta, Mensajes },
    
    data(){
      return{
        nvaencuesta: false,
        nvocita: false,
        OrdenCliente: false,

        nvocolaborador: false,
        collapse: false,
        collapseR: false,
        innerCollapse: false,
        nvodiagnostico: false,
        recepcion: false,
        encuesta: false,
        pagosygastos: false,

        nom_tecnico:[],
        form: this.getEmptyForm(),

         form:[],
         showForm:true,

        recordatorios:false,
        resuelta:false,
        labelIcon: {
        labelOn: '\u2713',
        labelOff: '\u2715'
      },
          recordatorio: {id: '', nombre: '',  frecordatorio: '' },
    agenda: [],
    contador: 0,
      }

    },
      
      computed: {
    formString () { return JSON.stringify(this.form, null, 4) },
  },
    methods:{
      cargarAgenda: function() {
      var agendaDatos = [
        
   
      ];

      //Rellenar la agenda con los datos, de una vez
      this.agenda = agendaDatos;
      this.contador=agendaDatos.length;
      // ponerlos uno a uno
      // for (var i in agenda) {
      //   this.agenda.push(agendaDatos[i]);
      // }
    },

    // Adds an event to the existing events array
    addrecordatorio: function() {
      if(this.recordatorio.nombre) {
        this.contador++;
        this.recordatorio.id=this.contador;
        this.agenda.push(this.recordatorio);
        this.recordatorio = { nombre: '',  frecordatorio: ''};
      }
    },

    borrarrecordatorio: function(index) {

      
      if(confirm("¿Estás seguro de que quieres borrar este recordatorio?")) {
        this.agenda.splice(index, 1);        
      }
    },

      async getRegistro() {
      let self = this;
      self.form = await Repositories.getRegistro(self);
      self.showForm = false;
     // self.form= JSON.parse(JSON.stringify(self.form));
      
    },
      ImprimirFactura(){
    this.$router.push({path: '/imprimirfactura'});
  },

      Bprogreso(){
          Swal.fire({
        icon: "info",
        title: "Cambiar Estado",
        html:
          "¿Estas seguro que quieres cambiar el estado?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {

      let els = document.getElementsByClassName("step");
      let steps = [];
      Array.prototype.forEach.call(els, (e) => {
      steps.push(e);
      e.addEventListener("click", (x) => {
      progress(x.target.id);
  });
});

 function progress(stepNum) {
   let p = stepNum * 16.8;
 document.getElementsByClassName("percent")[0].style.width = `${p}%`;
   steps.forEach((e) => {
    if (e.id === stepNum) {
      e.classList.add("selected");
      e.classList.remove("completed");
    }
    if (e.id < stepNum) {
      e.classList.add("completed");
    }
    if (e.id > stepNum) {
      e.classList.remove("selected", "completed");
    }
  });
} 
       }
      });
      },

      getEmptyForm() {
      return {
        nom_tecnico: '',
      }
      },
      clearForm() {
      let self = this;
      self.form.nom_tecnico = ''
    },
    //Registrar nueva cita
  store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
        "Enviaras toda la información relacionada a este registro a la base de datos."+"\n"+"<br/> Fecha:"+ this.form.fecha +"\n"+"<br/> Tipo de servicio:"+ this.form.nombre +"\n"+"<br/> Hora:"+this.form.hora
         +"\n"+"<br/> Cliente:"+this.form.cliente.text +"\n"+"<br/> Vehículo:"+this.form.vehiculo.valuev +"\n"+"<br/> Recolección:"+this.form.opc_domi +"\n"+"<br/> Calle:"+this.form.calle +"\n"+"<br/> Nombre del técnico :"+this.form.nom_tecnico.textc
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

      self.form.val_ant_chof = self.form.nom_tecnico;
      self.form.nom_tecnico = self.form.nom_tecnico.valuec;

          axios.post(this.$apiAdress+'/api/cita/almacenar?token='+localStorage.getItem("api_token"), self.form
      )
            .then(function (response) {
            alert.response200("¡Registro guardado exitosamente!", "");
            self.clearForm()
            self.submitted = false;
      }) 
            .catch(function(error) {
                self.submitted = false;
          self.form.cliente=self.form.val_ant
          self.form.vehiculo=self.form.val_ant_veh    
          self.form.nom_tecnico=self.form.val_ant_chof                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          self.errors = alert.responseCatch(error, 'Code #1009');
            });
        }
      });
    },
    getConductor() {
      let self = this;
      self.nom_tecnico = []
      axios.post(this.$apiAdress+'/api/colaborador/getAll?token=' + localStorage.getItem("api_token"), {     
      })
      .then(function (response) {
        console.log(response.data)
        response.data.forEach(function(valor, indice, array) {
          self.nom_tecnico.push({
            valuec: valor.id,
            textc: valor.name + "\n" + valor.apell
          });
        });
      }).catch(function (error) {
        alert.responseCatch(error, 'Code #1005')  
      });
    },
    contratorecepcion() {
      this.$router.push({ path: "/imprimirrecepcion" });
    },
     contratoadhesion() {
      this.$router.push({ path: "/imprimircontradoad" });
    },
     contratocotizacion() {
      this.$router.push({ path: "/imprimircotizacion" });
    },
     contratoconformidad() {
      this.$router.push({ path: "/imprimirconformidad" });
    },

    },
    mounted: function(){
      this.getRegistro();
      this.getConductor();
      this.cargarAgenda();
      },
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.steps {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 650px;
}
.step {
  width: 50px;
  height: 50px;
  background: #fff;
  border: 2px solid #ACACA6;
  border-radius: 60%;
  transition: background 1s;
}
.step.selected {
  border: 3px solid #4B81BD;   
}
.step.completed {
  border: 1px solid #4B81BD;
  background: #4B81BD; 
}
.progress {
  position: absolute;
  width: 100%;
  height: 50%;
  border-bottom: 2px solid #ACACA6;
  z-index: -1;
}
.percent {
  position: absolute;
  width: 60;
  height: 100%;
  border-bottom: 4px solid #4B81BD;
  z-index: 2;
  transition: width 2s;
}
</style>