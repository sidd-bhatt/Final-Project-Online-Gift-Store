package com.app.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Cart;
import com.app.pojo.Users;

@Repository
public interface CartRepo extends JpaRepository<Cart, Integer>{
	
	List<Cart> findAllByUser(Optional<Users> optional);

	void deleteByUser(Users user);

	void deleteAllByUser_id(Users user);
	
	

}
