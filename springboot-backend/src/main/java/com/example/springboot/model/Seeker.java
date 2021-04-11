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
@Table(name = "seeker_info")
public class Seeker implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "seeker_id", columnDefinition = "INTEGER DEFAULT AUTOINCREMENT", insertable = false, nullable = false, updatable = false)
	private Integer seekerId;

	@Column(name = "first_name", length = 50)
	private String firstName;

	@Column(name = "last_name", length = 50)
	private String lastName;

	@Column(name = "phone_number", length = 10)
	private String phoneNumber;

	@Column(name = "registration_LocalDate", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@CreationTimestamp
	private LocalDate registrationDate;

	@Column(name = "blood_group", length = 3)
	private String bloodGroup;

	@Column(name = "age", length = 4)
	private Integer age;

	@Column(name = "lab_confirmed_covid", length = 1)
	private Integer labConfirmedCovid;

	@Column(name = "test_date")
	private LocalDate testDate;

	@Column(name = "state_name", length = 150)
	private String stateName;

	@Column(name = "seeking_right_now", length = 1)
	private Integer seekingRightNow;

	@Column(name = "seeker_email_id", length = 100)
	private String email;

	@OneToOne
	@MapsId
	@JoinColumn(name = "person_id")
	private Person person;

	public Seeker() {
	}

	public Seeker(String firstName, String lastName, String phoneNumber, String bloodGroup, Integer age,
			Integer labConfirmedCovid, LocalDate testDate, String stateName, Integer seekingRightNow, String email,
			Person person) {
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
		return "Seeker [firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber
				+ ", registrationDate=" + registrationDate + ", bloodGroup=" + bloodGroup + ", age=" + age
				+ ", labConfirmedCovid=" + labConfirmedCovid + ", testDate=" + testDate + ", stateName=" + stateName
				+ ", seekingRightNow=" + seekingRightNow + ", email=" + email + ", person=" + person + "]";
	}

}
