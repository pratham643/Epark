package com.sunbeam.Daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {

	Optional<User> findById(int user_id);

	User findByEmailAndPassword(String email, String password);
	
	User findByEmail(String email);

	

}
