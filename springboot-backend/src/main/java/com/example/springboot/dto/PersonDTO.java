package com.example.springboot.dto;

import java.time.LocalDate;

public class PersonDTO {

	private Integer personId;
	private String email;
	private String password;
	private String role;
	private LocalDate registrationDate;
	private Integer deleted;

	public PersonDTO() {
	}

	public PersonDTO(Integer personId, String email, String password, String role, LocalDate registrationDate,
			Integer deleted) {
		super();
		this.personId = personId;
		this.email = email;
		this.password = password;
		this.role = role;
		this.registrationDate = registrationDate;
		this.deleted = deleted;
	}

	public PersonDTO(String email, String password, String role, Integer deleted) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
		this.deleted = deleted;
	}

	public Integer getPersonId() {
		return personId;
	}

	public void setPersonId(Integer personId) {
		this.personId = personId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public LocalDate getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
	}

	public Integer getDeleted() {
		return deleted;
	}

	public void setDeleted(Integer deleted) {
		this.deleted = deleted;
	}

	@Override
	public String toString() {
		return "Person [personId=" + personId + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", registrationDate=" + registrationDate + "]";
	}
}
