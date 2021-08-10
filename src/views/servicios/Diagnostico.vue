<template>
    <CForm @submit.prevent="store()" method="POST" novalidate>
<CCard>
  
  <h2 class="m-2 text-info align-center" >Diagnóstico </h2>   
  <hr>   
  <CCardHeader @click="BalatasCollapse = !BalatasCollapse" class="btn text-left"> 
    <CRow>
    <h5 class=" ml-3">BALATAS</h5> <br>
    </CRow>
  </CCardHeader>

    <CCollapse :show="BalatasCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;"> DELANTERAS</label>    
              <CLink class=" border-top-0 ml-3 text-dark" style="font-weight: bold;" shape="pill" value="EditBalatDelant" @click="EditBalatDelant = !EditBalatDelant"> <CIcon name="cil-pencil" />
              Notas
              </CLink>
              <br>
             <label class="switch" role="button">
                <input type="checkbox" :value="active" v-model="form.delanteras" @change="update"/>
                <div
                  :class="{
                    circle: true,
                    'circle-on': form.delanteras,
                    'circle-off': !form.delanteras
                  }">
                
                </div>
            </label>
                <CTextarea  rows="1" class=" h6" v-if="EditBalatDelant == true" label="Observaciones adicionales" :value.sync="form.nota_bal_del">
                </CTextarea>
          </CCol>

          <CCol>
            <label style="font-weight: bold;">TRASERAS</label>
             <CLink class=" border-top-0 ml-3 text-dark" style="font-weight: bold;" shape="pill" value="EditBalatTras" @click="EditBalatTras = !EditBalatTras"> <CIcon name="cil-pencil" />
             Notas
             </CLink><br>
           <label class="switch" role="button">
            <input  type="checkbox" :value="active1" v-model="form.traseras" @change="update1"/>
              <div
                :class="{
                  circle: true,
                  'circle-on': form.traseras,
                  'circle-off': !form.traseras
                }">
              
              </div>
          </label>
             <CTextarea  rows="1" class=" h6" v-if="EditBalatTras == true" label="Observaciones adicionales" :value.sync="form.nota_bal_tras">
             </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="CarroceriaCollapse = !CarroceriaCollapse" class="btn text-left"> 
    <h5>CARROCERÍA</h5>
  </CCardHeader>

    <CCollapse :show="CarroceriaCollapse">
      <CCardBody>
        <CRow>
          <br>
          <CCol>
            <label style="font-weight: bold;" >CALABERAS/CUARTOS/FAROS</label>
            <br>
            <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditCalaberas" @click="EditCalaberas = !EditCalaberas"> <CIcon name="cil-pencil" />
            Notas
            </CLink> 
            <div class=" float-right"> 
            <label class="switch" role="button">
            <input type="checkbox" :value="active2" v-model="form.calaberas" @change="update2"/>
              <div
                :class="{
                  circle: true,
                  'circle-on': form.calaberas,
                  'circle-off': !form.calaberas
                }">
              
              </div>
            </label>
          </div>
              <br>
              <br>
              <CTextarea  rows="1" class=" h6" v-if="EditCalaberas == true" label="Observaciones adicionales" :value.sync="form.nota_calaberas">
              </CTextarea>
              <br>
            <label style="font-weight: bold;">CRISTALES/ ESPEJOS</label>
              <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditCristales" @click="EditCristales = !EditCristales"> <CIcon name="cil-pencil" />
              Notas
              </CLink>
              <div class=" float-right">
                <label class="switch" role="button">
                <input type="checkbox" :value="active3" v-model="form.cristales" @change="update3"/>
                  <div
                    :class="{
                      circle: true,
                      'circle-on': form.cristales,
                      'circle-off': !form.cristales
                    }">
                  
                  </div>
                </label>
              </div>
              
              <br>
              <br>
              <CTextarea  rows="1" class=" h6" v-if="EditCristales == true" label="Observaciones adicionales" :value.sync="form.nota_cristales">
              </CTextarea>
              
              <br>

            <label style="font-weight: bold;">PUERTA/ COFRE/ CAJUELA</label>
            <br>
            <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditPuertas" @click="EditPuertas = !EditPuertas"> <CIcon name="cil-pencil" />
            Notas
            </CLink>
            <div class=" float-right">
                <label class="switch" role="button">
                <input type="checkbox" :value="active4" v-model="form.puertas" @change="update4"/>
                  <div
                    :class="{
                      circle: true,
                      'circle-on': form.puertas,
                      'circle-off': !form.puertas
                    }">
                  
                  </div>
                </label>
              </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditPuertas == true" label="Observaciones adicionales" :value.sync="form.nota_puertas">
            </CTextarea>
            <br>

             <label style="font-weight: bold;">SALPICADERAS/ FACIAS</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditFacias" @click="EditFacias = !EditFacias">  <CIcon name="cil-pencil" />
                Notas
                </CLink>
              <div class=" float-right">
                <label class="switch" role="button">
                <input type="checkbox" :value="active5" v-model="form.salpicaderas" @change="update5"/>
                  <div
                    :class="{
                      circle: true,
                      'circle-on': form.salpicaderas,
                      'circle-off': !form.salpicaderas
                    }">
                  
                  </div>
                </label>
              </div>
              <br>
              <br>
              <CTextarea  rows="1" class=" h6" v-if="EditFacias == true" label="Observaciones adicionales" :value.sync="form.nota_facias">
              </CTextarea>
          </CCol>
          <br>

          <CCol>
            <label style="font-weight: bold;">ASIENTOS/TABLERO/CONSOLA</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAsientos" @click="EditAsientos = !EditAsientos">  <CIcon name="cil-pencil" />
                Notas
               </CLink>
                <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active6" v-model="form.asientos" @change="update6"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.asientos,
                      'circle-off': !form.asientos
                    }">
                     </div>
                 </label>
                </div>
             <br>
            <br>
                <CTextarea  rows="1" class=" h6" v-if="EditAsientos == true" label="Observaciones adicionales" :value.sync="form.nota_asientos">
                </CTextarea>
              <br>

            <label style="font-weight: bold;">DIRECCIONALES</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditDireccionales" @click="EditDireccionales = !EditDireccionales">  <CIcon name="cil-pencil" />
                Notas
               </CLink>
               <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active7" v-model="form.direccionales" @change="update7"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.direccionales,
                      'circle-off': !form.direccionales
                    }">
                     </div>
                 </label>
                </div>
            <br>
            <br>
              <CTextarea  rows="1" class=" h6" v-if="EditDireccionales == true" label="Observaciones adicionales" :value.sync="form.nota_direccionales">
              </CTextarea>
              <br>

            <label style="font-weight: bold;">RADIO</label>
            <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditRadio" @click="EditRadio = !EditRadio">  <CIcon name="cil-pencil" />
                Notas
               </CLink>
                <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active8" v-model="form.radio" @change="update8"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.radio,
                      'circle-off': !form.radio
                    }">
                     </div>
                 </label>
                </div>
             <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditRadio == true" label="Observaciones adicionales" :value.sync="form.nota_radio">
            </CTextarea><br>

            <label style="font-weight: bold;">PARTES BAJAS/ DAÑOS</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditPbajas" @click="EditPbajas = !EditPbajas">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
              <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active9" v-model="form.partes_bajas" @change="update9"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.partes_bajas,
                      'circle-off': !form.partes_bajas
                    }">
                   </div>
                 </label>
              </div>
            <br>
            <br>    
             <CTextarea  rows="1" class=" h6" v-if="EditPbajas == true" label="Observaciones adicionales" :value.sync="form.nota_partes_bajas">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="DireccionCollapse = !DireccionCollapse" class="btn text-left"> 
    <h5>DIRECCIÓN</h5>
  </CCardHeader>
        
    <CCollapse :show="DireccionCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;">CAJA DE DIRECCIÓN/ FUGAS</label>
               <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditCDirec" @click="EditCDirec = !EditCDirec">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
              <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active10" v-model="form.caja_direc" @change="update10"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.caja_direc,
                      'circle-off': !form.caja_direc
                    }">
                   </div>
                 </label>
              </div>
            <br>
            <br>
           
            <CTextarea  rows="1" class=" h6" v-if="EditCDirec == true" label="Observaciones adicionales" :value.sync="form.nota_caja_dir">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">BOMBA DE DIRECCIÓN/ FUGAS</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBDirec" @click="EditBDirec = !EditBDirec">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
              <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active11" v-model="form.bomba_direc" @change="update11"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.bomba_direc,
                      'circle-off': !form.bomba_direc
                    }">
                   </div>
                 </label>
              </div>
            <br>
            <br>
             <CTextarea  rows="1" class=" h6" v-if="EditBDirec == true" label="Observaciones adicionales" :value.sync="form.nota_bomba_dir">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">BRAZOS/ VARILLAS/ TERMINALES</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBrazos" @click="EditBrazos = !EditBrazos">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
               <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active12" v-model="form.brazos" @change="update12"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.brazos,
                      'circle-off': !form.brazos
                    }">
                   </div>
                 </label>
              </div>
            <br>
            <br>
             <CTextarea  rows="1" class=" h6" v-if="EditBrazos == true" label="Observaciones adicionales" :value.sync="form.nota_brazos">
            </CTextarea>
          </CCol>

          <CCol>
            <label style="font-weight: bold;">GUARDAPOLVOS/ FLECHAS</label>
             <br>
             <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditFlechas" @click="EditFlechas = !EditFlechas">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
              <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active13" v-model="form.guardapv_flecha" @change="update13"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.guardapv_flecha,
                      'circle-off': !form.guardapv_flecha
                    }">
                   </div>
                 </label>
              </div>       
            <br>
            <br>
            
             <CTextarea  rows="1" class=" h6" v-if="EditFlechas == true" label="Observaciones adicionales" :value.sync="form.nota_guardapv">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">MANGUERAS/ FUGAS</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditMangueras" @click="EditMangueras = !EditMangueras">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
              <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active14" v-model="form.mangueras_fugas" @change="update14"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.mangueras_fugas,
                      'circle-off': !form.mangueras_fugas
                    }">
                   </div>
                 </label>
              </div>
            <br>
            <br>
           
            <CTextarea  rows="1" class=" h6" v-if="EditMangueras == true" label="Observaciones adicionales" :value.sync="form.nota_mangueras_fugas">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="FrenosCollapse = !FrenosCollapse" class="btn text-left"> 
    <h5>FRENOS</h5>
  </CCardHeader>
        
    <CCollapse :show="FrenosCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;">BOMBA/BOSTER/FUGAS</label>    
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBomba" @click="EditBomba = !EditBomba">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
              <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active15" v-model="form.bomba_boster" @change="update15"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.bomba_boster, 
                      'circle-off': !form.bomba_boster
                    }">
                   </div>
                 </label>
              </div>
            <br>
              <CTextarea  rows="1" class=" h6" v-if="EditBomba == true" label="Observaciones adicionales" :value.sync="form.nota_bomba_boster">
            </CTextarea>
          </CCol>

          <CCol>
            <label style="font-weight: bold;">MANGUERAS/TURBOS/FUGAS</label>  
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditTurbo" @click="EditTurbo = !EditTurbo">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
              <div class=" float-right">
                 <label class="switch" role="button">
                  <input type="checkbox" :value="active16" v-model="form.mangueras_turbo" @change="update16"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.mangueras_turbo,
                      'circle-off': !form.mangueras_turbo
                    }">
                   </div>
                 </label>
              </div>
            <br>
              <CTextarea  rows="1" class=" h6" v-if="EditTurbo == true" label="Observaciones adicionales" :value.sync="form.nota_mangueras_turbos">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="LlantasCollapse = !LlantasCollapse" class="btn text-left"> 
    <h5>LLANTAS</h5>
  </CCardHeader>
        
    <CCollapse :show="LlantasCollapse">
      <CCardBody>
        <CRow>
          
          <CCol>
            <label style="font-weight: bold;"> DELANTERA IZQUIERDA</label> <br>
        
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditDelIzq" @click="EditDelIzq = !EditDelIzq">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
           
            <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active17" v-model="form.llanta_del_izq" @change="update17"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.llanta_del_izq,
                      'circle-off': !form.llanta_del_izq
                    }">
                   </div>
                 </label>
            </div>
             
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditDelIzq == true" label="Observaciones adicionales" :value.sync="form.nota_llanta_del_izq">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">DELANTRERA DERECHA</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditDelDer" @click="EditDelDer = !EditDelDer">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active18" v-model="form.llanta_del_der" @change="update18"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.llanta_del_der,
                      'circle-off': !form.llanta_del_der
                    }">
                   </div>
                 </label>
            </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditDelDer == true" label="Observaciones adicionales" :value.sync="form.nota_llanta_del_der">
            </CTextarea>
          </CCol>

          <CCol>    
            <label style="font-weight: bold;">TRASERA IZQUIERDA</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditTrasIzq" @click="EditTrasIzq = !EditTrasIzq">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
           <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active19" v-model="form.llanta_tras_izq" @change="update19"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.llanta_tras_izq,
                      'circle-off': !form.llanta_tras_izq
                    }">
                   </div>
                 </label>
            </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditTrasIzq == true" label="Observaciones adicionales" :value.sync="form.nota_llanta_tras_izq">
            </CTextarea>
            <br>
            <label style="font-weight: bold;">TRASERA DERECHA</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditTrasDer" @click="EditTrasDer = !EditTrasDer">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active20" v-model="form.llanta_tras_der" @change="update20"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.llanta_tras_der,
                      'circle-off': !form.llanta_tras_der
                    }">
                   </div>
                 </label>
             </div>
            <br>
            <br>
            
            <CTextarea  rows="1" class=" h6" v-if="EditTrasDer == true" label="Observaciones adicionales" :value.sync="form.nota_llanta_tras_der">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="LucesCollapse = !LucesCollapse" class="btn text-left"> 
    <h5>LUCES</h5>
  </CCardHeader>
    <CCollapse :show="LucesCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;">CUARTOS</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditCuartos" @click="EditCuartos = !EditCuartos">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
               <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active21" v-model="form.cuartos" @change="update21"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.cuartos,
                      'circle-off': !form.cuartos
                    }">
                   </div>
                 </label>
            </div>
            <br>
            <br>   
            <CTextarea  rows="1" class=" h6" v-if="EditCuartos == true" label="Observaciones adicionales" :value.sync="form.nota_cuartos">
            </CTextarea>

            <label style="font-weight: bold;">FAROS BAJA/ ALTA</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBajas" @click="EditBajas = !EditBajas">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active22" v-model="form.faros_alta_baja" @change="update22"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.faros_alta_baja,
                      'circle-off': !form.faros_alta_baja
                    }">
                   </div>
              </label>
            </div>
            <br>
            <br>
             <CTextarea  rows="1" class=" h6" v-if="EditBajas == true" label="Observaciones adicionales" :value.sync="form.nota_faros">
            </CTextarea>

         
            <label style="font-weight: bold;">FAROS NIEBLA</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditNiebla" @click="EditNiebla = !EditNiebla">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
            <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active23" v-model="form.faros_niebla" @change="update23"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.faros_niebla,
                      'circle-off': !form.faros_niebla
                    }">
                   </div>
              </label>
            </div>
            <br>
             <CTextarea  rows="1" class=" h6" v-if="EditNiebla == true" label="Observaciones adicionales" :value.sync="form.nota_faros_niebla">
            </CTextarea>
          </CCol>

          <CCol>
            <label style="font-weight: bold;">INTERMITENTES/ DIRECCIONALES</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditInterm" @click="EditInterm = !EditInterm">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
            <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active24" v-model="form.intermitentes" @change="update24"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.intermitentes,
                      'circle-off': !form.intermitentes
                    }">
                   </div>
              </label>
            </div>
            <br>
            <br>      
             <CTextarea  rows="1" class=" h6" v-if="EditInterm == true" label="Observaciones adicionales" :value.sync="form.nota_intermitentes">
            </CTextarea>

            <label style="font-weight: bold;">LUZ TECHO/ LUZ GUANTERA</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditLuzTecho" @click="EditLuzTecho = !EditLuzTecho">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active25" v-model="form.luz_techo" @change="update25"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.luz_techo,
                      'circle-off': !form.luz_techo
                    }">
                   </div>
              </label>
            </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditLuzTecho == true" label="Observaciones adicionales" :value.sync="form.nota_luz_techo">
            </CTextarea>
            <label style="font-weight: bold;">ALTO/ REVERSA</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditStop" @click="EditStop = !EditStop">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active26" v-model="form.alto_rev" @change="update26"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.alto_rev,
                      'circle-off': !form.alto_rev
                    }">
                   </div>
              </label>
             </div>
              <br>
            <br>
             <CTextarea  rows="1" class=" h6" v-if="EditStop == true" label="Observaciones adicionales" :value.sync="form.nota_stop">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="MotorCollapse = !MotorCollapse" class="btn text-left"> 
    <h5>MOTOR</h5>
  </CCardHeader>
    <CCollapse :show="MotorCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;"> CABLES/BUJIAS</label>
                <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditCables" @click="EditCables = !EditCables">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active27" v-model="form.cables_bujias" @change="update27"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.cables_bujias,
                      'circle-off': !form.cables_bujias
                    }">
                   </div>
              </label>
             </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditCables == true" label="Observaciones adicionales" :value.sync="form.nota_cables">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">MANGUERAS/ESTADO/FUGAS</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditMangMotor" @click="EditMangMotor = !EditMangMotor">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
              <label class="switch" role="button">
                  <input type="checkbox" :value="active28" v-model="form.mangueras_estado" @change="update28"/>
                   <div
                    :class="{
                      circle: true,
                      'circle-on': form.mangueras_estado,
                      'circle-off': !form.mangueras_estado
                    }">
                   </div>
              </label>
             </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditMangMotor == true" label="Observaciones adicionales" :value.sync="form.nota_mangueras_estado">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">BANDAS</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBandas" @click="EditBandas = !EditBandas">  <CIcon name="cil-pencil" />
               Notas
               </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active29" v-model="form.bandas_motor" @change="update29"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.bandas_motor,
                          'circle-off': !form.bandas_motor
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            
            <CTextarea  rows="1" class=" h6" v-if="EditBandas == true" label="Observaciones adicionales" :value.sync="form.nota_bandas">
            </CTextarea>
          </CCol>

          <CCol>       
            
            <label style="font-weight: bold;">FUGAS DE AIRE</label>
              <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditFugaAire" @click="EditFugaAire = !EditFugaAire">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active30" v-model="form.fugas_aire" @change="update30"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.fugas_aire,
                          'circle-off': !form.fugas_aire
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditFugaAire == true" label="Observaciones adicionales" :value.sync="form.nota_fugas_aire">
            </CTextarea>


            <br>
            <label style="font-weight: bold;">ALINEACIÓN DE MOTOR</label>
             <br>
               <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAlineacionM" @click="EditAlineacionM = !EditAlineacionM">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active31" v-model="form.alin_motor" @change="update31"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.alin_motor,
                          'circle-off': !form.alin_motor
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>    
            <CTextarea  rows="1" class=" h6" v-if="EditAlineacionM == true" label="Observaciones adicionales" :value.sync="form.nota_alin_motor">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="NivelCollapse = !NivelCollapse" class="btn text-left"> 
    <h5>NIVELES</h5>
  </CCardHeader>
        
    <CCollapse :show="NivelCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;"> ACEITE DE MOTOR</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAceitMotor" @click="EditAceitMotor = !EditAceitMotor">  <CIcon name="cil-pencil" />
              Notas
              </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active32" v-model="form.aceit_motor" @change="update32"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.aceit_motor,
                          'circle-off': !form.aceit_motor
                        }">
                      </div>
                  </label>
                </div>
              <br>
              <br>
              <CTextarea  rows="1" class=" h6" v-if="EditAceitMotor == true" label="Observaciones adicionales" :value.sync="form.nota_aceit_motor">
              </CTextarea>

            <br>
            <label style="font-weight: bold;">ACEITE DE DIRECCIÓN HIDRÁULICA</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAceitDir" @click="EditAceitDir = !EditAceitDir">  <CIcon name="cil-pencil" />
              Notas
              </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active33" v-model="form.aceit_dir_h" @change="update33"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.aceit_dir_h,
                          'circle-off': !form.aceit_dir_h
                        }">
                      </div>
                  </label>
                </div>
              <br>
              <br>
              <CTextarea  rows="1" class=" h6" v-if="EditAceitDir == true" label="Observaciones adicionales" :value.sync="form.nota_aceit_dir_h">
              </CTextarea>

              <label style="font-weight: bold;">ACEITE DE TRANSMISIÓN</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAceitTrans" @click="EditAceitTrans = !EditAceitTrans">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active34" v-model="form.aceit_trans" @change="update34"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.aceit_trans,
                          'circle-off': !form.aceit_trans
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditAceitTrans == true" label="Observaciones adicionales" :value.sync="form.nota_aceit_trans">
            </CTextarea>
          </CCol>

          <CCol>
            
            <label style="font-weight: bold;">LÍQUIDO REFRIGERANTE</label>
           <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAceitRefri" @click="EditAceitRefri = !EditAceitRefri">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active35" v-model="form.liq_refrigerante" @change="update35"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.liq_refrigerante,
                          'circle-off': !form.liq_refrigerante
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
             <CTextarea  rows="1" class=" h6" v-if="EditAceitRefri == true" label="Observaciones adicionales" :value.sync="form.nota_liq_ref">
            </CTextarea>

             <label style="font-weight: bold;">LÍQUIDO DE FRENOS</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAceitFrenos" @click="EditAceitFrenos = !EditAceitFrenos">  <CIcon name="cil-pencil" />
              Notas
              </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active36" v-model="form.liq_frenos" @change="update36"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.liq_frenos,
                          'circle-off': !form.liq_frenos
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditAceitFrenos == true" label="Observaciones adicionales" :value.sync="form.nota_liq_frenos">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">LÍQUIDO LIMPIAPARABRISAS</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditLiqParab" @click="EditLiqParab = !EditLiqParab">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active37" v-model="form.liq_limpiaparabrisas" @change="update37"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.liq_limpiaparabrisas,
                          'circle-off': !form.liq_limpiaparabrisas
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>   
            <CTextarea  rows="1" class=" h6" v-if="EditLiqParab == true" label="Observaciones adicionales" :value.sync="form.nota_liq_limpiaparabrisas">
            </CTextarea>
          </CCol>

        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="SistemaECollapse = !SistemaECollapse" class="btn text-left"> 
    <h5>SISTEMA ELÉCTRICO A/A</h5>
  </CCardHeader>
    <CCollapse :show="SistemaECollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;">INDICADORES DE ABORDO</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditIndAb" @click="EditIndAb = !EditIndAb">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active38" v-model="form.ind_abordo" @change="update38"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.ind_abordo,
                          'circle-off': !form.ind_abordo
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditIndAb == true" label="Observaciones adicionales" :value.sync="form.nota_ind_abor">
            </CTextarea>
             
            <br>
            <label style="font-weight: bold;">CLAXÓN</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditClaxon" @click="EditClaxon = !EditClaxon">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active39" v-model="form.claxon" @change="update39"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.claxon,
                          'circle-off': !form.claxon
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditClaxon == true" label="Observaciones adicionales" :value.sync="form.nota_claxon">
            </CTextarea>
            <br>

            <label style="font-weight: bold;">SISTEMA LIMPIAPARABRISAS</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditSisLimpia" @click="EditSisLimpia = !EditSisLimpia">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active40" v-model="form.sis_limpiaparabrisas" @change="update40"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.sis_limpiaparabrisas,
                          'circle-off': !form.sis_limpiaparabrisas
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditSisLimpia == true" label="Observaciones adicionales" :value.sync="form.nota_sis_limpiaparabrisas">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">VENTILACIÓN/AIRE ACONDICIONADO</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditVentilacion" @click="EditVentilacion = !EditVentilacion">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active41" v-model="form.ventilacion" @change="update41"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.ventilacion,
                          'circle-off': !form.ventilacion
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditVentilacion == true" label="Observaciones adicionales" :value.sync="form.nota_ventilacion">
            </CTextarea>
          </CCol>

          <CCol>    
            <label style="font-weight: bold;">FUNCIONAMIENTO COMPRESOR A/A</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditCompresor" @click="EditCompresor = !EditCompresor">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active42" v-model="form.func_compresor" @change="update42"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.func_compresor,
                          'circle-off': !form.func_compresor
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditCompresor == true" label="Observaciones adicionales" :value.sync="form.nota_compresor">
            </CTextarea>

             <br>
            <label style="font-weight: bold;">FUGAS EN SISTEMAS A/A</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditFugasAA" @click="EditFugasAA = !EditFugasAA">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active43" v-model="form.fugas_sist_aa" @change="update43"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.fugas_sist_aa,
                          'circle-off': !form.fugas_sist_aa
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditFugasAA == true" label="Observaciones adicionales" :value.sync="form.nota_fugas_aa">
            </CTextarea> 
            <br>
               <label style="font-weight: bold;">FILTRO DE POLEN/CABINA</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditFPolen" @click="EditFPolen = !EditFPolen">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active44" v-model="form.filtro_polen" @change="update44"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.filtro_polen,
                          'circle-off': !form.filtro_polen
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditFPolen == true" label="Observaciones adicionales" :value.sync="form.nota_filtro_polen">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">BATERIA/MANTENIMIENTO</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBateria" @click="EditBateria = !EditBateria">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active45" v-model="form.bateria" @change="update45"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.bateria,
                          'circle-off': !form.bateria
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
              <CTextarea  rows="1" class=" h6" v-if="EditBateria == true" label="Observaciones adicionales" :value.sync="form.nota_bateria">
            </CTextarea>      
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="SuspencionDCollapse = !SuspencionDCollapse" class="btn text-left"> 
    <h5>SUSPENCIÓN DELANTERA</h5>
  </CCardHeader>
        
    <CCollapse :show="SuspencionDCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;"> RÓTULAS Y GUARDAPOLVOS</label>
           <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditRotulas" @click="EditRotulas = !EditRotulas">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
               <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active46" v-model="form.rotulas_guar" @change="update46"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.rotulas_guar,
                          'circle-off': !form.rotulas_guar
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditRotulas == true" label="Observaciones adicionales" :value.sync="form.nota_rotulas_guar">
            </CTextarea>
             
            <br>
            <label style="font-weight: bold;">AMORTIGUADORES DELANTEROS</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAmortiguadores" @click="EditAmortiguadores = !EditAmortiguadores">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active47" v-model="form.amort_del" @change="update47"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.amort_del,
                          'circle-off': !form.amort_del
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditAmortiguadores == true" label="Observaciones adicionales" :value.sync="form.nota_amort_del">
            </CTextarea>
            <br>
            <label style="font-weight: bold;">BASE DE AMORTIGUADORES DELANTEROS</label>
           <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBAmDel" @click="EditBAmDel = !EditBAmDel">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active48" v-model="form.base_amort_del" @change="update48"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.base_amort_del,
                          'circle-off': !form.base_amort_del
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditBAmDel == true" label="Observaciones adicionales" :value.sync="form.nota_base_amort_del">
            </CTextarea>
          </CCol>

          <CCol>      
            <label style="font-weight: bold;">BARRA ESTABILIZADORA</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBarraE" @click="EditBarraE = !EditBarraE">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active49" v-model="form.barra_estab" @change="update49"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.barra_estab,
                          'circle-off': !form.barra_estab
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditBarraE == true" label="Observaciones adicionales" :value.sync="form.nota_barra_estab">
            </CTextarea>
            <br>
              <label style="font-weight: bold;">MUELLES</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditMuelles" @click="EditMuelles = !EditMuelles">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active50" v-model="form.muelles" @change="update50"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.muelles,
                          'circle-off': !form.muelles
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditMuelles == true" label="Observaciones adicionales" :value.sync="form.nota_muelles">
            </CTextarea>

            <br>
            <label style="font-weight: bold;">SOPORTE</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditSoporte" @click="EditSoporte = !EditSoporte">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
               <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active51" v-model="form.soporte" @change="update51"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.soporte,
                          'circle-off': !form.soporte
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditSoporte == true" label="Observaciones adicionales" :value.sync="form.nota_soporte">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="SuspencionTCollapse = !SuspencionTCollapse" class="btn text-left"> 
    <h5>SUSPENCIÓN TRASERA</h5>
  </CCardHeader>
  
    <CCollapse :show="SuspencionTCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;"> AMORTIGUADORES TRASEROS</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditAmortTras" @click="EditAmortTras = !EditAmortTras">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active52" v-model="form.amort_tras" @change="update52"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.amort_tras,
                          'circle-off': !form.amort_tras
                        }">
                      </div>
                  </label>
                </div>
            <br>
            
            <CTextarea  rows="1" class=" h6" v-if="EditAmortTras == true" label="Observaciones adicionales" :value.sync="form.nota_amort_tras">
            </CTextarea>
             
            <br>
            <label style="font-weight: bold;">BASE DE AMORTIGUADORES TRASEROS</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditBAmTras" @click="EditBAmTras = !EditBAmTras">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active53" v-model="form.base_amort_tras" @change="update53"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.base_amort_tras,
                          'circle-off': !form.base_amort_tras
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditBAmTras == true" label="Observaciones adicionales" :value.sync="form.nota_base_amort_tras">
            </CTextarea>
          </CCol>

          <CCol>
            <label style="font-weight: bold;">RESORTES DE SUSPENCIÓN</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditResortes" @click="EditResortes = !EditResortes">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active54" v-model="form.resortes_susp" @change="update54"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.resortes_susp,
                          'circle-off': !form.resortes_susp
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditResortes == true" label="Observaciones adicionales" :value.sync="form.nota_resortes_susp">
            </CTextarea>
            
            <label style="font-weight: bold;">EJE TRASERO</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditEjeTras" @click="EditEjeTras = !EditEjeTras">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active55" v-model="form.eje_tras" @change="update55"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.eje_tras,
                          'circle-off': !form.eje_tras
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditEjeTras == true" label="Observaciones adicionales" :value.sync="form.nota_eje_trasero">
            </CTextarea>
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>

  <CCardHeader @click="VariosCollapse = !VariosCollapse" class="btn text-left"> 
    <h5>VARIOS</h5>
  </CCardHeader>
        
    <CCollapse :show="VariosCollapse">
      <CCardBody>
        <CRow>
          <CCol>
            <label style="font-weight: bold;"> FUGA DE ACEITE DE TRANSMISIÓN</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditFugaAceiTrans" @click="EditFugaAceiTrans = !EditFugaAceiTrans">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active56" v-model="form.fuga_aceit_trans" @change="update56"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.fuga_aceit_trans,
                          'circle-off': !form.fuga_aceit_trans
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditFugaAceiTrans == true" label="Observaciones adicionales" :value.sync="form.nota_fuga_aceit_trans">
            </CTextarea>
             
           
            <label style="font-weight: bold;">CUBREPOLVOS DE SEMIEJES</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditCubreSemi" @click="EditCubreSemi = !EditCubreSemi">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active57" v-model="form.cubrepv_semiejes" @change="update57"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.cubrepv_semiejes,
                          'circle-off': !form.cubrepv_semiejes
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditCubreSemi == true" label="Observaciones adicionales" :value.sync="form.nota_cubrepv_semiejes">
            </CTextarea>

            
            <label style="font-weight: bold;">LÍNEAS DE ESCAPE/FUGAS/ESTADO</label>
            <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditLineaEsc" @click="EditLineaEsc = !EditLineaEsc">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active58" v-model="form.lineas_escape" @change="update58"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.lineas_escape,
                          'circle-off': !form.lineas_escape
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditLineaEsc == true" label="Observaciones adicionales" :value.sync="form.nota_lineas_escape">
            </CTextarea>
          </CCol>

          <CCol>   
            <label style="font-weight: bold;">INSPECCIÓN DE LLANTA DE REFACCIÓN</label>
             <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditLlantaRef" @click="EditLlantaRef = !EditLlantaRef">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
                <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active59" v-model="form.inspeccion_llanta" @change="update59"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.inspeccion_llanta,
                          'circle-off': !form.inspeccion_llanta
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditLlantaRef == true" label="Observaciones adicionales" :value.sync="form.nota_inspeccion_llanta">
            </CTextarea>

           
            <label style="font-weight: bold;">GOMAS DE LIMPIAPARABRISAS</label>
             <br>
              <CLink class=" border-top-0 ml-2 text-dark" style="font-weight: bold;" shape="pill" value="EditGomasLimp" @click="EditGomasLimp = !EditGomasLimp">  <CIcon name="cil-pencil" />
            Notas
            </CLink>
             <div class=" float-right">
                  <label class="switch" role="button">
                      <input type="checkbox" :value="active60" v-model="form.gomas_limpiaparabrisas" @change="update60"/>
                      <div
                        :class="{
                          circle: true,
                          'circle-on': form.gomas_limpiaparabrisas,
                          'circle-off': !form.gomas_limpiaparabrisas
                        }">
                      </div>
                  </label>
                </div>
            <br>
            <br>
            <CTextarea  rows="1" class=" h6" v-if="EditGomasLimp == true" label="Observaciones adicionales" :value.sync="form.nota_gomas_limpiaparabrisas">
            </CTextarea>            
          </CCol>
        </CRow>
      </CCardBody>
    </CCollapse>
    <br>
    
    
    <CRow>
    <CCol sm="" class="border-info ml-3">
    <label class="h3 ml-3">Firma técnico que reviso</label>
    <div id="app">
    <VueSignaturePad width="500px" height="100px" ref="signaturePad" />
    <div>
      <CButton color="success" @click="save">Guardar </CButton>
      <CButton color="danger" @click="undo">Deshacer </CButton>
    </div>
  </div></CCol>

  <CCol>
