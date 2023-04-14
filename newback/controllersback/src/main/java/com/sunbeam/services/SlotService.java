package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Slot;


public interface SlotService {

	List<Slot> findAll();
	
	boolean deletbyId(int slot_Id);
	
	Slot findById(int slot_Id);
	
	Slot save(Slot s);
}
