package com.example.springboot.dto;

import java.time.LocalDate;

public class DonorDetailsAfterMatchingDTO {

	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String bloodGroup;
	private Integer age;
	private Integer labConfirmedCovid;
	private LocalDate lastSymptomDate;
	private Integer past14Days;
	private Integer followUpNegReport;
	private Integer vaccineReceived;
	private Integer availability;
	private String stateName;
	private String email;
	private Integer requestStatus;

	public DonorDetailsAfterMatchingDTO() {
	}

	public DonorDetailsAfterMatchingDTO(String firstName, String lastName, String phoneNumber, String bloodGroup,
			Integer age, Integer labConfirmedCovid, LocalDate lastSymptomDate, Integer past14Days,
			Integer followUpNegReport, Integer vaccineReceived, Integer availability, String stateName, String email,
			Integer requestStatus) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.bloodGroup = bloodGroup;
		this.age = age;
		this.labConfirmedCovid = labConfirmedCovid;
		this.lastSymptomDate = lastSymptomDate;
		this.past14Days = past14Days;
		this.followUpNegReport = followUpNegReport;
		this.vaccineReceived = vaccineReceived;
		this.availability = availability;
		this.stateName = stateName;
		this.email = email;
		this.requestStatus = requestStatus;
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

	public LocalDate getLastSymptomDate() {
		return lastSymptomDate;
	}

	public void setLastSymptomDate(LocalDate lastSymptomDate) {
		this.lastSymptomDate = lastSymptomDate;
	}

	public Integer getPast14Days() {
		return past14Days;
	}

	public void setPast14Days(Integer past14Days) {
		this.past14Days = past14Days;
	}

	public Integer getFollowUpNegReport() {
		return followUpNegReport;
	}

	public void setFollowUpNegReport(Integer followUpNegReport) {
		this.followUpNegReport = followUpNegReport;
	}

	public Integer getVaccineReceived() {
		return vaccineReceived;
	}

	public void setVaccineReceived(Integer vaccineReceived) {
		this.vaccineReceived = vaccineReceived;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(Integer requestStatus) {
		this.requestStatus = requestStatus;
	}

	@Override
	public String toString() {
		return "DonorDetailsAfterMatchingDTO [firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber="
				+ phoneNumber + ", bloodGroup=" + bloodGroup + ", age=" + age + ", labConfirmedCovid="
				+ labConfirmedCovid + ", lastSymptomDate=" + lastSymptomDate + ", past14Days=" + past14Days
				+ ", followUpNegReport=" + followUpNegReport + ", vaccineReceived=" + vaccineReceived
				+ ", availability=" + availability + ", stateName=" + stateName + ", email=" + email
				+ ", requestStatus=" + requestStatus + "]";
	}

}
