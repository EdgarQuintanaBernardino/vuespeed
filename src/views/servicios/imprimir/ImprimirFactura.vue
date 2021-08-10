<template>
     <CCard>
    <CCardHeader>
      Factura <strong>#90-98792</strong>
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
      <CRow class="mb-4">
        
        <CCol sm="5" class=" ml-5">
          <h4 class="mb-3">GUADARAMA MEZA JOSE GABRIEL</h4>
          <div><strong>RFC: GUMG510324662</strong></div>
          <div>TLAHUAC NUM 4160, COL. SANTA MARIA TOMATLAN, IZTAPALAPA CIUDAD DE MÉXICO, MÉXICO, C.P. 09870, TEL. 56951051</div>
          
        </CCol>
        <CCol  sm="5">
          <h5 class="mb-3">Factura</h5>
          <div>Serie y Folio <strong>#90-98792</strong></div>
          <div>Lugar y Fecha de Emisión<strong> Matriz 06/05/2021  04:09:20 PM</strong></div>
          <div>Certificado CSD</div>
          <div>Certificado SAT</div>
          <div>Folio SAT</div>
          <div>Fecha de Certificación SAT <strong> 06/05/2021</strong></div>
          <div>Lugar de Expedición <strong> 09870</strong></div>
          <div>RFC de proveedor de Certificación<strong> LSO1306189R5</strong></div>
          <div>Tipo de Comprobante<strong> I-INGRESO</strong></div>
          <div>Moneda<strong> MXN</strong></div>
        </CCol>
      </CRow>
      <hr>
      <div class="table-responsive-sm">
          <div class=" text-center">  <div ><strong> RECEPTOR</strong></div> </div>
        
           <div><strong> RFC</strong> TSA931004EB0</div>
            <div><strong> NOMBRE</strong> TECNOLOGÍA Y SERVICIOS DE AGUA, S.A DE C.V</div>
             <div><strong> DIRECCIÓN</strong>TOREO</div>
             <div><strong> USO DEL CFDI</strong> G03-Gastos en general </div>
             <br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="center">#</th>
              <th>Clave de producto o servicio</th>
              <th>Cantidad</th>
              <th class="center">Clave de unidad</th>
              <th class="right">Unidad de Medida</th>
              <th class="right">Descripción</th>
              <th class="right">Precio</th>
              <th class="right">Descuento</th>
              <th class="right">Tasa o cuota</th>
              <th class="right">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="center">1</td>
              <td class="left">78181500</td>
              <td class="left">1.0</td>
              <td class="center">E48</td>
              <td class="right">Servicio</td>
              <td class="right">Paquete preventivo #3</td>
              <td class="center">4,061.00</td>
              <td class="center"></td>
              <td class="center">16.00%</td>
              <td class="center">649.76</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <CRow>
        <CCol  sm="5">
        <div> <strong>FORMA DE PAGO: 99 - Por definir</strong></div>
        <div> <strong>MÉTODO DE PAGO: PPD - Pago en parcialidades o diferido</strong></div>
        <hr>
        <div class=" text-center text-success">  <div ><strong> CANTIDAD CON LETRA</strong></div> </div>
        <div class=" text-center text-info">  <div ><strong> CUATRO MIL SETECIENTOS DIEZ PESOS 76/100 M.N.</strong></div> </div>
        <div>  <div ><strong> OBSERVACIONES:</strong></div> </div>
        <div>  <div ><strong> CHEVROLET S-10 2016 PL:L78ANF KM: 86118 ORDEN DE MANTENIMIENTO VEHICULAR NÚMERO: T-0789-21</strong></div> </div>
        </CCol>
        <CCol lg="4" sm="5" class="ml-auto">
          <table class="table table-clear">
            <tbody>
              <tr>
                <td class="left"><strong>Subtotal</strong></td>
                <td class="right">$4,061.00</td>
              </tr>
              <tr>
                <td class="left"><strong>Descuento (0%)</strong></td>
                <td class="right">$0</td>
              </tr>
              <tr>
                <td class="left"><strong>IVA (16%)</strong></td>
                <td class="right">$679,76</td>
              </tr>
              <tr>
                <td class="left"><strong>Total</strong></td>
                <td class="right"><strong>$4,7103.76</strong></td>
              </tr>
            </tbody>
          </table>
          <a href="#" class="btn btn-success">
            <CIcon name="cil-dollar"/> ....
          </a>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</template>
<script>
export default {
    name: 'Invoice',
}
</script>