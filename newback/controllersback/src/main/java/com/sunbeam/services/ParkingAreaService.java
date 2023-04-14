package com.sunbeam.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.ParkingArea;

public interface ParkingAreaService {

	ParkingArea findByAreaId(int areaId);
    ParkingArea findByAreaName(String areaName);
	ParkingArea save(ParkingArea area);
	List<ParkingArea> findAllArea();
	boolean deleteByAreaId(int areaId);

	ParkingArea saveArea(ParkingArea  area, MultipartFile thumbnail);
	
}
