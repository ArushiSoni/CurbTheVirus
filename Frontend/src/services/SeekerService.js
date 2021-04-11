import axios from 'axios';

const API_BASE_URL = "/api/v1/";

class SeekerService {

	seekerGetAllDonors(emailId){
		// console.log("i was here");
		return axios.get(API_BASE_URL + "/seekerGetAllDonors/"+emailId);
	}

	getSeeker(emailId){
		// console.log(API_BASE_URL + "seeker/"+ emailId);
		return axios.get(API_BASE_URL + "seeker/"+ emailId);
	}

	deletePersonDetails(emailId){
		return axios.post(API_BASE_URL + "person/deleteDonor/"+emailId)
	}

	createSeeker(seeker){
		return axios.post(API_BASE_URL + "seeker", seeker);
	}

	editSeekerDetails(seeker){
		return axios.post(API_BASE_URL + "editSeeker", seeker);
	}

	getDonorsForSeekerByBloodGroup(bloodGroup){
		return axios.get(API_BASE_URL + "donorsForSeekerByBloodGroup/"+bloodGroup);
	}

	getDonorsForSeekerByStateName(stateName){
		return axios.get(API_BASE_URL + "donorsForSeekerByStateName/"+stateName);
	}

	getDonorsForSeekerByBloodGroupAndStateName(bloodGroup,stateName){
		return axios.get(API_BASE_URL + "donorsForSeekerByBloodGroupAndStateName/"+bloodGroup+'/'+stateName);
	}
	seekerSendRequestToDonor(seekerEmail, donorEmail){
		return axios.post(API_BASE_URL+ "seekerSendRequestToDonor/"+ seekerEmail+"/"+donorEmail)
	}

	getDonorInfoAfterAcceptance(donorEmail){
		return axios.get(API_BASE_URL + "donorInfoAfterAcceptance/" + donorEmail);
	}

	seekerGetAllRequestedDonors(seekerEmail){
		return axios.get(API_BASE_URL + "seekerGetAllRequestedDonors/" + seekerEmail);
	}

	cancelRequest(seekerEmail, donorEmail){
		return axios.post(API_BASE_URL+ "cancelRequest/"+ seekerEmail+"/"+donorEmail)
	}
}

export default new SeekerService();