package com.app.dto;

import org.springframework.beans.BeanUtils;

import com.app.pojo.Cart;
import com.app.pojo.Order;

public class OrderDto {

	private int user;
	private int total;
	private int amount;
	
	public OrderDto() {
		// TODO Auto-generated constructor stub
	}
	
	public int getUser() {
		return user;
	}
	public void setUser(int user) {
		this.user = user;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	public static Order toEntity(OrderDto dto) {
		Order entity=new Order();
		BeanUtils.copyProperties(dto, entity, "user");		
		return entity;
	}
	
	
	
	
}
