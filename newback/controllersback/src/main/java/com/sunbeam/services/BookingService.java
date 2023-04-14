package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Booking;
import com.sunbeam.entities.User;

public interface BookingService {

	List<Booking> findAll();

	Booking save(Booking b);

	boolean deleteById(int id);

	Booking findByBookingId(int bookingId);

	List<Booking> findByUser(User user);

	Booking update(Booking booking);

	List<Booking> findBookingsAll();

	Booking findBookingById(int bookingId);

}
