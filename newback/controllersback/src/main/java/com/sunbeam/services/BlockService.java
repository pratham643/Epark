package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Block;


public interface BlockService {

	List<Block> findAll();
	
	boolean deletbyId(int block_Id);
	
	Block findById(int block_Id);
	
	Block save(Block b);

	Block findBlockById(int blockId);
}

