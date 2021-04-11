package com.example.springboot.dto;

import java.time.LocalDate;

public class SeekerDetailsBeforeMatchingDTO {

	private String email;
	private String firstName;
	private String lastName;
	private String bloodGroup;
	private Integer age;
	private LocalDate testDate;
	private String stateName;
	private Integer seekingRightNow;
	private Integer requestStatus;

	public SeekerDetailsBeforeMatchingDTO() {
	}

	public SeekerDetailsBeforeMatchingDTO(String email, String firstName, String lastName, String bloodGroup,
			Integer age, LocalDate testDate, String stateName, Integer requestStatus) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.bloodGroup = bloodGroup;
		this.age = age;
		this.testDate = testDate;
		this.stateName = stateName;
		this.requestStatus = requestStatus;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public LocalDate getTestDate() {
		return testDate;
	}

	public void setTestDate(LocalDate testDate) {
		this.testDate = testDate;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public Integer getSeekingRightNow() {
		return seekingRightNow;
	}

	public void setSeekingRightNow(Integer seekingRightNow) {
		this.seekingRightNow = seekingRightNow;
	}

	public Integer getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(Integer requestStatus) {
		this.requestStatus = requestStatus;
	}

	@Override
	public String toString() {
		return "SeekerDetailsBeforeMatchingDTO [email=" + email + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", bloodGroup=" + bloodGroup + ", age=" + age + ", testDate=" + testDate + ", stateName=" + stateName
				+ ", seekingRightNow=" + seekingRightNow + ", requestStatus=" + requestStatus + "]";
	}

}
