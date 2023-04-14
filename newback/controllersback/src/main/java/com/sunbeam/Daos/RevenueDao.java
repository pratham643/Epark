package com.sunbeam.Daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Revenue;

public interface RevenueDao extends JpaRepository<Revenue, Integer> {

}
