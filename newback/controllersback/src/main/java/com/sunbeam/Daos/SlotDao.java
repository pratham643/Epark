package com.sunbeam.Daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Slot;

public interface SlotDao extends JpaRepository<Slot, Integer> {

}
