package com.example.springboot.service;

import java.util.List;

import com.example.springboot.dto.DonorDTO;
import com.example.springboot.dto.DonorDetailsAfterMatchingDTO;
import com.example.springboot.dto.DonorDetailsBeforeMatchingDTO;
import com.example.springboot.dto.SeekerDTO;

public interface ISeekerService {

	List<DonorDetailsBeforeMatchingDTO> seekerGetAllDonors(String emailId);

	List<DonorDTO> getAllDonorsByBloodGroup(String bloodGroup);

	List<DonorDTO> getAllDonorsByStateName(String stateName);

	List<DonorDTO> getAllDonorsByBloodGroupAndStateName(String bloodGroup, String stateName);

	String deleteSeekerDetails(String emailId);

	SeekerDTO getSeekerDetails(String emailId);

	Boolean updateSeekerDetails(SeekerDTO donor);
	
	Boolean createNewSeeker(SeekerDTO seeker);

	DonorDetailsAfterMatchingDTO donorInfoAfterAcceptance(String donorEmail);

	List<DonorDetailsBeforeMatchingDTO> seekerGetAllRequestedDonors(String emailId);
}
