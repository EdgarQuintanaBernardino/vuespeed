    <template>
    <CForm @submit.prevent="store()" method="POST" novalidate>
    <CRow class=" justify-content-center">
  
        <CCol>
         <h5 class=" text-info b-2 ">Ayuda a Speed Pro a saber qué te pareció su trabajo.</h5>
         <br>
         <h6> EN GENERAL EL SERVICIO ME PARECIÓ..</h6>

            <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio-group
                v-model="form.servicio"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="radios-stacked1"
                stacked
            ></b-form-radio-group>
             {{form.servicio}}
            </b-form-group>

         <h6> EL TRATO DEL PERSONAL ME PARECIÓ</h6>

         <b-form-group v-slot="{ ariaDescribedby1 }">
            <b-form-radio-group
                v-model="form.trato_personal"
                :options="options1"
                :aria-describedby="ariaDescribedby1"
                name="radios-stacked2"
                stacked
            ></b-form-radio-group>
            {{form.trato_personal}}
            </b-form-group>

            <h6>¿CUÁNTO RECOMENDARÍAS ESTE LUGAR?..</h6>

            <b-form-group v-slot="{ ariaDescribedby1 }">
            <b-form-radio-group
                v-model="form.recomendado"
                value="recomendado"
                :options="options2"
                :aria-describedby="ariaDescribedby1"
                name="radios-stacked3"
                stacked
            ></b-form-radio-group>
            </b-form-group>

            <h6>DEJA UN COMENTARIO PRIVADO PARA EL TALLER:</h6>
            <CTextarea :value.sync="form.comentarios" rows="2" placeholder="Deja tu comentario"></CTextarea>
            <br>
            <div class=" float-right">
                <CButton color="success" @click="store()" :hidden="submitted">Enviar
                </CButton>
            </div>      
        </CCol> 
      </CRow>
    </CForm>

   
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2'
import { validationMixin } from "vuelidate"
import check from '@/repositories/global/check'
import alert from '@/repositories/global/alert'

export default {
      data() {
      return {
        form: this.getEmptyForm(),
        submitted: false,

        servicio: [], // Must be an array reference!
        trato_personal: [], // Must be an array reference!
        recomendado: [], // Must be an array reference!
        options: [
          { text: 'Excelente, sobre pasaron mis expectativas', value: 'excelente' },
          { text: 'Bueno, hicieron lo que tenían que hacer', value: 'bueno' },
          { text: 'Malo, quedé inconforme', value: 'malo' },
        ],

        options1: [
          { text: 'Excelente', value: 'excelente' },
          { text: 'Muy Bueno', value: 'Mbueno' },
          { text: 'Bueno', value: 'bueno' },
          { text: 'Malo', value: 'malo' },
          { text: 'Muy Malo', value: 'Mmalo' },
        ],

        options2: [
          { text: 'Lo recomendaría mucho', value: 'mucho' },
          { text: 'Lo recomendaría poco', value: 'poco' },
          { text: 'No lo recomendaría', value: 'no' },
        ]
      }
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

    methods:{
       goBack() { this.$router.go(-1) },
   permisos(permisos) {
      return !check.permiso(permisos)
    },

     getEmptyForm() {
      return {
        servicio:'',
        trato_personal:'',
        recomendado:'', 
        comentarios:''
      }
     },
      clearForm() { 
      let self = this;
      self.form.servicio = ''
      self.form.trato_personal = ''
      self.form.recomendado = ''
      self.form.comentarios = ''
      },
      f(){
        const mensaje = document.getElementById('mensaje');
        const contador = document.getElementById('contador');

        mensaje.addEventListener('input', function(e) {
        const target = e.target;
        const longitudMax = target.getAttribute('maxlength');
        const longitudAct = target.value.length;
        contador.innerHTML = `${longitudAct}/${longitudMax}`;
});
        },
         store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
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

     
      
          axios.post(this.$apiAdress+'/api/encuesta/almacenar?token='+localStorage.getItem("api_token"), self.form
      ) 
            .then(function (response) {
                    console.log(response.data)
            alert.response200("¡Registro guardado exitosamente!", "");
            self.clearForm()
            self.submitted = false; 

      }) 
            .catch(function(error) {
                self.submitted = false;
              self.form.servicio=self.form.val_ant_serv
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          self.errors = alert.responseCatch(error, 'Code #1009');
            });
        }
      });
    },
    }
}
</script>