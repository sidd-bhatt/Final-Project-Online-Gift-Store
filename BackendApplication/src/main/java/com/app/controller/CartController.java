package com.app.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDto;
import com.app.dto.FindByUser;
import com.app.dto.OrderDto;
import com.app.dto.ProductDto;
import com.app.pojo.Cart;
import com.app.pojo.Category;
import com.app.pojo.Order;
import com.app.pojo.Product;
import com.app.pojo.Users;
import com.app.repo.ProductRepo;
import com.app.repo.UserRepo;
import com.app.service.CartService;
import com.app.service.OrderService;

@RestController
@RequestMapping("cart")
@CrossOrigin
public class CartController {

	@Autowired
	private CartService cartService;
	
	@Autowired
	private UserRepo userRepo;

	@Autowired
	private ProductRepo productRepo;
	
	@Autowired
	private OrderService orderService;
	
	@PostMapping("/addToCart")
	public ResponseEntity<?> addToCart(@RequestBody CartDto c){
		
		Cart cart = CartDto.toEntity(c);
		Optional<Users> optional = userRepo.findById(c.getUser());
		Optional<Product> optional2 = productRepo.findById(c.getProduct());
		Users user = null;
		if(optional.isPresent()) {
			user = optional.get();
		}
		
		Product product = null;
		if(optional2.isPresent()) {
			product = optional2.get();
		}
		cart.setProduct(product);
		cart.setUser(user);
		cartService.addToCart(cart);	
		return ResponseEntity.ok(cart);
		
	}
	@PostMapping("/FindByUser")
	public ResponseEntity<FindByUser> findAllByUser (@RequestBody FindByUser data){
	    List<Cart> list  = cartService.findAllByUser(userRepo.findById(data.getId()));
		int total = 0;
		for (Iterator iterator = list.iterator(); iterator.hasNext();) {
			Cart cart = (Cart) iterator.next();
			total = total+cart.getProduct().getPrice();
		}
		data.setAmount(total);
		data.setList(list);
		data.setTotal(list.size());
		System.out.println("Total product are : "+ data.getTotal());
	    System.out.println(list);
	    return ResponseEntity.ok(data);
	}
	
		@PostMapping("/FindlistByUser")
		public ResponseEntity<List<Cart>> findlistAllByUser (@RequestBody FindByUser data){
		    List<Cart> list  = cartService.findAllByUser(userRepo.findById(data.getId()));
			System.out.println(list);
		    return ResponseEntity.ok(list);
		}
	
		@PostMapping("/placeOrder")
		public ResponseEntity<?> placeOrder (@RequestBody OrderDto f) {
			Order order = OrderDto.toEntity(f);
			Optional<Users> optional = userRepo.findById(f.getUser());
			Users user = null;
			if(optional.isPresent()) {
				user = optional.get();
			}
			order.setUser(user);
			System.out.println("Userid = "+user.getId());
			//orderService.addOrder(order);
			//cartService.DeleteByUserId(user);
			return ResponseEntity.ok(order);	
		}
}
