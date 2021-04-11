package com.example.springboot.service;

import com.example.springboot.dto.PersonDTO;

public interface IPersonService {

	PersonDTO searchByEmailId(String emailId);

	Boolean deletePersonDetails(String emailId);

	String validatePerson(String emailId, String password);

}
