<template>
<CCard>
     <CRow>
              <CCol sm="12">
                <CCard>
                  <CCardBody>
                    <CTabs add-tab-classes="mt-1">
                      <CTab active>
                        <template slot="title">
                          <CIcon name="cil-calculator" /> {{ tabs[0] }}
                        </template>
                         <table class="table" sm="" >
   
      <thead>
        <tr>
          <th>ID Cita</th>
           <th>Fecha</th>
          <th>Nombre de Cita</th>
          <th>Status</th>
          <th>Acciones</th>
          
         
          <th></th>
        </tr>
      </thead>
      <tbody>
    
          <td>{{ form.id}}</td>
           <td>{{ form.fecha}}</td>
           <td>{{ form.nom_cita}}</td>
           <td>{{ form.name}}</td>
           <td>
              <CLink
               
                   @click="deleteRegistro(form.id)"
                   class="btn-sm btn-danger mr-1"
                   ><CIcon
                   class="align-content-sm-center"
                   name="cil-trash"
              /></CLink>
           </td>

      </tbody>
    </table>
                        
                       
                      </CTab>
                      <CTab>
                        <template slot="title">
                          <CIcon name="cil-basket" /> {{ tabs[1] }}
                        </template>
                        <table class="table" sm="" >
   
      <thead>
        <tr>
          <th>ID Cita</th>
           <th>Fecha</th>
          <th>Nombre de Cita</th>
          <th>Status</th>
          <th>Concretado</th>
          
         
          <th></th>
        </tr>
      </thead>
      <tbody>
    
           <td>{{ form.id}}</td>
           <td>{{ form.fecha}}</td>
           <td>{{ form.nom_cita}}</td>
           <td>{{ form.name}}</td>
           <td>{{ form.concretado}}</td>
 
      </tbody>
    </table>
                       
                      </CTab>
                    </CTabs>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
</CCard>
</template>
<script>
import axios from "axios";
import Repositories from '../citas/Repositories'
import Swal from "sweetalert2";
import alert from "@/repositories/global/alert";
import check from "@/repositories/global/check";
import RepositoriesCitaP from '../citas/RepositoriesCitaP'
export default {
    data(){
        return{
            default () {
        return ['status','concretado']
      },
      tabs: [
        "Próximas citas",
        "Citas pasadas",
       
      ],
      showForm: true,
      showdata:true,
      form:[],
      data:[]
        }
    },
     methods: {
    permisos(permisos) {
      return check.permiso(permisos);
    },
     deleteRegistro(id) {
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres eliminar este registro?",
        html:
          "Enviaras toda la información relacionada a este registro a la papelera de reciclaje.",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {
          let self = this;
          axios
            .post(
              self.$apiAdress +
                "/api/cita/delete/" +
                id +
                "?token=" +
                localStorage.getItem("api_token"),
              {}
            )
            .then(function(response) {
              alert.response200("¡Registro eliminado exitosamente!", "");
              self.getSucursales();
            })
            .catch(function(error) {
              alert.responseCatch(error, "Code #1004");
            });
        }
      });
    },
    async getCitaProx() {
      let self = this;
      self.form = await Repositories.getCitaProx(self);
      self.showForm = false;
    
    },
 
  },
     mounted: function(){
      
      this.getCitaProx();
    }

}
</script>