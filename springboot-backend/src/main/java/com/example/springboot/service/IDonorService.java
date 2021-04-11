package com.example.springboot.service;

import java.util.List;

import com.example.springboot.dto.DonorDTO;
import com.example.springboot.dto.SeekerDetailsAfterMatchingDTO;
import com.example.springboot.dto.SeekerDetailsBeforeMatchingDTO;

public interface IDonorService {

	List<DonorDTO> getAllDonors();

	DonorDTO searchByEmailId(String emailId);

	DonorDTO searchByPersonId(Integer personId);

	Boolean updateDonorDetails(DonorDTO donor);
	
	Boolean createNewDonor(DonorDTO donor);

	List<SeekerDetailsBeforeMatchingDTO> requestsReceived(String emailId);

	SeekerDetailsAfterMatchingDTO seekerInfoAfterAcceptance(String seekerEmail);

	Boolean donorAccepOrReject(String seekerEmail, String donorEmail, Integer value);
}
