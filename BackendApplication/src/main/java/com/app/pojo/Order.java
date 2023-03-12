package com.app.pojo;

import javax.persistence.*;

@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@OneToOne
	@JoinColumn(name="userId")
	private Users user;
	private int total;
	private int amount;
	
	public Order() {
		// TODO Auto-generated constructor stub
	}

	public Order(Users user, int count, int amount) {
		this.user = user;
		this.total = count;
		this.amount = amount;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public int getCount() {
		return total;
	}

	public void setCount(int count) {
		this.total = count;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", user=" + user + ", count=" + total + ", amount=" + amount + "]";
	}

}
