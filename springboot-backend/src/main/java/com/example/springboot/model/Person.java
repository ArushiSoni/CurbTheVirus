package com.example.springboot.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "person")
public class Person implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "person_id", nullable = false)
	private Integer personId;

	@Column(name = "emailId", nullable = false, length = 50, unique = true)
	private String email;

	@Column(nullable = false, name = "password")
	private String password;

	@Column(name = "Role", length = 6)
	private String role;

	@Column(name = "registration_date", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@CreationTimestamp
	private LocalDate registrationDate;

	@OneToOne(mappedBy = "person")
	private Donor donor;

	@OneToOne(mappedBy = "person")
	private Seeker seeker;

	@Column(name = "deleted", columnDefinition = "INTEGER DEFAULT 0", nullable = false)
	private Integer deleted;

	public Person() {
	}

	public Person(String email, String password, String role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public Person(Integer personId, String email, String password, String role, LocalDate registrationDate) {
		super();
		this.personId = personId;
		this.email = email;
		this.password = password;
		this.role = role;
		this.registrationDate = registrationDate;
	}

	public Person(String email, String password, String role, Integer deleted) {
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Person [personId=" + personId + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", registrationDate=" + registrationDate + ", donor=" + donor + ", deleted=" + deleted + "]";
	}

}
