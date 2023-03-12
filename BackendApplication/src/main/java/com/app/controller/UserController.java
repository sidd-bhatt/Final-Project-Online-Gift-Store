package com.app.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Admin;
import com.app.pojo.Users;
import com.app.service.UserService;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody Users user){
		userService.addUser(user);
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/auth")
	public ResponseEntity<?> auth(@RequestBody Users user) {
		List<Users> users = userService.getUserDetails();
		Users resUser=null;
		boolean authentication = false;
		for (Iterator iterator = users.iterator(); iterator.hasNext();) {
			Users a = (Users) iterator.next();
			if(a.getEmail().equals(user.getEmail())) {
				if (a.getPassword().equals(user.getPassword())) {
					authentication = true;
					resUser=a;
				}
			}
		}
		System.out.println(authentication);
		return ResponseEntity.ok(resUser);	
	}
	
}
