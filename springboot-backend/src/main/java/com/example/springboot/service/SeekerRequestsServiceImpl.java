package com.example.springboot.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.repository.SeekerRequestsRepository;

@Service
@Transactional
public class SeekerRequestsServiceImpl implements ISeekerRequestsService {

	@Autowired
	private SeekerRequestsRepository seekerRequestsRepository;

	@Override
	public void cancelRequest(String seekerEmail, String donorEmail) {
		seekerRequestsRepository.deleteBySeekerEmailAndDonorEmail(seekerEmail, donorEmail);
	}
	
	@Override
	public void deleteRequest(String donorEmail) {
		seekerRequestsRepository.deleteByDonorEmail(donorEmail);
		seekerRequestsRepository.deleteBySeekerEmail(donorEmail);
		
	}

}
