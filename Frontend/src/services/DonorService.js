import axios from 'axios';

const API_BASE_URL = "/api/v1/";

class DonorService {

	createDonor(donor){
		return axios.post(API_BASE_URL + "donor", donor);
	}

	getDonor(emailId){
		return axios.get(API_BASE_URL + "donors/"+ emailId);
	}

	validatePerson(emailId, password){
		return axios.get(API_BASE_URL + "person/" + emailId + "/" +password)
	}

	editDonorDetails(donor){
		return axios.post(API_BASE_URL + "editDonor", donor);
	}

	deletePersonDetails(emailId){
		return axios.post(API_BASE_URL + "person/deleteDonor/"+emailId);
	}

	requestsReceived(emailId){
		return axios.get(API_BASE_URL + "requestsReceived/" +emailId);
	}

	donorAcceptOrReject(seekerEmail, donorEmail, value){
		return axios.post(API_BASE_URL + "donorAccepOrReject/" +seekerEmail + "/" + donorEmail + "/"+ value );
	}

	getSeekerInfoAfterAcceptance(seekerEmail){
		return axios.get(API_BASE_URL + "seekerInfoAfterAcceptance/"+seekerEmail);
	}
}

export default new DonorService();