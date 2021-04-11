package com.example.springboot.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.dto.DonorDTO;
import com.example.springboot.dto.SeekerDetailsAfterMatchingDTO;
import com.example.springboot.dto.SeekerDetailsBeforeMatchingDTO;
import com.example.springboot.model.Donor;
import com.example.springboot.model.Person;
import com.example.springboot.model.Seeker;
import com.example.springboot.model.SeekerRequests;
import com.example.springboot.repository.DonorRepository;
import com.example.springboot.repository.PersonRepository;
import com.example.springboot.repository.SeekerRepository;
import com.example.springboot.repository.SeekerRequestsRepository;

@Service
@Transactional
public class DonorServiceImpl implements IDonorService {

	@Autowired
	private DonorRepository donorRepository;

	@Autowired
	private PersonRepository personRepository;

	@Autowired
	private SeekerRepository seekerRepository;

	@Autowired
	private SeekerRequestsRepository seekerRequestsRepository;

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
	public Boolean updateDonorDetails(DonorDTO donor) {
		if (personRepository.existsByEmailAndPassword(donor.getEmail(), donor.getPassword())) {
			Donor persistentDonor = donorRepository.findByEmail(donor.getEmail());
			Person persistentPerson = personRepository.findByEmail(donor.getEmail());
			BeanUtils.copyProperties(donor, persistentDonor);
			BeanUtils.copyProperties(donor, persistentPerson);
			System.out.println("hello" + persistentPerson.getDeleted());
			persistentPerson.setDeleted(0);
			return true;
		} else {
			return false;
		}
	}
	
	@Override
	public Boolean createNewDonor(DonorDTO donor) {
		if (personRepository.existsByEmail(donor.getEmail())) {
			Donor persistentDonor = donorRepository.findByEmail(donor.getEmail());
			Person persistentPerson = personRepository.findByEmail(donor.getEmail());
			BeanUtils.copyProperties(donor, persistentDonor);
			BeanUtils.copyProperties(donor, persistentPerson);
//			System.out.println("hello" + persistentPerson.getDeleted());
			persistentPerson.setDeleted(0);
			return true;
		} else {
			return false;
		}
	}

	@Override
	public DonorDTO searchByEmailId(String emailId) {
		Donor persistentDonor = donorRepository.findByEmail(emailId);
		DonorDTO dto = new DonorDTO();
		persistentDonor.setPerson(null);
		BeanUtils.copyProperties(persistentDonor, dto);
		return dto;
	}

	@Override
	public DonorDTO searchByPersonId(Integer personId) {
		DonorDTO dto = new DonorDTO();
		System.out.println("in searchByEmail" + dto);
		return dto;
	}

	@Override
	public List<SeekerDetailsBeforeMatchingDTO> requestsReceived(String emailId) {
		List<SeekerDetailsBeforeMatchingDTO> list = new ArrayList<>();

		seekerRepository.findAll().forEach(s -> {
			if (personRepository.findByEmail(s.getEmail()).getDeleted()==0 &&  s.getSeekingRightNow() == 1) {
				SeekerDetailsBeforeMatchingDTO seekerDTO = new SeekerDetailsBeforeMatchingDTO();
				SeekerRequests sr = new SeekerRequests();
				sr = seekerRequestsRepository.findByDonorEmailAndSeekerEmail(emailId, s.getEmail());
				if (sr != null && sr.getRequestStatus() != 0) {
					BeanUtils.copyProperties(s, seekerDTO);
					seekerDTO.setRequestStatus(sr.getRequestStatus());
					list.add(seekerDTO);
				}
			}
		});
		return list;
	}

	@Override
	public Boolean donorAccepOrReject(String seekerEmail, String donorEmail, Integer value) {
		SeekerRequests sr = new SeekerRequests();
		sr = seekerRequestsRepository.findByDonorEmailAndSeekerEmail(donorEmail, seekerEmail);
		sr.setRequestStatus(value);
		BeanUtils.copyProperties(sr, sr);
		return null;
	}

	@Override
	public SeekerDetailsAfterMatchingDTO seekerInfoAfterAcceptance(String seekerEmail) {
		Seeker persistentSeeker = seekerRepository.findByEmail(seekerEmail);
		SeekerDetailsAfterMatchingDTO seekerDetails = new SeekerDetailsAfterMatchingDTO();
		BeanUtils.copyProperties(persistentSeeker, seekerDetails);
		return seekerDetails;
	}

}
