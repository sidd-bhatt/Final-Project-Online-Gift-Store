package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojo.Users;
import com.app.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
	
	public void addUser(Users user) {
		userRepo.save(user);
	}

	public List<Users> getUserDetails() {
		return userRepo.findAll();
	}
	
}
