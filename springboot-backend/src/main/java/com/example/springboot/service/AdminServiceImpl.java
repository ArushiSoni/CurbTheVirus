package com.example.springboot.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.springboot.dto.DonorDTO;
import com.example.springboot.dto.SeekerDTO;
import com.example.springboot.repository.DonorRepository;
import com.example.springboot.repository.PersonRepository;
import com.example.springboot.repository.SeekerRepository;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private DonorRepository donorRepository;

	@Autowired
	private SeekerRepository seekerRepository;

	@Autowired
	private PersonRepository personRepository;

	@Override
	public List<DonorDTO> getAllDonors() {
		List<DonorDTO> list = new ArrayList<>();
		donorRepository.findAll().forEach(u -> {
			DonorDTO dto = new DonorDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);

		});
		return list;
	}

	@Override
	public List<SeekerDTO> getAllSeekers() {
		List<SeekerDTO> list = new ArrayList<>();
		seekerRepository.findAll().forEach(u -> {
			SeekerDTO dto = new SeekerDTO();
			BeanUtils.copyProperties(u, dto);

			list.add(dto);
		});
		return list;
	}

	@Override
	public String deleteUserDetails(String emailId) {
		donorRepository.deleteByEmail(emailId);
		personRepository.deleteByEmail(emailId);
		return "Donor Deleted " + emailId;
	}

	@Override
	public String deleteSeekerDetail(String emailId) {
		donorRepository.deleteByEmail(emailId);
		personRepository.deleteByEmail(emailId);
		return "Seeker Deleted " + emailId;
	}

}
