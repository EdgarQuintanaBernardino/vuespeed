<template>
    <CRow>
              <CCol sm="">

      <div class="col-xs-6" id="app">
 
  <div class="form-group">
    <label for="make">Marca *</label>
    <select class="form-control" name="make" id="make" v-model="form.make">
      <option :value="null" disabled selected>Selecciona marca</option>
      <option v-for="option in makes_options" v-bind:value="option.id" v-bind:key="option.text">{{option.text}}</option>
    </select>
  </div>

</div>

              </CCol>
      
<CCol sm="">
                <div class="form-group">
    <label for="model">Modelo *</label>
    <select class="form-control" name="model" id="form.model" v-model="form.model" >
      <option :value="null" disabled selected>Selecciona modelo</option>
      <option v-for="option in model_options[form.make]" v-bind:value="option.id" v-bind:key="option.id">{{option.text}}</option>
    </select>
  </div>
  </CCol>
        </CRow>

             
</template>
 
<script>
 
// Importo el componente 'Datos' 
import ListaMarcas from './ListaMarcas'
 
export default {
  name: 'App',
  components: {
    ListaMarcas
  },
  data(){
    return{
           form: this.getEmptyForm(),
      heading: "Marcas y modelos",
     make: [],
      model: [],

      makes_options: [
      {
        text: "Honda",
        id: "Honda"
      },
      {
        text: "Toyota",
        id: 2
      },
      {
        text: "Nissan",
        id: 3
      },
      {
        text: "Suzuki",
        id: 4
      },
      {
        text: "Chevrolet",
        id: 5
      },
      {
        text: "Audi",
        id: 6
      },
      {
        text: "Bmw",
        id: 7
      },
      {
        text: "Ford",
        id: 8
      },
      {
        text: "Ferrari",
        id: 9
      },
      {
        text: "Mazda",
        id: 10
      },
      {
        text: "Fiat",
        id: 11
      },
      {
        text: "Citroen",
        id: 12
      }
    ],
    model_options: {
      "Honda": [
        {
          text: "Accord",
          id: "Accord"
        },
        {
          text: "Civic",
          id: "Civic"
        }
      ],
      2: [
        {
          text: "Corolla",
          id: 1
        },
        {
          text: "Hi Ace",
          id: 2
        }
      ],
      3: [
        {
          text: "Altima",
          id: 1
        },
        {
          text: "Zuke",
          id: 2
        }
      ],
      4: [
        {
          text: "Alto",
          id: 1
        },
        {
          text: "Swift",
          id: 2
        }
      ],
      5: [
        {
          text: "Aveo",
          id: 1
        },
        {
          text: "Camaro",
          id: 2
        }
      ],
      6: [
        {
          text: "A7 Sportback",
          id: 1
        },
        {
          text: "Audi Q3",
          id: 2
        }
      ],
      7: [
        {
          text: "Serie 5",
          id: 1
        },
        {
          text: "Bmw i8",
          id: 2
        }
      ],
      8: [
        {
          text: "Focus",
          id: 1
        },
        {
          text: "Mustang",
          id: 2
        }
      ],
      9: [
        {
          text: "812 Superfast",
          id: 1
        },
        {
          text: "Roma",
          id: 2
        }
      ],
      10: [
        {
          text: "Mazda 3",
          id: 1
        },
        {
          text: "Mazda CX-5",
          id: 2
        }
      ],
      11: [
        {
          text: "Xsara",
          id: 1
        },
        {
          text: "Picasso",
          id: 2
        }
      ],
      12: [
        {
          text: "Strada",
          id: 1
        },
        {
          text: "Furgon",
          id: 2
        }
      ],
    }
    
  }
  
    },
    methods:{
       getEmptyForm() {
      return {
        make: "",
        model: "",
      }
       },
         
 store(){
      Swal.fire({
        icon: "info",
        title: "¿Estás seguro que quieres guardar el registro",
        html:
          "Enviaras toda la información relacionada a este registro a la base de datos."  +"\n"+"<br/> Nombre:"+this.form.cliente.text+"\n"+"<br/> Placas:"+this.form.placas+"\n"+"<br/> Vin/No.chasis:"+this.form.n_chasis
           +"\n"+"<br/> Marca:"+this.form.make +"\n"+"<br/> Modelo:"+this.form.model +"\n"+"<br/> Categoria:"+this.form.categoria.value
            +"\n"+"<br/> Año:"+this.form.año +"\n"+"<br/> No.motor:"+this.form.n_motor +"\n"+"<br/> Color:"+this.form.color
             +"\n"+"<br/> Engomado:"+this.form.engomado.value +"\n"+"<br/> Marca de motor:"+this.form.marca_motor +"\n"+"<br/> Transmisión:"+this.form.transmision.value,
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        confirmButtonColor: "#CB3234",
        cancelButtonText: `Cancelar`
      }).then(result => {
        if (result.isConfirmed) {
         
 let self = this;
      self.submitted = true;
      self.errors = [];
      self.form.val_ant_cli = self.form.cliente;
      self.form.cliente = self.form.cliente.value;

      self.form.val_ant_cat = self.form.categoria;
      self.form.categoria = self.form.categoria.value;

      self.form.val_ant_eng = self.form.engomado;
      self.form.engomado = self.form.engomado.value;

      self.form.val_ant_tra = self.form.transmision;
      self.form.transmision = self.form.transmision.value;


        axios
        .post(
          this.$apiAdress +
            "/api/vehiculo/almacenar?token=" +
            localStorage.getItem("api_token"),
          self.form
        )
            .then(function(response) {
           alert.response200("¡Registro guardado exitosamente!", "");
          self.clearForm();
        
          self.submitted = false;
              
            })
            
            .catch(function(error) {
              self.submitted = false;
          self.form.cliente = self.form.val_ant_cli;
          self.form.categoria = self.form.val_ant_cat;
          self.form.engomado = self.form.val_ant_eng;
          self.form.transmision = self.form.val_ant_tra;
          self.errors = alert.responseCatch(error, "Code #1009");
            });
        }
      });
    },

    }
  }
  
</script>