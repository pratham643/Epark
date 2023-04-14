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

import com.sunbeam.entities.Block;
import com.sunbeam.models.BlockDTO;
import com.sunbeam.models.Response;
import com.sunbeam.services.BlockService;

@RequestMapping("/block")
@RestController
public class BlockController {

	@Autowired
	private BlockService blockService;

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int blockId) {
		Block block = blockService.findBlockById(blockId);
		BlockDTO result = BlockDTO.fromEntity(block);
		return Response.success(result);
	}

	@GetMapping("")
	public ResponseEntity<?> findAll(){
		List<Block> list = blockService.findAll();
		Stream<BlockDTO> result = list.stream().map(block -> BlockDTO.fromEntity(block));
		return Response.success(result);
	}

	@PostMapping("")
	public ResponseEntity<?> save(BlockDTO dto) {
		Block block = BlockDTO.toEntity(dto);
		Block newBlock = blockService.save(block);
		BlockDTO newDto = BlockDTO.fromEntity(newBlock);
		HashMap<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", newDto);
		return ResponseEntity.ok(result);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") int id) {
		boolean success = blockService.deletbyId(id);
		return ResponseEntity.ok(success);
	}

}
