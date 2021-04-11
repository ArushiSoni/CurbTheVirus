package com.example.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.dto.ResponseDTO;
import com.example.springboot.service.IAdminService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	@Autowired
	private IAdminService adminService;
	
	
	
	@GetMapping("/admin_donorslist")
	public ResponseEntity<?> getAllDonors() {
		return ResponseEntity.ok(new ResponseDTO<>(adminService.getAllDonors()));
	}
	
	// REST request handling method to delete user details
		@DeleteMapping("/admin_delete_donor/{emailId}")
		public ResponseEntity<?> deleteUserDetails(@PathVariable String emailId) {
			try {
				return ResponseEntity.ok(new ResponseDTO<>(adminService.deleteUserDetails(emailId)));
			} catch (RuntimeException e) {
				return new ResponseEntity<>(new ResponseDTO<>("User details deletion failed"),
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	
		
		@GetMapping("/admin_seekerslist")
		public ResponseEntity<?> getAllSeekers() {
			System.out.println("in get all Seekers");
			return ResponseEntity.ok(new ResponseDTO<>(adminService.getAllSeekers()));
		}
		
		// REST request handling method to delete user details
			@DeleteMapping("/admin_delete_seeker/{emailId}")
			public ResponseEntity<?> deleteSeekerDetail(@PathVariable String emailId) {
				try {
					return ResponseEntity.ok(new ResponseDTO<>(adminService.deleteSeekerDetail(emailId)));
				} catch (RuntimeException e) {
					return new ResponseEntity<>(new ResponseDTO<>("User details deletion failed"),
							HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}	
		
}
