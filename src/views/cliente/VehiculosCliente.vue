<template>
  
<div>
       <CButton
        class="m-3"
              shape="square"
              style="float: right;"
              @click="addVehiculo = true"
              color="success"
            >
              Nuevo vehículo
              <CIcon name="cil-plus" />
            </CButton>

              <CModal
              title="Nuevo vehículo"
              color="info"
              size="xl"
              :show.sync="addVehiculo"
            >
             <h4
                 :to="{ name: 'Editar Cliente', params: { id: $route.params.id } }"
        v-if="permisos(['general.edit'])"
        v-text="$route.params.id"
      />
      
              <AddVehiculo />
              <!--inicia el formulario para agregar un nuevo vehiculo-->

              <template #footer>
                <CButton @click="addVehiculo = false" color="light"
                  >Cancelar</CButton
                >
              </template>
            </CModal>
     <table class="table" sm="" >
   
      <thead>
        <tr>
          <th>id</th>
          <th>Marca</th>
           <th>Modelo</th>
          <th>Kilometros</th>
          <th>Placas</th>
          <th>Año</th>   
         <th>Acciones</th>
      
          <th></th>
        </tr>
      </thead>
      <tbody>
          <td>{{form.id}}</td>
          <td>{{ form.marc}}</td>
          <td>{{ form.mod}}</td>
          <td>{{ form.kilometros}}</td>
          <td>{{ form.plac}}</td>
             <td>{{ form.año}}</td>
                 <td>
                    <CLink
                      v-c-tooltip.hover="{
                      content: `Ver Vehiculo`
                      }"
                      class="btn-sm btn-secondary mr-1"
                   
                      ><CIcon
                        class="align-content-sm-center"
                        name= "cilCarAlt"
                    />
               
                    </CLink>
                  
                    <CLink
                      v-c-tooltip.hover="{
                      content: `Editar`
                      }"
                      class="btn-sm btn-warning  mr-1"
                       :to="{
                              name: 'Editar Vehículo',
                              params: { id: form.id }
                            }"
                      ><CIcon
                        class="align-content-sm-center"
                        name="cil-pencil"
                    /></CLink>
                  
                    
                     <CLink @click="recepcion = true"
                                    v-c-tooltip.hover="{
                content: `Orden de Servicio`
              }"
                      class="btn-sm btn-dark"
                      ><CIcon
                        class="align-content-sm-center"
                        name="cil-clipboard"
                    /></CLink>
                  </td>
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


          

                
      
      </tbody>
    </table>
   </div>
</template>

<script>
import Repositories from "../cliente/Repositories";
import check from "@/repositories/global/check";
import AddVehiculo from './datos_clientes_vehiculos/AddVehiculo.vue';
import EditarVehiculo from "../vehiculos/EditarVehiculo";
import Recepcion from '../vehiculos/Recepcion.vue';
export default {
    components: {
     EditarVehiculo,
    AddVehiculo,
     Recepcion

  },
      data: () => {
    return {
      recepcion: false,
      editarvehiculo: false,
      showForm: true,
      form: [],
      addVehiculo: false,
      item:[]

    };
  },
      methods: {
        editVehiculo() {
      this.$router.push({ path: "/editarvehiculo" });
    },
    showVehiculo(id) {
      this.$router.push({ path: `vehiculos/detallesv/${id.toString()}` });
    },
    goBack() {
      this.$router.go(-1);
    },
    permisos(permisos) {
      return check.permiso(permisos);
    },
    async getVehiculos() {
      let self = this;
      self.form = await Repositories.getVehiculos(self);
      self.showForm = false;
       console.log(self.form.plac)
    },
  },
     mounted: function(){

this.getVehiculos();
    }
}
</script>

<style>

</style>