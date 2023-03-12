package com.app.dto;

import org.springframework.beans.BeanUtils;

public class ProductDto {

	private int category;
	private String productname;
	private int Price;
	
	public ProductDto(int category, String productname, int price) {
		super();
		this.category = category;
		this.productname = productname;
		Price = price;
	}
	
	public ProductDto() {
		// TODO Auto-generated constructor stub
	}

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public int getPrice() {
		return Price;
	}

	public void setPrice(int price) {
		Price = price;
	}

	public static com.app.pojo.Product toEntity(ProductDto dto) {
		com.app.pojo.Product entity=new com.app.pojo.Product();
		BeanUtils.copyProperties(dto, entity, "category");		
		return entity;
	}
	
	@Override
	public String toString() {
		return "ProductDto [category=" + category + ", productname=" + productname + ", Price=" + Price + "]";
	}
	
	
}
