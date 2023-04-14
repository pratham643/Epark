package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.Daos.ParkingAreaDao;
import com.sunbeam.entities.ParkingArea;
import com.sunbeam.utils.StorageService;

@Transactional
@Service
public class ParkingAreaServiceImpl implements ParkingAreaService {
    
	@Autowired
	ParkingAreaDao parkingAreaDao;
	@Autowired
	private StorageService storageService;
	
	@Override
	public ParkingArea findByAreaName(String name) {
		return parkingAreaDao.findByAreaName(name);
	}

	@Override
	public ParkingArea save(ParkingArea p) {
		return parkingAreaDao.save( p);
		
	}

	@Override
	public List<ParkingArea> findAllArea() {
		return parkingAreaDao.findAll();
	}
	
	@Override
	public boolean deleteByAreaId(int areaId) {
		if(parkingAreaDao.existsById(areaId)) {
			parkingAreaDao.deleteByAreaId(areaId);
			return true;
		}
		return false;

	}

	@Override
	public ParkingArea findByAreaId(int areaId) {
		Optional<ParkingArea> p = parkingAreaDao.findByAreaId(areaId) ;
		return p.orElse(null);

	}

	@Override
	public ParkingArea saveArea(ParkingArea area, MultipartFile thumbnail) {
		String fileName = storageService.store(thumbnail);
		area.setThumbnail(fileName);
		return parkingAreaDao.save(area);
	}

}
