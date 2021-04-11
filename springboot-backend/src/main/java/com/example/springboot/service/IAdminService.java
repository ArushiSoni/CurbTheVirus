package com.example.springboot.service;

import java.util.List;

import com.example.springboot.dto.DonorDTO;
import com.example.springboot.dto.SeekerDTO;

public interface IAdminService {
	List<DonorDTO> getAllDonors();

	String deleteUserDetails(String emailId);

	List<SeekerDTO> getAllSeekers();

	String deleteSeekerDetail(String emailId);
}