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

import com.example.springboot.dto.DonorDTO;
import com.example.springboot.dto.ResponseDTO;
import com.example.springboot.model.Donor;
import com.example.springboot.model.Person;
import com.example.springboot.repository.DonorRepository;
import com.example.springboot.repository.PersonRepository;
import com.example.springboot.service.IDonorService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class DonorController {

	@Autowired
	private IDonorService donorService;

	@Autowired
	private DonorRepository donorRepository;

	@Autowired
	private PersonRepository personRepository;

	@GetMapping("/donors/{emailId}")
	public ResponseEntity<?> searchByEmailId(@PathVariable String emailId) {
		return ResponseEntity.ok(new ResponseDTO<>(donorService.searchByEmailId(emailId)));
	}


	@PostMapping("/donor")
	public ResponseEntity<?> createDonor(@RequestBody DonorDTO donor) {

		System.out.println(personRepository.existsByEmail(donor.getEmail()));
		if (personRepository.existsByEmail(donor.getEmail()) == true) {
			Person persistentPerson = personRepository.findByEmail(donor.getEmail());
			System.out.println(persistentPerson.getDeleted());
			if (persistentPerson.getDeleted() == 1) {
				donorService.createNewDonor(donor);
				return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(false));
			} else {
				System.out.println("Donor Already exists");
				return ResponseEntity.ok(ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false));
				
			}
		} else {

			Person p = new Person(donor.getEmail(), donor.getPassword(), "DONOR", 0);
			Donor d = new Donor(donor.getFirstName(), donor.getLastName(), donor.getPhoneNumber(),
					donor.getBloodGroup(), donor.getAge(), donor.getLabConfirmedCovid(), donor.getLastSymptomDate(),
					donor.getpast14Days(), donor.getfollowUpNegReport(), donor.getVaccineReceived(),
					donor.getAvailability(), donor.getstateName(), donor.getEmail(), donor.getPerson());

			d.setPerson(p);
			donorRepository.save(d);
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(false));

		}

	}

	@PostMapping("/editDonor")
	public ResponseEntity<?> updateDonorDetails(@RequestBody DonorDTO donor) {
		Boolean update = donorService.updateDonorDetails(donor);
		if (update == true) {
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(true));
		} else {
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.FAILED_DEPENDENCY).body(false));
		}
	}

	@GetMapping("/requestsReceived/{emailId}")
	public ResponseEntity<?> requestsReceived(@PathVariable String emailId) {
		System.out.println(donorService.requestsReceived(emailId));
		return ResponseEntity.ok(new ResponseDTO<>(donorService.requestsReceived(emailId)));
	}

	@PostMapping("donorAccepOrReject/{seekerEmail}/{donorEmail}/{value}")
	public ResponseEntity<?> donorAccepOrReject(@PathVariable String seekerEmail, @PathVariable String donorEmail,
			@PathVariable Integer value) {
		donorService.donorAccepOrReject(seekerEmail, donorEmail, value);
		return null;
	}

	@GetMapping("seekerInfoAfterAcceptance/{seekerEmail}")
	public ResponseEntity<?> seekerInfoAfterAcceptance(@PathVariable String seekerEmail) {
		return ResponseEntity.ok(new ResponseDTO<>(donorService.seekerInfoAfterAcceptance(seekerEmail)));
	}

}
