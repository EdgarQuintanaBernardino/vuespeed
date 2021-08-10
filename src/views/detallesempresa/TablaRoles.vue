<template>
  <CRow>
    <CCol col="10" xl="6">
      <transition name="slide">
      <CCard>
        <CCardHeader color="info" class="text-white">
          <h4>Roles
 <CButton
        shape="pill"
        class="btn btn-dark m-2 float-right"
        @click="newRol()"
      >
        Nuevo rol
        <!--para ponerle un icono al boton-->
        <CIcon name="cil-plus" />
      </CButton>   

          </h4>
                                              
        </CCardHeader>
        <CCardBody>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
          <CDataTable
            :items="items"
            :fields="fields"
            :items-per-page="3"
            pagination
          >
          <template #delete="{item}">
            <td>
              <CButton  color="danger" @click="deleteRol( item.id )"><CIcon name="cil-trash"/></CButton>
            </td>
          </template>
        </CDataTable>
        </CCardBody>
      </CCard>
      </transition>
    </CCol>

<CCol>
  

</CCol>


  </CRow>


</template>

<script>
import axios from 'axios'
import Swal from "sweetalert2";
import alert from "@/repositories/global/alert";
import NvoRol from "../roles/NvoRol";

export default {
  name: 'Users',
  components:{
    NvoRol

  },
  data: () => {
    return {
      NvoRol: false,
      items: [],
      fields: ['id','nom','delete'],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
    
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  paginationProps: {
    align: 'center',
    doubleArrows: false,
    previousButtonHtml: 'prev',
    nextButtonHtml: 'next'
  },
  methods: {
     newRol() {
      this.$router.push({ path: "/nvorol" });
    },

    //Eliminar un cliente o usuario
    deleteRol(id) {
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
                "/api/rol/delete/" +
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
           //   alert.responseCatch(error, "Code #422");
            });
        }
      });
    },
    getRoles (){
      let self = this;
      axios.get( this.$apiAdress + '/api/roles?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data;
  
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getRoles();
  }
}
</script>