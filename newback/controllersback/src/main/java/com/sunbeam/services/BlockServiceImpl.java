package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.Daos.BlockDao;
import com.sunbeam.entities.Block;
@Transactional
@Service
public class BlockServiceImpl implements BlockService {

	@Autowired
	BlockDao blockDao;
	@Override
	public List<Block> findAll() {
		return blockDao.findAll();
	}

	@Override
	public boolean deletbyId(int block_Id) {
		if(blockDao.existsById(block_Id)) {
			blockDao.deleteById(block_Id);
			return true;
		}
		return false;
	}

	@Override
	public Block findById(int block_Id) {
		Optional<Block> s = blockDao.findById(block_Id);
		return s.orElse(null);
	}

	@Override
	public Block save(Block b) {
		return blockDao.save(b);
	}

	@Override
	public Block findBlockById(int blockId) {
		Optional<Block> block = blockDao.findById(blockId);
		return block.orElse(null);
	}
	
}
