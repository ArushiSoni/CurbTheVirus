package com.example.springboot.dto;

import java.io.Serializable;

public class SeekerRequestsDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer seekerRequestId;
	private String seekerEmail;
	private String donorEmail;
	private Integer requestStatus;

	public SeekerRequestsDTO() {
	}

	public SeekerRequestsDTO(Integer seekerRequestId, String seekerEmail, String donorEmail, Integer requestStatus) {
		super();
		this.seekerRequestId = seekerRequestId;
		this.seekerEmail = seekerEmail;
		this.donorEmail = donorEmail;
		this.requestStatus = requestStatus;
	}

	public Integer getSeekerRequestId() {
		return seekerRequestId;
	}

	public void setSeekerRequestId(Integer seekerRequestId) {
		this.seekerRequestId = seekerRequestId;
	}

	public String getSeekerEmail() {
		return seekerEmail;
	}

	public void setSeekerEmail(String seekerEmail) {
		this.seekerEmail = seekerEmail;
	}

	public String getDonorEmail() {
		return donorEmail;
	}

	public void setDonorEmail(String donorEmail) {
		this.donorEmail = donorEmail;
	}

	public Integer getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(Integer requestStatus) {
		this.requestStatus = requestStatus;
	}

	@Override
	public String toString() {
		return "Seeker_Requests [seekerRequestId=" + seekerRequestId + ", seekerEmail=" + seekerEmail + ", donorEmail="
				+ donorEmail + ", requestStatus=" + requestStatus + "]";
	}

}