<CTextarea class=" h4" label="Observaciones adicionales">

</CTextarea>


<div class="container"><br>
<br><br><br><br><br>
    <div class="large-12 medium-12 small-12 cell">
      <label>
        <input type="file" id="files" ref="files" accept="image/*" multiple v-on:change="handleFilesUpload()"/>
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      <div class="grid-x">
        <div v-for="(file, key) in files" class="large-4 medium-4 small-6 cell file-listing">
       
          <img class="preview" v-bind:ref="'image'+parseInt( key )"/>
        </div>
      </div>
    </div>
    
    <div class="large-12 medium-12 small-12 cell clear">
      <CButton v-on:click="addFiles()">Agregar Fotos</CButton>
    </div>
  
    <div class="large-12 medium-12 small-12 cell">
      <CButton v-on:click="submitFiles()">Guardar</CButton>
    </div>
  </div>
  </CCol>

    </CRow>
    <CRow>
      <CCol>
       <CButton type="submit"  :hidden="submitted" @click="store()" class="btn btn-success float-right"><CIcon name="cilSave"/> Guardar</CButton> 
      </CCol>
    </CRow>

</CCard>
    </CForm>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import VueSignaturePad from 'vue-signature-pad';
import Swal from 'sweetalert2'
import { validationMixin } from "vuelidate"
import check from '@/repositories/global/check'
import alert from '@/repositories/global/alert'

