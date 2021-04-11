package com.example.springboot.dto;

import java.time.LocalDate;

public class DonorDetailsBeforeMatchingDTO {

	private String email;
	private String firstName;
	private String lastName;
	private String bloodGroup;
	private Integer age;
	private LocalDate lastSymptomDate;
	private Integer availability;
	private String stateName;
	private Integer requestStatus;

	public DonorDetailsBeforeMatchingDTO() {

	}

	public DonorDetailsBeforeMatchingDTO(String email, String firstName, String lastName, String bloodGroup,
			Integer age, String stateName, LocalDate lastSymptomDate) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.bloodGroup = bloodGroup;
		this.age = age;
		this.stateName = stateName;
		this.lastSymptomDate = lastSymptomDate;

	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public LocalDate getLastSymptomDate() {
		return lastSymptomDate;
	}

	public void setLastSymptomDate(LocalDate lastSymptomDate) {
		this.lastSymptomDate = lastSymptomDate;
	}

	public Integer getAvailability() {
		return availability;
	}

	public void setAvailability(Integer availability) {
		this.availability = availability;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public Integer getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(Integer requestStatus) {
		this.requestStatus = requestStatus;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "DonorDetailsBeforeMatchingDTO [emailId=" + email + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", bloodGroup=" + bloodGroup + ", age=" + age + ", lastSymptomDate=" + lastSymptomDate
				+ ", availability=" + availability + ", stateName=" + stateName + ", requestStatus=" + requestStatus
				+ "]";
	}

}
