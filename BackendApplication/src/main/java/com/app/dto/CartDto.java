package com.app.dto;

import org.springframework.beans.BeanUtils;

import com.app.pojo.Cart;

public class CartDto {

	private int user;
	private int product;
	
	public CartDto() {
		// TODO Auto-generated constructor stub
	}

	public CartDto(int user, int id) {
		super();
		this.user = user;
		this.product = id;
	}

	public int getUser() {
		return user;
	}

	public void setUser(int user) {
		this.user = user;
	}

	public int getProduct() {
		return product;
	}

	public void setProduct(int id) {
		this.product = id;
	}
	
	public static Cart toEntity(CartDto dto) {
		Cart entity=new Cart();
		BeanUtils.copyProperties(dto, entity, "product", "user");		
		return entity;
	}
	
}
