<template>
    <CCardHeader>
  <h2 class="m-2  align-center" >Servicio </h2>  
  <h5 class="m-2  align-center" >Venta total: $ </h5> 
  <h5 class="m-2  align-center" >Pagos: $</h5> 
  <h5 class="m-2  align-center" >Gastos: $ </h5> 
  <h5 class="m-2  align-center" >Costos (Manos de obra y refacciones): $ </h5> 
  <h5 class="m-2  align-center" >Utilidad con IVA: $</h5> 
   <br>
  <h5 class="m-2  align-center" >Restante por pagar: $</h5> 

  <CCardBody>
            <CTabs >
              <CTab title="Pagos y Gastos" active>

                <CRow>
                <CCol>
                   <h3 class="m-1 text-info align-center" >Pagos </h3>  
                
                   <CInput class=" m-2 h5" label="Monto" description="Restante por pagar: $"><template #prepend-content><CIcon name="cilDollar"/></template>
                   </CInput>

             <CRow>
                 <CCol>
                    <CFormGroup class=" m-2" wrapperClasses="input-group pt-2 ">
                    <template #label class=" text h5">Método de Pago</template>
                    <template #input>
                    <multiselect
                      v-model="form.metodo"
                      :options="$options.MetodoPago"
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
                <CFormGroup class=" m-2" wrapperClasses="input-group pt-2 ">
                    <template #label class=" text h5">Cuenta de Depósito</template>
                    <template #input>
                    <multiselect
                      v-model="form.deposito"
                      :options="$options.CuentaDeposito"
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
           
             
               <CInput class=" m-2" label="Concepto"></CInput>
               <CInput class=" m-2" label="Referencia"></CInput>
                <br>


               <div>
                <b-form-checkbox
                class="m-2"
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                >
               NOTIFICAR AL CLIENTE POR EMAIL
                </b-form-checkbox>
            </div>
            <br>

            <CCol>
                <CButton class="float-right" color="success" shape="pill">
                    Registrar Pago
                </CButton>
            </CCol>

      
</CCol>
<br>
<div class="vertical-line" style="height: 500px;" />


                

                <CCol>
                        <CCol>
                   <h3 class="m-1 text-info align-center" >Gastos </h3>  
                
                   <CInput class=" m-2 h5" label="Monto" ><template #prepend-content><CIcon name="cilDollar"/></template>
                   </CInput>
                   <br>

             <CRow>
                 <CCol>
                    <CFormGroup class=" m-2" wrapperClasses="input-group pt-2 ">
                    <template #label class=" text h5">Método de Pago</template>
                    <template #input>
                    <multiselect
                      v-model="form.metodoG"
                      :options="$options.MetodoGasto"
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
                <CFormGroup class=" m-2" wrapperClasses="input-group pt-2 ">
                    <template #label class=" text h5">Cuenta de Retiro</template>
                    <template #input>
                    <multiselect
                      v-model="form.depositoG"
                      :options="$options.CuentaGasto"
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
           
             
               <CInput class=" m-2" label="Concepto"></CInput>
               <CInput class=" m-2" label="Referencia"></CInput>
                <br>

            <CCol>
                <CButton class="float-right" color="success" shape="pill">
                    Registrar Gasto
                </CButton>
            </CCol>


      
</CCol>
                </CCol>
                </CRow>
              </CTab>
              <CTab title="Costos refacciones y Mano de Obra" >
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </CTab>
            </CTabs>
          </CCardBody>
    </CCardHeader>
   
</template>

<script>

import "vue-multiselect/dist/vue-multiselect.min.css";
import Multiselect from 'vue-multiselect'

export default {
    components:{
        Multiselect,
    },
    data(){
        return{
            form: this.getEmptyForm(),
            status: 'not_accepted'

        }
    },
   MetodoPago: [
    { value: "Efectivo", text: "Efectivo" },
    { value: "Cheque", text: "Cheque" },
    { value: "Tarjeta", text: "Tarjeta" },
    { value: "Transferencia", text: "Transferencia" },
  ],
  CuentaDeposito: [
    { value: "Cash on Hand", text: "Cash on Hand" },
    { value: "Caja Chica", text: "Caja Chica" },
    { value: "Cheques Ingresos", text: "Cheques Ingresos" },
    { value: "TDC Compras", text: "TDC Compras" },
    { value: "Cheques Transferencias", text: "Cheques Transferencias" },
    { value: "Ingresos Refaccionaria", text: "Ingresos Refaccionarias" },
    { value: "Depósitos Banco", text: "Depósitos Banco" },
  ],
  MetodoGasto: [
    { value: "Efectivo", text: "Efectivo" },
    { value: "Cheque", text: "Cheque" },
    { value: "Tarjeta", text: "Tarjeta" },
    { value: "Transferencia", text: "Transferencia" },
  ],
  CuentaGasto: [
    { value: "Cash on Hand", text: "Cash on Hand" },
    { value: "Caja Chica", text: "Caja Chica" },
    { value: "Cheques Ingresos", text: "Cheques Ingresos" },
    { value: "TDC Compras", text: "TDC Compras" },
    { value: "Cheques Transferencias", text: "Cheques Transferencias" },
    { value: "Ingresos Refaccionaria", text: "Ingresos Refaccionarias" },
    { value: "Depósitos Banco", text: "Depósitos Banco" },
  ],
  methods:{
       getEmptyForm() {
      return {
        metodo: "",
        deposito: "",
        metodoG: "",
        depositoG: "",
      }
      },
       clearForm() {
      let self = this;
      self.form.metodo = "";
      self.form.deposito=""
      self.form.metodoG = "";
      self.form.depositoG=""
       }
  }

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
div.vertical-line{ width: 1px; /* Line width */ background-color: rgb(223, 223, 223); /* Line color */ 
height: 100%; /* Override in-line if you want specific height. */ float: left; /* Causes the line to float to left of content. You can instead use position:absolute or display:inline-block if this fits better with your design */ }

</style>