package com.example.springboot.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.springboot.dto.PersonDTO;
import com.example.springboot.model.Person;
import com.example.springboot.repository.PersonRepository;

@Service
@Transactional
public class PersonServiceImpl implements IPersonService {

	@Autowired
	private PersonRepository personRepository;

	@Override
	public PersonDTO searchByEmailId(String emailId) {
		Person persistentPerson = personRepository.findByEmail(emailId);
		PersonDTO dto = new PersonDTO();
		BeanUtils.copyProperties(persistentPerson, dto);
		return dto;
	}

	@Override
	public Boolean deletePersonDetails(String emailId) {
		Person persistentPerson = personRepository.findByEmail(emailId);
		persistentPerson.setDeleted(1);
		BeanUtils.copyProperties(persistentPerson, persistentPerson);
		return null;
	}

	@Override
	public String validatePerson(String emailId, String password) {
		Person persistentPerson = personRepository.findByEmailAndPassword(emailId, password);
		if (persistentPerson != null) {
			if (searchByEmailId(emailId).getDeleted() == 0) {
				return persistentPerson.getRole();
			} else {
				return "0";
			}

		} else {
			return "0";
		}
	}

}
