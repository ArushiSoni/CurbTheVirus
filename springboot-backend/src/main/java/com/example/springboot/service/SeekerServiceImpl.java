package com.example.springboot.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.springboot.dto.DonorDTO;
import com.example.springboot.dto.DonorDetailsAfterMatchingDTO;
import com.example.springboot.dto.DonorDetailsBeforeMatchingDTO;
import com.example.springboot.dto.SeekerDTO;
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
public class SeekerServiceImpl implements ISeekerService {

	@Autowired
	private SeekerRepository seekerRepository;

	@Autowired
	private PersonRepository personRepository;

	@Autowired
	private DonorRepository donorRepository;

	@Autowired
	private SeekerRequestsRepository seekerRequestsRepository;

	@Override
	public List<DonorDetailsBeforeMatchingDTO> seekerGetAllDonors(String emailId) {
		List<DonorDetailsBeforeMatchingDTO> list = new ArrayList<>();
		donorRepository.findAll().forEach(d -> {
			if (personRepository.findByEmail(d.getEmail()).getDeleted()==0 && d.getAvailability()==1) {
				
				DonorDetailsBeforeMatchingDTO donorDTO = new DonorDetailsBeforeMatchingDTO();
				SeekerRequests sr = new SeekerRequests();
				Donor donor = donorRepository.findByEmail(d.getEmail());
				BeanUtils.copyProperties(donor, donorDTO);
				if (seekerRequestsRepository.existsByDonorEmailAndSeekerEmail(d.getEmail(), emailId)) {
					sr = seekerRequestsRepository.findByDonorEmailAndSeekerEmail(d.getEmail(), emailId);
					donorDTO.setRequestStatus(sr.getRequestStatus());
				} else {
					donorDTO.setRequestStatus(0);
				}
				list.add(donorDTO);
			}
			else {
			}
		});
		return list;
	}

	@Override
	public List<DonorDTO> getAllDonorsByStateName(String stateName) {
		List<DonorDTO> list = new ArrayList<>();
		donorRepository.findByStateName(stateName).forEach(u -> {
			DonorDTO dto = new DonorDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});

		return list;
	}

	@Override
	public List<DonorDTO> getAllDonorsByBloodGroup(String bloodGroup) {
		List<DonorDTO> list = new ArrayList<>();
		donorRepository.findByBloodGroup(bloodGroup).forEach(u -> {
			DonorDTO dto = new DonorDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});

		return list;
	}

	@Override
	public List<DonorDTO> getAllDonorsByBloodGroupAndStateName(String bloodGroup, String stateName) {
		List<DonorDTO> list = new ArrayList<>();
		donorRepository.findByBloodGroupAndStateName(bloodGroup, stateName).forEach(u -> {
			DonorDTO dto = new DonorDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});

		return list;
	}

	@Override
	public String deleteSeekerDetails(String emailId) {
		Person persistentPerson = personRepository.findByEmail(emailId);
		persistentPerson.setDeleted(1);
		BeanUtils.copyProperties(persistentPerson, persistentPerson);
		return null;
	}

	@Override
	public SeekerDTO getSeekerDetails(String emailId) {
		Seeker persistentSeeker = seekerRepository.findByEmail(emailId);
		SeekerDTO seekerDTO = new SeekerDTO();
		persistentSeeker.setPerson(null);
		BeanUtils.copyProperties(persistentSeeker, seekerDTO);
		return seekerDTO;
	}

	@Override
	public Boolean updateSeekerDetails(SeekerDTO seeker) {
		if (personRepository.existsByEmailAndPassword(seeker.getEmail(), seeker.getPassword())) {
			Seeker persistentSeeker = seekerRepository.findByEmail(seeker.getEmail());
			Person persistentPerson = personRepository.findByEmail(seeker.getEmail());

			if (persistentPerson.getDeleted() == 1) {
				persistentPerson.setDeleted(0);
			}

			BeanUtils.copyProperties(seeker, persistentSeeker);
			BeanUtils.copyProperties(seeker, persistentPerson);
			return true;
		} else {
			return false;
		}
	}

	@Override
	public DonorDetailsAfterMatchingDTO donorInfoAfterAcceptance(String donorEmail) {
		Donor persistentDonor = donorRepository.findByEmail(donorEmail);
		DonorDetailsAfterMatchingDTO donorDetails = new DonorDetailsAfterMatchingDTO();
		BeanUtils.copyProperties(persistentDonor, donorDetails);
		return donorDetails;
	}

	@Override
	public List<DonorDetailsBeforeMatchingDTO> seekerGetAllRequestedDonors(String emailId) {
		List<DonorDetailsBeforeMatchingDTO> list = new ArrayList<>();

		donorRepository.findAll().forEach(d -> {
			if (d.getAvailability() == 1) {
				DonorDetailsBeforeMatchingDTO donorDTO = new DonorDetailsBeforeMatchingDTO();
				SeekerRequests sr = new SeekerRequests();

				if (seekerRequestsRepository.existsByDonorEmailAndSeekerEmail(d.getEmail(), emailId)) {
					sr = seekerRequestsRepository.findByDonorEmailAndSeekerEmail(d.getEmail(), emailId);
					BeanUtils.copyProperties(d, donorDTO);
					if (sr != null && d.getAvailability() == 1) {
						donorDTO.setRequestStatus(sr.getRequestStatus());
						list.add(donorDTO);
					}
				}
			}
		});
		return list;
	}
	
	@Override
	public Boolean createNewSeeker(SeekerDTO seeker) {
		
		if (personRepository.existsByEmail(seeker.getEmail())) {
			Seeker persistentSeeker = seekerRepository.findByEmail(seeker.getEmail());
			Person persistentPerson = personRepository.findByEmail(seeker.getEmail());
			BeanUtils.copyProperties(seeker, persistentSeeker);
			BeanUtils.copyProperties(seeker, persistentPerson);
			persistentPerson.setDeleted(0);
			return true;
		} else {
			return false;
		}
		
		
	}

}
