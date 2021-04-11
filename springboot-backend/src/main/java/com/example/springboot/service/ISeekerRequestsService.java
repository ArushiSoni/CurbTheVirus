package com.example.springboot.service;

public interface ISeekerRequestsService {

	void cancelRequest(String seekerEmail, String donorEmail);
	void deleteRequest(String donorEmail);
}
