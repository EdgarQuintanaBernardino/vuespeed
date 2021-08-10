import "regenerator-runtime/runtime";
import axios from "axios";
import alert from '@/repositories/global/alert'
let prueba='http://192.168.100.32'
//let prueba= 'http://127.0.0.1:8000';
const urlAPI = '/api/citapasada';

const getCitaPas = async (self) => {
	try {
    let response = await axios.post(self.$apiAdress+urlAPI+'/show/'+self.$route.params.id+'?token='+localStorage.getItem("api_token"));
		return response.data
	}catch(error) {
		alert.responseCatch(error, 'Code #1012')
	}
}
export default ({
  getCitaPas,
});