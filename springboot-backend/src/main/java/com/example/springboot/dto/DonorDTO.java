package com.example.springboot.dto;

import java.time.LocalDate;

import com.example.springboot.model.Person;

public class DonorDTO {

	private String firstName;
	private String lastName;
	private String phoneNumber;
	private LocalDate registrationDate;
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
	private String password;
	private Person person;
	private Integer requestStatus;

	public DonorDTO() {
	}

	public DonorDTO(String firstName, String lastName, String bloodGroup, Integer age, LocalDate lastSymptomDate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.bloodGroup = bloodGroup;
		this.age = age;
		this.lastSymptomDate = lastSymptomDate;
	}

	public DonorDTO(String firstName, String lastName, String phoneNumber, String bloodGroup, Integer age,
			Integer labConfirmedCovid, LocalDate lastSymptomDate, Integer past14Days, Integer followUpNegReport,
			Integer vaccineReceived, Integer availability, String stateName, String email, Person person) {
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
		this.person = person;
	}

	public DonorDTO(String firstName, String lastName, String phoneNumber, LocalDate registrationDate,
			String bloodGroup, Integer age, Integer labConfirmedCovid, LocalDate lastSymptomDate, Integer past14Days,
			Integer followUpNegReport, Integer vaccineReceived, Integer availability, String stateName, String email,
			String password, Person person) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.registrationDate = registrationDate;
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
		this.password = password;
		this.person = person;
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

	public LocalDate getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
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

	public Integer getpast14Days() {
		return past14Days;
	}

	public void setpast14Days(Integer past14Days) {
		this.past14Days = past14Days;
	}

	public Integer getfollowUpNegReport() {
		return followUpNegReport;
	}

	public void setfollowUpNegReport(Integer followUpNegReport) {
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

	public String getstateName() {
		return stateName;
	}

	public void setstateName(String stateName) {
		this.stateName = stateName;
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

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	@Override
	public String toString() {
		return "DonorDTO [firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber
				+ ", registrationDate=" + registrationDate + ", bloodGroup=" + bloodGroup + ", age=" + age
				+ ", labConfirmedCovid=" + labConfirmedCovid + ", lastSymptomDate=" + lastSymptomDate + ", past14Days="
				+ past14Days + ", followUpNegReport=" + followUpNegReport + ", vaccineReceived=" + vaccineReceived
				+ ", availability=" + availability + ", stateName=" + stateName + ", email=" + email + ", password="
				+ password + ", person=" + person + "]";
	}

	public Integer getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(Integer requestStatus) {
		this.requestStatus = requestStatus;
	}

}
