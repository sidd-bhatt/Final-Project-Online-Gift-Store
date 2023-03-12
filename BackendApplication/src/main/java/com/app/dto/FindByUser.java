package com.app.dto;

import java.util.List;

public class FindByUser {

	private int id;
	private int total;
	private List<?> list;
	private int amount;
	
	public FindByUser() {
		// TODO Auto-generated constructor stub
	}	
		
	public int getAmount() {
		return amount;
	}
	
	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List<?> getList() {
		return list;
	}

	public void setList(List<?> list) {
		this.list = list;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public FindByUser(int id) {
		super();
		this.id = id;
	}
	
}
