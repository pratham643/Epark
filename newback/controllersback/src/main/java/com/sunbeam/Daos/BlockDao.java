package com.sunbeam.Daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Block;


public interface BlockDao extends JpaRepository<Block, Integer> {
	
}