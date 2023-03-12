package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
