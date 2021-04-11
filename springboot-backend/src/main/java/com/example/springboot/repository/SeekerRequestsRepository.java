package com.example.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.SeekerRequests;

@Repository
public interface SeekerRequestsRepository extends JpaRepository<SeekerRequests, Integer>{
	
	List<SeekerRequests> findAllByDonorEmail(String donorEmailId);
	List<SeekerRequests> findAllBySeekerEmail(String seekerEmailId);
	SeekerRequests findByDonorEmail(String donorEmailId);
	SeekerRequests findDistinctByDonorEmail(String donorEmailId);
	SeekerRequests findOneByDonorEmail(String donorEmail);
	SeekerRequests findByDonorEmailAndSeekerEmail(String donorEmail, String seekerEmail);
	Boolean existsByDonorEmailAndSeekerEmail(String donorEmail, String seekerEmail);
	void deleteBySeekerEmailAndDonorEmail(String seekerEmail, String donorEmail);
	void deleteByDonorEmail(String donorEmail);
	void deleteBySeekerEmail(String donorEmail);


}


