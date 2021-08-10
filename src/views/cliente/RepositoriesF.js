import "regenerator-runtime/runtime";
import axios from "axios";
import alert from '@/repositories/global/alert'

const urlAPIF= '/api/factura';
const updateRegFactura = async (self) => {
  self.submitted      = true
  self.spinner        = true
  self.errors         = null

	try {
    let response = await axios.post(self.$apiAdress+urlAPIF+'/actualizar/'+self.$route.params.id_factura+'?token='+localStorage.getItem("api_token"), self.form);
    return response.data
	}catch(error) {
    self.submitted    = false
    self.spinner      = false
    self.errors       = alert.responseCatch(error, 'Code #1009');
	}
}
const getFactura = async (self) => {
	try {
    let response = await axios.post(self.$apiAdress+urlAPIF+'/get/'+self.$route.params.id_factura+'?token='+localStorage.getItem("api_token"));
		return response.data
	}catch(error) {
		alert.responseCatch(error, 'Code #1012')
	}
}
export default ({
  updateRegFactura,
  getFactura
});