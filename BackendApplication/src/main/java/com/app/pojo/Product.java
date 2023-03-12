package com.app.pojo;

import javax.persistence.*;

@Entity
@Table(name="product")
public class Product {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@OneToOne
	@JoinColumn(name="categoryId")
	private Category category;
	private String productname;
	private int price;
	
	public Product() {
		// TODO Auto-generated constructor stub
	}

	public Product(Category category, String productname, int price) {
		this.category = category;
		this.productname = productname;
		this.price = price;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", category=" + category + ", productname=" + productname + ", price=" + price
				+ "]";
	}

}
