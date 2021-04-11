package com.example.springboot.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "admin_id")
	private Integer adminId;

	@Column(name = "admin_name", length = 10)
	private String name;

	@Column(name = "emailId", length = 100)
	private String email;

	@Column(nullable = false, name = "password")
	private String password;

	public Admin() {

	}

	public Admin(Integer adminId, String name, String email, String password) {
		super();
		this.adminId = adminId;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", name=" + name + ", email=" + email + ", password=" + password + "]";
	}

}
