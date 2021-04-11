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

import com.example.springboot.dto.ResponseDTO;
import com.example.springboot.dto.SeekerDTO;
import com.example.springboot.model.Person;
import com.example.springboot.model.Seeker;
import com.example.springboot.model.SeekerRequests;
import com.example.springboot.repository.PersonRepository;
import com.example.springboot.repository.SeekerRepository;
import com.example.springboot.repository.SeekerRequestsRepository;
import com.example.springboot.service.ISeekerRequestsService;
import com.example.springboot.service.ISeekerService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class SeekerController {

	static final Integer REQUST_MADE = 1;

	@Autowired
	private ISeekerService seekerService;

	@Autowired
	private ISeekerRequestsService seekerRequestsService;

	@Autowired
	private PersonRepository personRepository;

	@Autowired
	private SeekerRepository seekerRepository;

	@Autowired
	private SeekerRequestsRepository seekerRequestsRepository;

	@GetMapping("/seeker/{emailId}")
	public ResponseEntity<?> searchByEmailId(@PathVariable String emailId) {
		return ResponseEntity.ok(new ResponseDTO<>(seekerService.getSeekerDetails(emailId)));
	}

	@PostMapping("/seeker")
	public ResponseEntity<?> createSeeker(@RequestBody SeekerDTO seeker) {

		if (personRepository.existsByEmail(seeker.getEmail())) {
			Person persistentPerson = personRepository.findByEmail(seeker.getEmail());
			if (persistentPerson.getDeleted() == 0) {
				return ResponseEntity.ok(ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false));
			} else {
				seekerService.createNewSeeker(seeker);
				return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(false));
			}
		} else {
			System.out.println(seeker.getEmail() + "   " + seeker.getPassword());

			Person p = new Person(seeker.getEmail(), seeker.getPassword(), "SEEKER", 0);
			Seeker s = new Seeker(seeker.getFirstName(), seeker.getLastName(), seeker.getPhoneNumber(),
					seeker.getBloodGroup(), seeker.getAge(), seeker.getLabConfirmedCovid(), seeker.getTestDate(),
					seeker.getStateName(), seeker.getSeekingRightNow(), seeker.getEmail(), seeker.getPerson());

			s.setPerson(p);
			seekerRepository.save(s);
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(false));
		}
	}

	@PostMapping("/editSeeker")
	public ResponseEntity<?> updateSeekerDetails(@RequestBody SeekerDTO seeker) {

		Boolean update = seekerService.updateSeekerDetails(seeker);
		if (update == true) {
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(true));
		} else {
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.FAILED_DEPENDENCY).body(false));
		}
	}

	@GetMapping("/donorsForSeekerByBloodGroup/{bloodGroup}")
	public ResponseEntity<?> getAllDonorsByBloodGroup(@PathVariable String bloodGroup) {
		return ResponseEntity.ok(new ResponseDTO<>(seekerService.getAllDonorsByBloodGroup(bloodGroup)));
	}

	@GetMapping("/donorsForSeekerByStateName/{stateName}")
	public ResponseEntity<?> getAllDonorsByStateName(@PathVariable String stateName) {
		return ResponseEntity.ok(new ResponseDTO<>(seekerService.getAllDonorsByStateName(stateName)));
	}

	@GetMapping("/donorsForSeekerByBloodGroupAndStateName/{bloodGroup}/{stateName}")
	public ResponseEntity<?> getAllDonorsByBloodGroupAndStateName(@PathVariable String bloodGroup,
			@PathVariable String stateName) {
		return ResponseEntity
				.ok(new ResponseDTO<>(seekerService.getAllDonorsByBloodGroupAndStateName(bloodGroup, stateName)));
	}

	@GetMapping("/seekerGetAllDonors/{emailId}")
	public ResponseEntity<?> seekerGetAllDonors(@PathVariable String emailId) {
		return ResponseEntity.ok(new ResponseDTO<>(seekerService.seekerGetAllDonors(emailId)));
	}

	@PostMapping("seekerSendRequestToDonor/{seekerEmail}/{donorEmail}")
	public ResponseEntity<?> seekerSendRequestToDonor(@PathVariable String seekerEmail,
			@PathVariable String donorEmail) {
		if (seekerRequestsRepository.existsByDonorEmailAndSeekerEmail(donorEmail, seekerEmail)) {
			return ResponseEntity.ok(ResponseEntity.status(HttpStatus.CONFLICT).body(false));
		} else {
			SeekerRequests seekerRequest = new SeekerRequests(seekerEmail, donorEmail, REQUST_MADE);
			seekerRequestsRepository.save(seekerRequest);
		}
		return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(false));
	}

	@GetMapping("donorInfoAfterAcceptance/{donorEmail}")
	public ResponseEntity<?> donorInfoAfterAcceptance(@PathVariable String donorEmail) {
		return ResponseEntity.ok(new ResponseDTO<>(seekerService.donorInfoAfterAcceptance(donorEmail)));
	}

	@GetMapping("seekerGetAllRequestedDonors/{seekerEmail}")
	public ResponseEntity<?> seekerGetAllRequestedDonors(@PathVariable String seekerEmail) {
		return ResponseEntity.ok(new ResponseDTO<>(seekerService.seekerGetAllRequestedDonors(seekerEmail)));
	}

	@PostMapping("cancelRequest/{seekerEmail}/{donorEmail}")
	public ResponseEntity<?> cancelRequest(@PathVariable String seekerEmail, @PathVariable String donorEmail) {
		seekerRequestsService.cancelRequest(seekerEmail, donorEmail);
		return ResponseEntity.ok(ResponseEntity.status(HttpStatus.ACCEPTED).body(false));
	}

}
