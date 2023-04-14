package com.sunbeam.Daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.ParkingArea;

public interface ParkingAreaDao extends JpaRepository<ParkingArea, Integer> {

	ParkingArea findByAreaName(String areaName);

	boolean deleteByAreaId(int areaId);

	Optional<ParkingArea> findByAreaId(int areaId);


	
}
