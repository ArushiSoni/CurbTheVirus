package com.example.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.dto.PersonDTO;
import com.example.springboot.model.Person;
import com.example.springboot.repository.PersonRepository;
import com.example.springboot.service.IPersonService;
import com.example.springboot.service.ISeekerRequestsService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {

	@Autowired
	private PersonRepository personRepository;

	@Autowired
	private IPersonService personService;
	
	@Autowired
	private ISeekerRequestsService seekerRequestsService;

	@GetMapping("/person/{emailId}/{password}")
	public ResponseEntity<?> valiadateUser(@PathVariable String emailId, @PathVariable String password) {
		String user = personService.validatePerson(emailId, password);
		System.out.println("User" + user);
		if (user == "0") {
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.NOT_FOUND).body(false));
		} else {
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.OK).body(user));
		}
	}

	@PostMapping("person/deletePerson/{emailId}")
	public ResponseEntity<?> deleteUser(@PathVariable String emailId) {
		personService.deletePersonDetails(emailId);
		seekerRequestsService.deleteRequest(emailId);
		
		return null;
	}

	@PostMapping("/seeker/{role}")
	public Person createDonor(@RequestBody PersonDTO person, @PathVariable String role) {
		System.out.println("Donor Data: " + person + "     " + role);
		Person p = new Person(person.getEmail(), person.getPassword(), role);
		if (role.equalsIgnoreCase("seeker")) {

			return personRepository.save(p);
		} else {
			return null;
		}

	}
}
