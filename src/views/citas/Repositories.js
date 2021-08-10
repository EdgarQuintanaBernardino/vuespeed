import "regenerator-runtime/runtime";
import axios from "axios";
import alert from '@/repositories/global/alert'
let prueba= 'http://192.168.100.32'
//let prueba= 'http://127.0.0.1:8000';
const urlAPI = '/api/cita';

const updateRegistro = async (self) => {
  self.submitted      = true
  self.spinner        = true
  self.errors         = null

	try {
    let response = await axios.post(self.$apiAdress+urlAPI+'/actualizar/'+self.$route.params.id+'?token='+localStorage.getItem("api_token"), self.form);
    return response.data
	}catch(error) {
    self.submitted    = false
    self.spinner      = false
    self.errors       = alert.responseCatch(error, 'Code #1009');
	}
}
const getRegistrolista = async (self) => {
	try {
    let response = await axios.post(self.$apiAdress+urlAPI+'/get/'+self.$route.params.id+'?token='+localStorage.getItem("api_token"));
		return response.data
	}catch(error) {
		alert.responseCatch(error, 'Code #1012')
	}
}
const getRegistro = async (self) => {
	try {
    let response = await axios.post(self.$apiAdress+urlAPI+'/month/'+self.$route.params.id+'?token='+localStorage.getItem("api_token"));
		return response.data
	}catch(error) {
		alert.responseCatch(error, 'Code #1012')
	}
}
const getCitaProx = async (self) => {
	try {
    let response = await axios.post(self.$apiAdress+urlAPI+'/show/'+self.$route.params.id+'?token='+localStorage.getItem("api_token"));
		return response.data
	}catch(error) {
		alert.responseCatch(error, 'Code #1012')
	}
}

const getMes = async(request) => {


  let tokenin =localStorage.getItem("api_token");

  let configin = {
      headers: { Authorization: `Bearer ${tokenin}` }
  };
  let result = await axios.post(prueba+urlAPI+'/month', request, configin).then((res) => {
      return res.data;
  }).catch((error) => {
      let respuesta = JSON.stringify(error)
      return JSON.parse(respuesta);
  });
  return result;
}
const Update_Day = async(request) => {


  let tokenin =localStorage.getItem("api_token");

  let configin = {
      headers: { Authorization: `Bearer ${tokenin}` }
  };
  let result = await axios.post(prueba+urlAPI+'/update_day', request, configin).then((res) => {
      return res.data;
  }).catch((error) => {
      let respuesta = JSON.stringify(error)
      return JSON.parse(respuesta);
  });
  return result;
}
export default ({
  updateRegistro,
  getRegistro,
  getMes,
  Update_Day,
  getCitaProx,
  getRegistrolista

});