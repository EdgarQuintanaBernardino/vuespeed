<template>

<CRow class=" text-center" >
 
    <CCol >
   <CRow>
       <CCol>
    <h5  class=" align-content-center" >No tienes una orden de servicio</h5>
       </CCol>
   </CRow>

        <CRow class=" text-center"> 
            <CCol>
    <h5 class="text-center m-2">Crea una cotización primero</h5>
    <CButton shape="pill" size="lg" color="info" @click="cotizacion()">
        Crear Cotización  <CIcon name="cil-arrow-right"/> 
    </CButton>

            </CCol>
          
    </CRow>
    </CCol>



</CRow>







    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    cotizacion() {
      this.$router.push({ path: "/nvacotizacion" });
    },
    }
    
}
</script>