Vue.use(VueSignaturePad);

export default {
    data(){
        return{


      // For example purpose (& codepen limitation): active, dataOn & dataOff aren't props.
      active: 1, // 1|0
      active1:1,
      active2:1,
      active3:1,
      active4:1,
      active5:1,
      active6:1,
      active7:1,
      active8:1,
      active9:1,
      active10:1,
      active11:1,
      active12:1,
      active13:1,
      active14:1,
      active15:1,
      active16:1,
      active17:1,
      active18:1,
      active19:1,
      active20:1,
      active21:1,
      active22:1,
      active23:1,
      active24:1,
      active25:1,
      active26:1,
      active27:1,
      active28:1,
      active29:1,
      active30:1,
      active31:1,
      active32:1,
      active33:1,
      active34:1,
      active35:1,
      active36:1,
      active37:1,
      active38:1,
      active39:1,
      active40:1,
      active41:1,
      active42:1,
      active43:1,
      active44:1,
      active45:1,
      active46:1,
      active47:1,
      active48:1,
      active49:1,
      active50:1,
      active51:1,
      active52:1,
      active53:1,
      active54:1,
      active55:1,
      active56:1,
      active57:1,
      active58:1,
      active59:1,
      active60:1,

      dataOn: "Bien",
      dataOff: "Mal",


          form: this.getEmptyForm(),
     submitted: false,

           delanteras: "",
           traseras:"",
           calaberas:"",
           cristales:"",
           puertas:"",
           salpicaderas:"",
           asientos:"", 
           direccionales:"",
           radio:"",
           partes_bajas:"",
           caja_direc:"",
           bomba_direc:"",
           brazos:"",
           guardapv_flecha:"",
           mangueras_fugas:"",
           bomba_boster:"",
           mangueras_turbo:"",
           llanta_del_izq:"",
           llanta_del_der:"",
           llanta_tras_izq:"",
           llanta_tras_der:"",
           cuartos:"",
           faros_alta_baja:"",
           faros_niebla:"",
           intermitentes:"",
           luz_techo:"",
           alto_rev:"",
           cables_bujias:"",
           mangueras_estado:"",
           bandas_motor:"",
           fugas_aire:"",
           alin_motor:"",
           aceit_motor:"",
           aceit_dir_h:"",
           aceit_trans:"",
           liq_refrigerante:"",
           liq_frenos:"",
           liq_limpiaparabrisas:"",
           ind_abordo:"",
           claxon:"",
           sis_limpiaparabrisas:"",
           ventilacion:"",
           func_compresor:"",
           fugas_sist_aa:"",
           filtro_polen:"",
           bateria:"",
           rotulas_guar:"",
           amort_del:"",
           base_amort_del:"",
           barra_estab:"",
           muelles:"",
           soporte:"",
           amort_tras:"",
           base_amort_tras:"",
           resortes_susp:"",
           eje_tras:"",
           fuga_aceit_trans:"",
           cubrepv_semiejes:"",
           lineas_escape:"",
           inspeccion_llanta:"",
           gomas_limpiaparabrisas:"",

          
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
            files:[],

             horizontal: { label:'col-3', input:'col-9' },
          //v-if Balatas
            EditBalatDelant:false,
            EditBalatTras:false,
          //v-if Carroceria
            EditCalaberas:false,
            EditCristales:false,
            EditPuertas:false,
            EditFacias:false,
            EditAsientos:false,
            EditDireccionales:false,
            EditRadio:false,
            EditPbajas:false,
          // v-if Direccion
            EditCDirec:false,
            EditBDirec:false,
            EditBrazos:false,
            EditFlechas:false,
            EditMangueras:false,
          //v-if Frenos     
            EditBomba:false,
            EditTurbo:false,     
          // v-if Llantas
            EditDelIzq:false, 
            EditDelDer:false, 
            EditTrasIzq:false, 
            EditTrasDer:false, 
          // v-if Luces
            EditCuartos:false, 
            EditBajas:false, 
            EditNiebla:false, 
            EditInterm:false,
            EditLuzTecho:false,  
            EditStop:false, 
          // v-if Motor
            EditCables:false, 
            EditMangMotor:false, 
            EditBandas:false, 
            EditFugaAire:false, 
            EditAlineacionM:false, 
          // v-if Niveles
            EditAceitMotor:false,
            EditAceitDir:false,
            EditAceitTrans:false,
            EditAceitRefri:false,
            EditAceitFrenos:false,
            EditLiqParab:false,
          // v-if Sistema Electrico A/A
            EditIndAb:false,
            EditClaxon:false,
            EditSisLimpia:false,
            EditVentilacion:false,
            EditCompresor:false,
            EditFugasAA:false,
            EditFPolen:false,
            EditBateria :false,
          // v-if Suspencion delantera
            EditRotulas:false,
            EditAmortiguadores:false,
            EditBAmDel:false,
            EditBarraE:false,
            EditMuelles:false,
            EditSoporte:false,
          // v-if Suspencion trasera
            EditAmortTras:false,
            EditBAmTras:false,
            EditResortes:false,
            EditEjeTras:false,
          // v-if Varios
            EditFugaAceiTrans:false,
            EditCubreSemi:false,
            EditLineaEsc:false,
            EditLlantaRef:false,
            EditGomasLimp:false,

            NivelCollapse: false,
            SuspencionDCollapse:false,
            SuspencionTCollapse:false,
            LlantasCollapse:false,
            MotorCollapse:false,
            VariosCollapse:false,
            SistemaECollapse:false,
            FrenosCollapse:false,
            CarroceriaCollapse:false,
            BalatasCollapse:false,
            LucesCollapse:false,
            DireccionCollapse:false,

            labelIcon: {
        labelOn: '\u2713',
        labelOff: '\u2715'
      },
        }       
    },
    created() {
    this.delanteras = Boolean(this.active);
    this.update();
  },
  created() {
    this.traseras = Boolean(this.active1);
    this.update1();
  },
  created() {
    this.calaberas = Boolean(this.active2);
    this.update2();
  },
  created() {
    this.cristales = Boolean(this.active3);
    this.update3();
  },
  created() {
    this.puertas = Boolean(this.active4);
    this.update4();
  },
  created() {
    this.salpicaderas = Boolean(this.active5);
    this.update5();
  },
  created() {
    this.asientos = Boolean(this.active6);
    this.update6();
  },
  created() {
    this.direccionales = Boolean(this.active7);
    this.update7();
  },
  created() {
    this.radio = Boolean(this.active8);
    this.update8();
  },
  created() {
    this.partes_bajas = Boolean(this.active9);
    this.update9();
  },
  created() {
    this.caja_direc = Boolean(this.active10);
    this.update10();
  },
   created() {
    this.caja_direc = Boolean(this.active11);
    this.update11();
  },
  created() {
    this.brazos = Boolean(this.active12);
    this.update12();
  },
  created() {
    this.guardapv_flecha = Boolean(this.active13);
    this.update13();
  },
  created() {
    this.mangueras_fugas = Boolean(this.active14);
    this.update14();
  },
  created() {
    this.bomba_boster = Boolean(this.active15);
    this.update15();
  },
  created() {
    this.mangueras_turbo = Boolean(this.active16);
    this.update16();
  },
  created() {
    this.llanta_del_izq = Boolean(this.active17);
    this.update17();
  },
  created() {
    this.llanta_del_der = Boolean(this.active18);
    this.update18();
  },
  created() {
    this.llanta_tras_izq = Boolean(this.active19);
    this.update19();
  },
  created() {
    this.llanta_tras_der = Boolean(this.active20);
    this.update20();
  },
  created() {
    this.cuartos = Boolean(this.active21);
    this.update21();
  },
  created() {
    this.faros_alta_baja = Boolean(this.active22);
    this.update22();
  },
  created() {
    this.faros_niebla = Boolean(this.active23);
    this.update23();
  },
  created() {
    this.intermitentes = Boolean(this.active24);
    this.update24();
  },
  created() {
    this.luz_techo = Boolean(this.active25);
    this.update25();
  },
  created() {
    this.alto_rev = Boolean(this.active26);
    this.update26();
  },
  created() {
    this.cables_bujias = Boolean(this.active27);
    this.update27();
  },
  created() {
    this.mangueras_estado = Boolean(this.active28);
    this.update28();
  },
  created() {
    this.bandas_motor = Boolean(this.active29);
    this.update29();
  },
  created() {
    this.fugas_aire = Boolean(this.active30);
    this.update30();
  },
  created() {
    this.alin_motor = Boolean(this.active31);
    this.update31();
  },
  created() {
    this.aceit_motor = Boolean(this.active32);
    this.update32();
  },
  created() {
    this.aceit_dir_h = Boolean(this.active33);
    this.update33();
  },
  created() {
    this.aceit_trans = Boolean(this.active34);
    this.update34();
  },
  created() {
    this.liq_refrigerante = Boolean(this.active35);
    this.update35();
  },
  created() {
    this.liq_frenos = Boolean(this.active36);
    this.update36();
  },
  created() {
    this.liq_limpiaparabrisas = Boolean(this.active37);
    this.update37();
  },
  created() {
    this.ind_abordo = Boolean(this.active38);
    this.update38();
  },
  created() {
    this.claxon = Boolean(this.active39);
    this.update39();
  },
  created() {
    this.sis_limpiaparabrisas = Boolean(this.active40);
    this.update40();
  },
  created() {
    this.ventilacion = Boolean(this.active41);
    this.update41();
  },
  created() {
    this.func_compresor = Boolean(this.active42);
    this.update42();
  },
  created() {
    this.fugas_sist_aa = Boolean(this.active43);
    this.update43();
  },
  created() {
    this.filtro_polen = Boolean(this.active44);
    this.update44();
  },
  created() {
    this.bateria = Boolean(this.active45);
    this.update45();
  },
  created() {
    this.rotulas_guar = Boolean(this.active46);
    this.update46();
  },
  created() {
    this.amort_del = Boolean(this.active47);
    this.update47();
  },
  created() {
    this.base_amort_del = Boolean(this.active48);
    this.update48();
  },
  created() {
    this.barra_estab = Boolean(this.active49);
    this.update49();
  },
  created() {
    this.muelles = Boolean(this.active50);
    this.update50();
  },
  created() {
    this.soporte = Boolean(this.active51);
    this.update51();
  },
  created() {
    this.amort_tras = Boolean(this.active52);
    this.update52();
  },
  created() {
    this.base_amort_tras = Boolean(this.active53);
    this.update53();
  },
  created() {
    this.resortes_susp = Boolean(this.active54);
    this.update54();
  },
  created() {
    this.eje_tras = Boolean(this.active55);
    this.update55();
  },
  created() {
    this.fuga_aceit_trans = Boolean(this.active56);
    this.update56();
  },
  created() {
    this.cubrepv_semiejes = Boolean(this.active57);
    this.update57();
  },
  created() {
    this.lineas_escape = Boolean(this.active58);
    this.update58();
  },
  created() {
    this.inspeccion_llanta = Boolean(this.active59);
    this.update59();
  },
  created() {
    this.gomas_limpiaparabrisas = Boolean(this.active60);
    this.update60();
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

  },
    
     methods: {
    update() {
    this.label1 = this.delanteras ? this.dataOn : this.dataOff;
    },
    update1() {
      this.label2 = this.traseras ? this.dataOn : this.dataOff;
    },
    update2() {
      this.label3 = this.calaberas ? this.dataOn : this.dataOff;
    },
    update3() {
      this.label4 = this.cristales ? this.dataOn : this.dataOff;
    },
    update4() {
      this.label5 = this.puertas ? this.dataOn : this.dataOff;
    },
    update5() {
      this.label6 = this.salpicaderas ? this.dataOn : this.dataOff;
    },
    update6() {
      this.label = this.asientos ? this.dataOn : this.dataOff;
    },
    update7() {
      this.label = this.direccionales ? this.dataOn : this.dataOff;
    },
    update8() {
      this.label = this.radio ? this.dataOn : this.dataOff;
    },
    update9() {
      this.label = this.partes_bajas ? this.dataOn : this.dataOff;
    },
     update10() {
      this.label = this.caja_direc ? this.dataOn : this.dataOff;
    },
    update11() {
      this.label = this.bomba_direc ? this.dataOn : this.dataOff;
    },
    update12() {
      this.label = this.brazos ? this.dataOn : this.dataOff;
    },
    update13() {
      this.label = this.guardapv_flecha ? this.dataOn : this.dataOff;
    },
    update14() {
      this.label = this.mangueras_fugas ? this.dataOn : this.dataOff;
    },
    update15() {
      this.label = this.bomba_boster ? this.dataOn : this.dataOff;
    },
    update16() {
      this.label = this.mangueras_turbo ? this.dataOn : this.dataOff;
    },
    update17() {
      this.label = this.llanta_del_izq ? this.dataOn : this.dataOff;
    },
    update18() {
      this.label = this.llanta_del_der ? this.dataOn : this.dataOff;
    },
    update19() {
      this.label = this.llanta_tras_izq ? this.dataOn : this.dataOff;
    },
    update20() {
      this.label = this.llanta_tras_der ? this.dataOn : this.dataOff;
    },
    update21() {
      this.label = this.cuartos ? this.dataOn : this.dataOff;
    },
    update22() {
      this.label = this.faros_alta_baja ? this.dataOn : this.dataOff;
    },
    update23() {
      this.label = this.faros_niebla ? this.dataOn : this.dataOff;
    },
    update24() {
      this.label = this.intermitentes ? this.dataOn : this.dataOff;
    },
    update25() {
      this.label = this.luz_techo ? this.dataOn : this.dataOff;
    },
    update26() {
      this.label = this.alto_rev ? this.dataOn : this.dataOff;
    },
    update27() {
      this.label = this.cables_bujias ? this.dataOn : this.dataOff;
    },
    update28() {
      this.label = this.mangueras_estado ? this.dataOn : this.dataOff;
    },
    update29() {
      this.label = this.bandas_motor ? this.dataOn : this.dataOff;
    },
    update30() {
      this.label = this.fugas_aire ? this.dataOn : this.dataOff;
    },
    update31() {
    this.label = this.alin_motor ? this.dataOn : this.dataOff;
    },
    update32() {
    this.label = this.aceit_motor ? this.dataOn : this.dataOff;
    },
    update33() {
    this.label = this.aceit_dir_h ? this.dataOn : this.dataOff;
    },
    update34() {
    this.label = this.aceit_trans ? this.dataOn : this.dataOff;
    },
    update35() {
    this.label = this.liq_refrigerante ? this.dataOn : this.dataOff;
    },
    update36() {
    this.label = this.liq_frenos ? this.dataOn : this.dataOff;
    },
    update37() {
    this.label = this.liq_limpiaparabrisas ? this.dataOn : this.dataOff;
    },
    update38() {
    this.label = this.ind_abordo ? this.dataOn : this.dataOff;
    },
    update39() {
    this.label = this.claxon ? this.dataOn : this.dataOff;
    },
    update40() {
    this.label = this.sis_limpiaparabrisas ? this.dataOn : this.dataOff;
    },
    update41() {
    this.label = this.ventilacion ? this.dataOn : this.dataOff;
    },
    update42() {
    this.label = this.func_compresor ? this.dataOn : this.dataOff;
    },
    update43() {
    this.label = this.fugas_sist_aa ? this.dataOn : this.dataOff;
    },
    update44() {
    this.label = this.filtro_polen ? this.dataOn : this.dataOff;
    },
    update45() {
    this.label = this.bateria ? this.dataOn : this.dataOff;
    },
    update46() {
    this.label = this.rotulas_guar ? this.dataOn : this.dataOff;
    },
    update47() {
    this.label = this.amort_del ? this.dataOn : this.dataOff;
    },
    update48() {
    this.label = this.base_amort_del ? this.dataOn : this.dataOff;
    },
    update49() {
    this.label = this.barra_estab ? this.dataOn : this.dataOff;
    },
    update50() {
    this.label = this.muelles ? this.dataOn : this.dataOff;
    },
    update51() {
    this.label = this.soporte ? this.dataOn : this.dataOff;
    },
    update52() {
    this.label = this.amort_tras ? this.dataOn : this.dataOff;
    },
    update53() {
    this.label = this.base_amort_tras ? this.dataOn : this.dataOff;
    },
    update54() {
    this.label = this.resortes_susp ? this.dataOn : this.dataOff;
    },
    update55() {
    this.label = this.eje_tras ? this.dataOn : this.dataOff;
    },
    update56() {
    this.label = this.fuga_aceit_trans ? this.dataOn : this.dataOff;
    },
    update57() {
    this.label = this.cubrepv_semiejes ? this.dataOn : this.dataOff;
    },
    update58() {
    this.label = this.lineas_escape ? this.dataOn : this.dataOff;
    },
    update59() {
    this.label = this.inspeccion_llanta ? this.dataOn : this.dataOff;
    },
    update60() {
    this.label = this.gomas_limpiaparabrisas ? this.dataOn : this.dataOff;
    },
 

        goBack() { this.$router.go(-1) },
   permisos(permisos) {
      return !check.permiso(permisos)

  
    },
     getEmptyForm() {
      return {    

        //llena datos de switches
           delanteras: false,
           traseras:false,
           calaberas:false,
           cristales:false,
           puertas:false,
           salpicaderas:false,
           asientos:false, 
           direccionales:false,
           radio:false,
           partes_bajas:false,
           caja_direc:false,
           bomba_direc:false,
           brazos:false,
           guardapv_flecha:false,
           mangueras_fugas:false,
           bomba_boster:false,
           mangueras_turbo:false,
           llanta_del_izq:false,
           llanta_del_der:false,
           llanta_tras_izq:false,
           llanta_tras_der:false,
           cuartos:false,
           faros_alta_baja:false,
           faros_niebla:false,
           intermitentes:false,
           luz_techo:false,
           alto_rev:false,
           cables_bujias:false,
           mangueras_estado:false,
           bandas_motor:false,
           fugas_aire:false,
           alin_motor:false,
           aceit_motor:false,
           aceit_dir_h:false,
           aceit_trans:false,
           liq_refrigerante:false,
           liq_frenos:false,
           liq_limpiaparabrisas:false,
           ind_abordo:false,
           claxon:false,
           sis_limpiaparabrisas:false,
           ventilacion:false,
           func_compresor:false,
           fugas_sist_aa:false,
           filtro_polen:false,
           bateria:false,
           rotulas_guar:false,
           amort_del:false,
           base_amort_del:false,
           barra_estab:false,
           muelles:false,
           soporte:false,
           amort_tras:false,
           base_amort_tras:false,
           resortes_susp:false,
           eje_tras:false,
           fuga_aceit_trans:false,
           cubrepv_semiejes:false,
           lineas_escape:false,
           inspeccion_llanta:false,
           gomas_limpiaparabrisas:false,

           //llena datos de notas
           nota_bal_del:'',
           nota_bal_tras:'',
           nota_calaberas:'',
           nota_cristales:'',
           nota_puertas:'',
           nota_facias:'',
           nota_asientos:'',
           nota_direccionales:'',
           nota_radio:'',
           nota_partes_bajas:'',
           nota_caja_dir:'',
           nota_bomba_dir:'',
           nota_brazos:'',
           nota_guardapv:'',
           nota_mangueras_fugas:'',
           nota_bomba_boster:'',
           nota_mangueras_turbos:'',
           nota_llanta_del_izq:'',
           nota_llanta_del_der:'',
           nota_llanta_tras_izq:'',
           nota_llanta_tras_der:'',
           nota_cuartos:'',
           nota_faros:'',
           nota_faros_niebla:'',
           nota_intermitentes:'',
           nota_luz_techo:'',
           nota_stop:'',
           nota_cables:'',
           nota_mangueras_estado:'',
           nota_bandas:'',
           nota_fugas_aire:'',
           nota_alin_motor:'',
           nota_aceit_motor:'',
           nota_aceit_dir_h:'',
           nota_aceit_trans:'',
           nota_liq_ref:'',
           nota_liq_frenos:'', 
           nota_liq_limpiaparabrisas:'',
           nota_ind_abor:'',
           nota_claxon:'',
           nota_sis_limpiaparabrisas:'',
           nota_ventilacion:'',
           nota_compresor:'',
           nota_fugas_aa:'',
           nota_filtro_polen:'',
           nota_bateria:'',
           nota_rotulas_guar:'',
           nota_amort_del:'',
           nota_base_amort_del:'',
           nota_barra_estab:'',
           nota_muelles:'',
           nota_soporte:'',
           nota_amort_tras:'',
           nota_base_amort_tras:'',
           nota_resortes_susp:'',
           nota_eje_trasero:'',
           nota_fuga_aceit_trans:'',
           nota_cubrepv_semiejes:'',
           nota_lineas_escape:'',
           nota_inspeccion_llanta:'',
           nota_gomas_limpiaparabrisas:''
      }
   },
  
        store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro  a la base de datos."+"\n"+"<br/> Balatas delanteras:"+ this.form.delanteras,
        html:
        "Enviaras toda la información relacionada a este registro a la base de datos.",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {
          let self = this;
      self.submitted = true
      self.errors = []
      
          axios.post(this.$apiAdress+'/api/diagnostico/almacenar?token='+localStorage.getItem("api_token"), self.form
      ) 
            .then(function (response) {
                    console.log(response.data)
            alert.response200("¡Registro guardado exitosamente!", "");
          //  self.clearForm()
            self.submitted = false; 
              
      }) 
  
            .catch(function(error) {
                self.submitted = false;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          self.errors = alert.responseCatch(error, 'Code #1009');
            });
        }
      });
    },
        addFiles(){
        this.$refs.files.click();
      },
      submitFiles(){
        /*
          Initialize the form data
        */
        let formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];

          formData.append('files[' + i + ']', file);
        }

        /*
          Make the request to the POST /select-files URL
        */
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

      /*
        Handles the uploading of files
      */
      handleFilesUpload(){
        /*
          Get the uploaded files from the input. 
        */
        let uploadedFiles = this.$refs.files.files;

        /*
          Adds the uploaded file to the files array
        */
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
        
        /*
          Generate image previews for the uploaded files
        */
        this.getImagePreviews();
      },

      /*
        Gets the preview image for the file.
      */
      getImagePreviews(){
        /*
          Iterate over all of the files and generate an image preview for each one.
        */
        for( let i = 0; i < this.files.length; i++ ){
          /*
            Ensure the file is an image file
          */
          if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {
            /*
              Create a new FileReader object
            */
            let reader = new FileReader();

            /*
              Add an event listener for when the file has been loaded
              to update the src on the file preview.
            */
            reader.addEventListener("load", function(){
              this.$refs['image'+parseInt( i )][0].src = reader.result;
            }.bind(this), false);

            /*
              Read the data for the file in through the reader. When it has
              been loaded, we listen to the event propagated and set the image
              src to what was loaded from the reader.
            */
            reader.readAsDataURL( this.files[i] );
          }
        }
      },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    }
     }
}
</script>

