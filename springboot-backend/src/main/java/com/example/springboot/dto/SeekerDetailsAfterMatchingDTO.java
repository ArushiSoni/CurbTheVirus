package com.example.springboot.dto;

import java.time.LocalDate;

public class SeekerDetailsAfterMatchingDTO {

	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String bloodGroup;
	private Integer age;
	private Integer labConfirmedCovid;
	private LocalDate testDate;
	private String stateName;
	private Integer seekingRightNow;
	private String email;

	public SeekerDetailsAfterMatchingDTO() {
	}

	public SeekerDetailsAfterMatchingDTO(String firstName, String lastName, String phoneNumber, String bloodGroup,
			Integer age, Integer labConfirmedCovid, LocalDate testDate, String stateName, Integer seekingRightNow,
			String email) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.bloodGroup = bloodGroup;
		this.age = age;
		this.labConfirmedCovid = labConfirmedCovid;
		this.testDate = testDate;
		this.stateName = stateName;
		this.seekingRightNow = seekingRightNow;
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

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
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

	public Integer getLabConfirmedCovid() {
		return labConfirmedCovid;
	}

	public void setLabConfirmedCovid(Integer labConfirmedCovid) {
		this.labConfirmedCovid = labConfirmedCovid;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "SeekerDetailsAfterMatchingDTO [firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber="
				+ phoneNumber + ", bloodGroup=" + bloodGroup + ", age=" + age + ", labConfirmedCovid="
				+ labConfirmedCovid + ", testDate=" + testDate + ", stateName=" + stateName + ", seekingRightNow="
				+ seekingRightNow + ", email=" + email + "]";
	}

}
