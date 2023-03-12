package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojo.Category;
import com.app.repo.CategoryRepo;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepo categoryRepo;
	
	public void addcategory(Category category) {
		categoryRepo.save(category);
	}

	public List<Category> getAllCategory() {
		return categoryRepo.findAll();
	}
	
	public Category getById(int id) {
		return categoryRepo.getById(id);
	}
}
