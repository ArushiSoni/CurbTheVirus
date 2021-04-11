import axios from 'axios';

const API_BASE_URL = "/api/v1/";

class DonorService {

	validatePerson(emailId, password){
		return axios.get(API_BASE_URL + "person/" + emailId + "/" +password)
	}

	deletePersonDetails(emailId){
		return axios.post(API_BASE_URL + "person/deletePerson/"+emailId)
	}
}

export default new DonorService();