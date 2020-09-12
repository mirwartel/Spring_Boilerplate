package com.example.demo.repositories;

import com.example.demo.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<User, Integer> {
    public User findByUsername(String username);
    public List<User> findByNameContainingIgnoreCase(String name);

}
