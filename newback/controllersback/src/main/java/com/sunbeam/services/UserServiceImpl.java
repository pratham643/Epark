package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.Daos.UserDao;
import com.sunbeam.entities.User;

@Transactional
@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDao userDao;

	@Override
	public User findById(int user_id) {
		Optional<User> user = userDao.findById(user_id);
		return user.orElse(null);
	}

	@Override
	public List<User> findAll() {
		return userDao.findAll();
	}

	@Override
	public User save(User user) {
		return userDao.save(user);
	}

	@Override
	public boolean deleteById(int id) {
		if(userDao.existsById(id)) {
			userDao.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public User update(User u) {
		return userDao.save(u);
	}

	@Override
	public User authenticate(String email, String password) {
		return userDao.findByEmailAndPassword(email, password);
	}

	@Override
	public User findByEmail(String email) {
		
		return  userDao.findByEmail(email);
	}

	

}
