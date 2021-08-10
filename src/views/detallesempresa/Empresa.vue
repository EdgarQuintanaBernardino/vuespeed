<template>
  <CCard>

<CCardBody>
            <CTabs add-tab-classes="mt-1">
              <CTab>
                <template slot="title">
                  <CIcon name="cil-calculator"/> {{tabs[0]}}
                </template>
                <CCardHeader>
           <div class="text-info">
         <h5>Detalles de la empresa </h5> 
           </div>
        </CCardHeader>
        <CCardBody>
       
          <ul class="list-group list-group-accent">
            <li class="list-group-item list-group-item-accent-dark">Nombre</li>       
            <li class="list-group-item list-group-item-accent-secondary">Nombre de usuario</li> 
            <li class="list-group-item list-group-item-accent-dark">Correo Electrónico</li> 
            <li class="list-group-item list-group-item-accent-secondary">Nombre de Taller</li> 
            <li class="list-group-item list-group-item-accent-dark">Teléfono</li> 
          </ul>

          <hr>
          <ul class="list-group list-group-accent">
            <li class="list-group-item list-group-item-accent-secondary">Calle y Número</li>       
            <li class="list-group-item list-group-item-accent-dark">Colonia/Localidad</li> 
            <li class="list-group-item list-group-item-accent-secondary">Delegación</li>
            <li class="list-group-item list-group-item-accent-dark">Estado</li>  
            <li class="list-group-item list-group-item-accent-secondary">C.P</li>
          </ul>
      
            <div>
            <div class="d-grid gap-2 col-6 mx-auto">  
    <CButton
      @click="Editarconfig = true"
      color="outline-dark"
    ><CIcon name="cil-pencil"/>
      Editar
    </CButton>
            </div>
    <CModal
      title="Editar Información"
      color="dark"
      :show.sync="Editarconfig"
    >
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Usuario</label>
      <input type="email" class="form-control" id="inputEmail4" disabled>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    
  </div>
  <div class="form-group">
    <label>Nombre completo</label>
    <input type="text" class="form-control" id="inputAddress">
  </div>
  
  <div class="form-group">
    <label>Mi taller, principalmente, es de: </label>
 </div>

    <div class="form-check form-check-inline">
   <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">Automóviles</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">Motocicletas</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
  <label class="form-check-label" for="inlineRadio3">Vehículos de carga</label>
</div>
 
</form>
    </CModal>
  </div>
             

        </CCardBody>
        
        <c-card-footer> 
        <p>Actualice su contraseña</p>
        <div>
    <CButton
      @click="warningModal = true"
      color="danger"
    >
      CAMBIAR CONTRASEÑA
    </CButton>
    <CModal
      title="Cambio de contraseña"
      color="danger"
      :show.sync="warningModal"
    >
     
  <div>
    <CRow>
      <CCol sm="12">
        <CInput
          type="password"
          label="Contraseña actual"
          placeholder="Contraseña actual"
        />
      </CCol> 
    </CRow>
     <CRow>
      <CCol sm="12">
        <CInput
          type="password"
          label="Nueva contraseña"
          placeholder="Nueva contraseña"
        />
      </CCol>
    </CRow>
     <CRow>
      <CCol sm="12">
        <CInput
          type="password"
          label="Confirme contraseña"
          placeholder="Confirme contraseña"
        />
      </CCol>
    </CRow>
      </div>
    </CModal>
  </div>

        </c-card-footer>                            
              </CTab>
              <CTab active>
                <template slot="title">
                  <CIcon name="cil-basket"/> {{tabs[1]}}
                </template>
              
              <TablaRoles/>

              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> {{tabs[2]}}
                </template>
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> {{tabs[3]}}
                </template>
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> {{tabs[4]}}
                </template>
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> {{tabs[5]}}
                </template>
                <CCardHeader>
                 

                    <CCol>
                      <div class="text-info">
                      <h6>Habilitar/Desabilitar notificaciones</h6>

                    <template v-for="(mode, index) in modes">
                      <div
                        class="d-flex justify-content-between my-4"
                        :key="index"
                      >
                        <CSwitch
                          :key="key"
                          :color="color"
                          v-bind="mode"
                          v-for="(color, key) in colors"
                        >
                        </CSwitch>
                      </div>
                    </template>


         <h5>Enviar Notificaciones </h5> 
          <h6 class="text-dark">Configure por que medio electrónico desea enviar las alertas de citas y/o recordatorios</h6>
          </div>
          <div>
     <div>
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="items"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-checkbox-group>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
  <!--  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
  </div>


<br>
   <h5 class="text-danger">Enviar recordatorios </h5> 
   
  
  <b-form-group label="seleccione fecha de anticipación para recordatorios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="selected1"
        :options="options2"
        :aria-describedby="ariaDescribedby"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>

                    </CCol>
        </CCardHeader>
              </CTab>
            </CTabs>
          </CCardBody>
  
  </CCard>
  
</template>

<script>
import TablaRoles from './TablaRoles.vue'

export default {
  components: { TablaRoles },
 data(){
   return{
     
     selected1: '',
       options2: [
          { text: '1 día antes', value: '1d' },
          { text: '3 días antes', value: '2d' },
          { text: '7 días antes ', value: '3d'},
        ],

     selected: [],
        options: [
          { items: 'A', name: 'Correo Electrónico' },
          { items: 'B', name: 'WhatsApp' },
        ],
     warningModal: false,
     Editarconfig:false,
      tabs: [
        'Información',
        'Tipo de usuario',
        'Notificaciones',
        'Facturación',
        'Perfil público',
        'Sistema'
      ],
      activeTab: 5,

      modes: [{ shape: "pill" }],
      colors: ["dark"],

    }
  },
  
 }
</script>