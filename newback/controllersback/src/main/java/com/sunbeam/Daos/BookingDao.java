package com.sunbeam.Daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Booking;
import com.sunbeam.entities.User;

public interface BookingDao extends JpaRepository<Booking, Integer> {


	List<Booking> findByUser(User user);	

}
