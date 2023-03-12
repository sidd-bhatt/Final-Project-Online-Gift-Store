package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {

}
