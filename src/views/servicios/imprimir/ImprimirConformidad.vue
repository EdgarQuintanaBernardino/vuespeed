<template>
<div class=" content-center">
     <CCard class=" col-8 center"  >
    <CCardHeader>
      <div class="float-right">  
        <a 
          href="#" 
          class="btn btn-sm btn-info ml-1" 
          onclick="javascript:window.print();"
        >
          <CIcon name="cil-print" class="mr-1"/> Imprimir
        </a>
      </div>
    </CCardHeader>
    <CCardBody>
      <CRow>
        <CCol >
<div style="width: 250px; height: 130px;  top: 50%; left: 50%;" class=" float-left">
  <CImg
    src="img/logoSpeed2.png" 
    block
    style="width: 200px; height: 150px;margin:  0%;"
  />
</div>

      </CCol>
      <CCol class=" text-right">
       
         <h4 class="text-info"> Cotización</h4> 
         <h6 class=" text-info">EL PRESTADOR DE SERVICIO: Speed Pro {{}}</h6 > 
         <h5 class=" text-danger">EL CONSUMIDOR: {{}} </h5> 
      </CCol>
      
      </CRow><hr>
      <CRow>
         
      <CCol>
      
        <div class=" text-left"> 
          <h3>Nombre: {{}}</h3>
          <h5>Teléfono: {{}}</h5>
          <h5>Correo: {{}}</h5>
          <br>
          <h5>Mecanico a cargo: ___________________</h5>
        </div> 
      </CCol>
 
      <CCol>
        <div class=" text-right">
          <h3> Tipo de Cotización {{}}</h3>
          <h5>marca y modelo {{}}</h5>
          <h5>placas{{}}</h5>
          <h5>Kilometraje</h5>
          </div>
        
      </CCol>
      </CRow>
      <CRow>
        <CCol>
          <div class="text-left">

         
          <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio unitario</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Reparación <br> Servicio Mayor 4 Cilindros Sintético Servicio Mayor 4 Cilindros</td>
      <td>$1,845.70</td>
      <td> $1,845.70</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Mano de Obra: Servicio Mayor</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Mano de Obra: Revisión Banda de Accesorios</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Mano de Obra: Revisión de frenos</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Mano de Obra: Revisión Gral. Body y Accesorios</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Mano de Obra: Revisión Banda de Tiempo</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th scope="row"></th>
      <td>Pieza: 5 Aceite Sinttico 5W30</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th scope="row"></th>
      <td>Pieza: 1 Filtro de Aceite</td>
      <td></td>
      <td></td>
    </tr>
       <tr>
      <th scope="row"></th>
      <td>Pieza: 1 Filtro de Aire</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th scope="row"></th>
      <td>Pieza: 1 Filtro de Combustible</td>
      <td></td>
      <td></td>
    </tr>
     <tr>
      <th scope="row"></th>
      <td>Pieza: 4 Buja</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td ></td>
        <td>Subtotal</td>
      <td>$1,845.70</td>
    </tr>
     <tr>
      <th scope="row"></th>
      <td ></td>
        <td>IVA</td>
      <td>$295.31</td>
    </tr>
     <tr>
      <th scope="row"></th>
      <td ></td>
        <td>Total</td>
      <td>$2,141.01</td>
    </tr>
  </tbody>
</table>
<div>
    <CRow>
    <CCol >
        <a>firma del cliente</a>
        <br><br>
        ___________________
        <br>
        <a>nombre{{}}</a>
    </CCol>

    <CCol>
          <a>firma del taller</a>
        <br><br>
        ___________________
        <br>
          <a>Speed Pro{}}</a>
    </CCol>
    </CRow>
</div>
 </div>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
  </div>
</template>
<script>

export default {
    name: 'Invoice',
    
    data(){
      return{

      }
    }
}
</script>