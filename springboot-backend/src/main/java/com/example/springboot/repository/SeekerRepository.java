package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.Seeker;

@Repository
public interface SeekerRepository extends JpaRepository<Seeker, Long>{
	
	Seeker findByEmail(String emailId);
	Seeker findByStateName(String emailId);

}


