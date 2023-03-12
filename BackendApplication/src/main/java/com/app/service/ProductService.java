package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojo.Product;
import com.app.repo.ProductRepo;

@Service
public class ProductService {

	@Autowired
	private ProductRepo productRepo;
	
	public void addProduct(Product product) {
		productRepo.save(product);
	}

	public List<Product> getList() {
		return productRepo.findAll();
	}

}
