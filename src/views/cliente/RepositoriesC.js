import "regenerator-runtime/runtime";
import axios from "axios";
import alert from '@/repositories/global/alert'

const urlAPIC= '/api/credito';
const updateRegCredito = async (self) => {
  self.submitted      = true
  self.spinner        = true
  self.errors         = null

	try {
    let response = await axios.post(self.$apiAdress+urlAPIC+'/actualizar/'+self.$route.params.id+'?token='+localStorage.getItem("api_token"), self.form);
    return response.data
	}catch(error) {
    self.submitted    = false
    self.spinner      = false
    self.errors       = alert.responseCatch(error, 'Code #1009');
	}
}
export default ({
  updateRegCredito,
  
});