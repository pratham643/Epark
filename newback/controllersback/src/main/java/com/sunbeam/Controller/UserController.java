package com.sunbeam.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.sunbeam.entities.User;
import com.sunbeam.models.Credentials;
import com.sunbeam.services.BookingService;
import com.sunbeam.services.UserService;
@CrossOrigin
@RequestMapping("/users")
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	@Autowired
	 BookingService bookingService;
	
	@PostMapping("/signup")
	public ResponseEntity<User> save(@RequestBody User u) {
		User newUser = userService.save(u);
		return ResponseEntity.ok(newUser);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<User> authenticate(@RequestBody Credentials cred) {
		User user = userService.authenticate(cred.getEmail(), cred.getPassword());
		System.out.println(user);
		return ResponseEntity.ok(user);
	}
	
	@GetMapping("/profile/{id}")
	public ResponseEntity<?> findUserById(@PathVariable("id") int userId){
		Map<String, Object> map = new HashMap<>();
		User u = userService.findById(userId);
		map.put("status", "success");
		map.put("data", u);
		return ResponseEntity.ok(map);
	}
	
	@GetMapping("/bookings/{id}")
	public ResponseEntity<?> findBookingByCustomerId(@PathVariable("id") int customerId) {
		User user = userService.findById(customerId);
		List<Booking> list = bookingService.findByUser(user);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("")
	public ResponseEntity<List<User>> findUserAll(){
		List<User> list = userService.findAll();
		return ResponseEntity.ok(list);
	}
	
	@PutMapping("/changepassword")
	public ResponseEntity<?> changePassword(User user){
		//System.out.println(userDto);
		User currentuser = userService.findByEmail(user.getEmail());
		if(currentuser!= null)
			currentuser.setPassword(user.getPassword());
		//System.out.println(currentuser);
		//.save(currentuser, currentuser.getUserProfile());
		if(currentuser != null)
			return ResponseEntity.ok(currentuser);
		return null;
	}

	

	@PutMapping("/{id}")
	public ResponseEntity<User> updateProfile(@PathVariable("id") int id, @RequestBody User u) {
		System.out.println("id: "+id);
		u.setId(id);
		
		User user = userService.findById(id);
		user.setFirstName(u.getFirstName());
		user.setLastName(u.getLastName());
		user.setAddress(u.getAddress());
		user.setPhoneNo(u.getPhoneNo());
		user.setEmail(u.getEmail());
		user.setPassword(u.getPassword());
		User modUser = userService.update(user);
		return ResponseEntity.ok(modUser);
	}
	

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> delete(@PathVariable("id") int id) {
		boolean success = userService.deleteById(id);
		return ResponseEntity.ok(success);
	}		

}
