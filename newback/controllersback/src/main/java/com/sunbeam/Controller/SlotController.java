package com.sunbeam.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Slot;
import com.sunbeam.models.Response;
import com.sunbeam.models.SlotDTO;
import com.sunbeam.services.SlotService;

@RequestMapping("/slot")
@RestController
public class SlotController {

	@Autowired
	private SlotService slotService;

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int slotId) {
		Slot slot = slotService.findById(slotId);
		SlotDTO result = SlotDTO.fromEntity(slot);
		return Response.success(result);
	}

	@GetMapping("")
	public ResponseEntity<?> findAll() {
		List<Slot> list = slotService.findAll();
		Stream<SlotDTO> result = list.stream().map(slot -> SlotDTO.fromEntity(slot));
		return Response.success(result);
	}

	@PostMapping("")
	public ResponseEntity<?> save(SlotDTO dto) {
		Slot slot = SlotDTO.toEntity(dto);
		Slot newSlot = slotService.save(slot);
		SlotDTO newDto = SlotDTO.fromEntity(newSlot);
		HashMap<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", newDto);
		return ResponseEntity.ok(result);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") int id) {
		boolean success = slotService.deletbyId(id);
		return ResponseEntity.ok(success);
	}

}
