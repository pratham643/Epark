package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.Daos.SlotDao;
import com.sunbeam.entities.Slot;
@Transactional
@Service
public class SlotServiceImpl implements SlotService {

	@Autowired
	SlotDao slotDao;
	@Override
	public List<Slot> findAll() {
		return slotDao.findAll();
	}

	@Override
	public boolean deletbyId(int id) {
		if(slotDao.existsById(id)) {
			slotDao.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public Slot findById(int slot_Id) {
		Optional<Slot> s = slotDao.findById(slot_Id);
		return s.orElse(null);
	}

	@Override
	public Slot save(Slot s) {
		return slotDao.save(s);
	}

	
	

	
}
