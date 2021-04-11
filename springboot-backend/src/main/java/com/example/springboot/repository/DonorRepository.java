package com.example.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.Donor;

@Repository
public interface DonorRepository extends JpaRepository<Donor, Long>{
	
	Donor findByEmail(String emailId);
	String deleteByEmail(String emailId);
	List<Donor> findByBloodGroup(String bloodGroup);
	List<Donor> findByStateName(String stateName);
	List<Donor> findByBloodGroupAndStateName(String bloodGroup, String stateName);

}


