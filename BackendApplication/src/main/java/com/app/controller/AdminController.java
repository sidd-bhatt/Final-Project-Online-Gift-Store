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
import com.app.pojo.Category;
import com.app.service.AdminService;
import com.app.service.CategoryService;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("/auth")
	public ResponseEntity<?> auth(@RequestBody Admin admin) {
		List<Admin> authadmin = adminService.getDetails();
		boolean authentication = false;
		for (Iterator iterator = authadmin.iterator(); iterator.hasNext();) {
			Admin a = (Admin) iterator.next();
			if(a.getEmail().equals(admin.getEmail())) {
				if (a.getPassword().equals(admin.getPassword())) {
					authentication = true;
				}
			}
		}
		System.out.println(authentication);
		return ResponseEntity.ok(admin);
		
	}
	
	@PostMapping("/addCategory")
	public ResponseEntity<?> addCategory(@RequestBody Category category){
		categoryService.addcategory(category);
		return ResponseEntity.ok(category);
	}
}
