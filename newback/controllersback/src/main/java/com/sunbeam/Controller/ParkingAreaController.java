package com.sunbeam.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.ParkingArea;
import com.sunbeam.models.ParkingAreaInDTO;
import com.sunbeam.services.ParkingAreaService;

@CrossOrigin
@RequestMapping("/area")
@RestController
public class ParkingAreaController {

	@Autowired
	ParkingAreaService parkingAreaService;

	@GetMapping("/{areaId}")
	public ResponseEntity<?> findByAreaId(@PathVariable("areaId") int areaId) {
		Map<String, Object> map = new HashMap<>();
		ParkingArea s = parkingAreaService.findByAreaId(areaId);
		map.put("status", "success");
		map.put("data", s);
		return ResponseEntity.ok(map);
	}

	@GetMapping("")
	public ResponseEntity<List<ParkingArea>> findAllParkingArea() {
		List<ParkingArea> list = parkingAreaService.findAllArea();
		return ResponseEntity.ok(list);
	}

	@PostMapping("")
	public ResponseEntity<ParkingArea> save( ParkingAreaInDTO areaDto) {
		ParkingArea newParkingArea = ParkingAreaInDTO.toEntity(areaDto);
		newParkingArea = parkingAreaService.saveArea(newParkingArea, areaDto.getThumbnail());
		return ResponseEntity.ok(newParkingArea);
	}

	@DeleteMapping("/{areaId}")
	public ResponseEntity<Boolean> delete(@PathVariable("areaId") int areaId) {
		boolean success = parkingAreaService.deleteByAreaId(areaId);
		return ResponseEntity.ok(success);
	}

}
