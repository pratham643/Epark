package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.User;

public interface UserService {
	
	User findById(int user_id);
	
	List<User> findAll();
	
	User save(User user);
	
	boolean deleteById(int id);

	User update(User user);

	User authenticate(String email, String password);

	User findByEmail(String email);

	

}
