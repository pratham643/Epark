package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.Daos.BookingDao;
import com.sunbeam.entities.Booking;
import com.sunbeam.entities.User;

@Transactional
@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingDao bookingDao;

	@Override
	public List<Booking> findAll() {
		return bookingDao.findAll();

	}

	@Override
	public Booking save(Booking b) {
		return bookingDao.save(b);
		
	}

	@Override
	public boolean deleteById(int id) {
		if(bookingDao.existsById(id)) {
			bookingDao.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public Booking findByBookingId(int bookingId) {
		Optional<Booking> b = bookingDao.findById(bookingId) ;
		return b.orElse(null);

	}

	@Override
	public List<Booking> findByUser(User user) {
		return bookingDao.findByUser(user);
	}

	@Override
	public Booking update(Booking booking) {
		return bookingDao.save(booking);
	}

	@Override
	public List<Booking> findBookingsAll() {
		return bookingDao.findAll();
	}

	@Override
	public Booking findBookingById(int bookingId) {
		Optional<Booking> booking = bookingDao.findById(bookingId);
		return booking.orElse(null);
	}


}
