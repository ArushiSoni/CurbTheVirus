import axios from 'axios';

const ADMIN_API_BASE_URL = "/api/v1/";

class AdminService {
   
    getDonors(){
		return axios.get(ADMIN_API_BASE_URL + "admin_donorslist");
    }
    deleteUser(email) {
        return axios.delete(ADMIN_API_BASE_URL + '/admin_delete_donor/' + email);
    }
    getSeekers(){
      return axios.get(ADMIN_API_BASE_URL + "admin_seekerslist");
    }
    deleteSeeker(email) {
      return axios.delete(ADMIN_API_BASE_URL + '/admin_delete_seeker/' + email);
  }
}

export default new AdminService();