<style lang="scss">
$default: black;
$active: #30aa00;
$inactive: #dd0c0c;
$text: #9d9d9d;
$text-hover: white;
$size: 1.5rem;
$w: 50px;
$h: 30px;
$circle: $h - 4;
$toggle-dis: $w - $circle - 2;

.switch {
  position: relative;
  display: inline-block;
  width: $w;
  height: $h;
  border-radius: 100px;

  .circle {
    display: flex;
    align-items: center;
    width: 100%;
    height: $h - 2;
    border-radius: 100px;
    background-color: $default;

    & > span {
      font-size: $size;
      color: $text;
      padding-left: $h + 18;
    }

    &::before {
      position: absolute;
      content: "";
      height: $circle;
      width: $circle;
      left: 1px;
      top: 1px;
      border-radius: 100px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    &:hover {
      background-color: lighten($default, 20);

      & > span {
        color: $text-hover;
      }
    }
  }

  .circle-on {
    background-color: $active;

    & > span {
      color: #30aa00;
    }

    &:hover {
      background-color: white;
      border: 1px $active solid;

      &::before {
        background-color: $active;
      }

      & > span {
        color: $active;
      }
    }
  }

  .circle-off {
    background-color: $inactive;

    & > span {
      color: rgb(209, 24, 24);
    }

    &:hover {
      background-color: white;
      border: 1px $inactive solid;

      &::before {
        background-color: $inactive;
      }

      & > span {
        color: $inactive;
      }
    }
  }

  & input {
    display: none;

    &:checked + .circle:before {
      -webkit-transform: translateX($toggle-dis);
      -ms-transform: translateX($toggle-dis);
      transform: translateX($toggle-dis);
    }
  }
}
</style>