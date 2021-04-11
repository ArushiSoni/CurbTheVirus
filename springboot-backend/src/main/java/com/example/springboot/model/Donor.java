package com.example.springboot.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "donor_info")
public class Donor implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "donor_id", columnDefinition = "INTEGER DEFAULT AUTOINCREMENT", insertable = false, nullable = false, updatable = false)
	private Integer donorId;

	@Column(name = "first_name", length = 50, nullable = false)
	private String firstName;

	@Column(name = "last_name", length = 50, nullable = false)
	private String lastName;

	@Column(name = "phone_number", length = 10, nullable = false)
	private String phoneNumber;

	@Column(name = "registration_LocalDate", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@CreationTimestamp
	private LocalDate registrationDate;

	@Column(name = "blood_group", length = 3, nullable = false)
	private String bloodGroup;

	@Column(name = "age", length = 4, nullable = false)
	private Integer age;

	@Column(name = "lab_confirmed_covid", length = 1, nullable = false)
	private Integer labConfirmedCovid;

	@Column(name = "last_symptom_Date", nullable = false)
	private LocalDate lastSymptomDate;

	@Column(name = "past_14_days", nullable = false)
	private Integer past14Days;

	@Column(name = "follow_up_Neg_Report", length = 1, nullable = false)
	private Integer followUpNegReport;

	@Column(name = "vaccine_received", length = 1, nullable = false)
	private Integer vaccineReceived;

	@Column(name = "availability", length = 1, nullable = false)
	private Integer availability;

	@Column(name = "state_name", length = 150, nullable = false)
	private String stateName;

	@Column(name = "donor_email_id", length = 100, nullable = false)
	private String email;

	@OneToOne
	@MapsId
	@JoinColumn(name = "person_id")
	private Person person;

	public Donor() {
	}

	public Donor(String firstName, String lastName, String phoneNumber, String bloodGroup, Integer age,
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

	public Donor(String firstName, String lastName, String phoneNumber, LocalDate registrationDate, String bloodGroup,
			Integer age, Integer labConfirmedCovid, LocalDate lastSymptomDate, Integer past14Days,
			Integer followUpNegReport, Integer vaccineReceived, Integer availability, String stateName, String email,
			Person person) {
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
		this.person = person;
	}

	public Integer getDonorId() {
		return donorId;
	}

	public void setDonorId(Integer donorId) {
		this.donorId = donorId;
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

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Donor [firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber
				+ ", registrationDate=" + registrationDate + ", bloodGroup=" + bloodGroup + ", age=" + age
				+ ", labConfirmedCovid=" + labConfirmedCovid + ", lastSymptomDate=" + lastSymptomDate + ", past14Days="
				+ past14Days + ", followUpNegReport=" + followUpNegReport + ", vaccineReceived=" + vaccineReceived
				+ ", availability=" + availability + ", stateName=" + stateName + ", email=" + email + ", person="
				+ person + "]";
	}

}
