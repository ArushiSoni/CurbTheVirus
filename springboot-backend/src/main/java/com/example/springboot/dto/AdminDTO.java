package com.example.springboot.dto;

public class AdminDTO {

	private Integer adminId;
	private String name;
	private String emailId;
	private String password;

	public AdminDTO() {
		System.out.println("in Admin contr");
	}

	public AdminDTO(Integer adminId, String name, String emailId, String password) {
		super();
		this.adminId = adminId;
		this.name = name;
		this.emailId = emailId;
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

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "AdminDTO [adminId=" + adminId + ", name=" + name + ", emailId=" + emailId + ", password=" + password
				+ "]";
	}

}
