package com.example.springboot.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "seeker_requests")
public class SeekerRequests implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "seeker_request_id")
	private Integer seekerRequestId;
	@Column(name = "seeker_email", length = 150, nullable = false)
	private String seekerEmail;
	@Column(name = "donor_email", length = 150, nullable = false)
	private String donorEmail;
//	0: request made
//	1: request accepted
//	2: request rejected
	@Column(name = "request_status", length = 2, nullable = false)
	private Integer requestStatus;

	public SeekerRequests() {
	}

	public SeekerRequests(Integer seekerRequestId, String seekerEmail, String donorEmail, Integer requestStatus) {
		super();
		this.seekerRequestId = seekerRequestId;
		this.seekerEmail = seekerEmail;
		this.donorEmail = donorEmail;
		this.requestStatus = requestStatus;
	}

	public SeekerRequests(String seekerEmail, String donorEmail, Integer requestStatus) {
		super();
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
