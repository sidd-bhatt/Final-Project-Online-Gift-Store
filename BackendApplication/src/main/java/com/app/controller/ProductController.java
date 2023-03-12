package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ProductDto;
import com.app.pojo.Category;
import com.app.pojo.Product;
import com.app.repo.CategoryRepo;
import com.app.repo.ProductRepo;
import com.app.service.CategoryService;
import com.app.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryRepo categoryRepo;

	@PostMapping("/addProduct")
	public ResponseEntity<?> addProduct(@RequestBody ProductDto p){
		Product product = ProductDto.toEntity(p);
		Optional<Category> optional = categoryRepo.findById(p.getCategory());
		Category category = null;
		if(optional.isPresent()) {
			category = optional.get();
		}
		product.setCategory(category);
		productService.addProduct(product);
		return ResponseEntity.ok(product);
	}
	
	@PostMapping("/getlist")
	public ResponseEntity<List<Product>> getlist(){
		return ResponseEntity.ok(productService.getList()); 
		
	}

}
