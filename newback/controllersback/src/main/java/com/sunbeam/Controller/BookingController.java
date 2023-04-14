package com.sunbeam.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Booking;
import com.sunbeam.models.BookingDTO;
import com.sunbeam.models.Response;
import com.sunbeam.services.BookingService;
@CrossOrigin
@RequestMapping("/booking")
@RestController
public class BookingController {

	@Autowired
	private BookingService bookingService;  
	
	@GetMapping("/{bookingId}")
	public ResponseEntity<?> findBookingById(@PathVariable("bookingId") int bookingId){
		Booking booking = bookingService.findBookingById(bookingId);
		BookingDTO result = BookingDTO.fromEntity(booking);
		return Response.success(result);
	}
	
	@GetMapping("")
	public ResponseEntity<?> findBookingsAll(){
		List<Booking> list = bookingService.findBookingsAll();
		Stream<BookingDTO> result = list.stream().map(booking -> BookingDTO.fromEntity(booking));
		return Response.success(result);
	}
	
//	@GetMapping("/user/{bookingId}")
//	public ResponseEntity<?> findUsersByBookingId(@PathVariable("bookingId") int bookingId) {
//		List<User> list = userService.findUserByBookingId(bookingId);
//		Stream<UserDTO> result = list.stream().map(user -> UserDTO.fromEntity(user));
//		return Response.success(result);
//	}
	
	@PostMapping("")
	public ResponseEntity<?> saveBooking(BookingDTO dto) {
		Booking b = BookingDTO.toEntity(dto);
		Booking newBook = bookingService.save(b);
		BookingDTO newDto = BookingDTO.fromEntity(newBook);
		HashMap<String, Object> result = new HashMap<String, Object>();
		result.put("status", "success");
		result.put("data", newDto);
		return ResponseEntity.ok(result);
	}
	
	@PutMapping("/{bookingId}")
	public ResponseEntity<Booking> updateBookingDetails(@PathVariable("bookingId") int bookingId, @RequestBody Booking b) {
		b.setBookingId(bookingId);
		Booking booking = bookingService.findByBookingId(bookingId);
		booking.setEntryDateTime(b.getEntryDateTime());
		booking.setExitDateTime(b.getExitDateTime());
		Booking modBooking = bookingService.update(booking);
		return ResponseEntity.ok(modBooking);
	}
	
	
	@DeleteMapping("/{bookingId}")
	public ResponseEntity<Boolean> deleteBooking(@PathVariable("bookingId") int bookingId) {
		boolean success = bookingService.deleteById(bookingId);
		return ResponseEntity.ok(success);
	}
}
