package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {

        return userService.findAllUsers();

    }

    @GetMapping("/users/{id}")
    public Optional<User> getUserById(@PathVariable int id) {

        return userService.findUserById(id);

    }

//    @GetMapping("/rest/users/username/{username}")
//    public User getUserByUsername(@PathVariable String username) {
//
//        return userService.findByUsername(username);
//
//    }
//
//    @GetMapping("/rest/users/name/{name}")
//    public List<User> getUserByName(@PathVariable String name) {
//
//        return userRepo.findByNameContainingIgnoreCase(name);
//
//    }
//
//    @PostMapping("rest/users")
//    public User createNewUser(@RequestBody User user) {
//        return userRepo.save(user);
//
//    }
//
//    @DeleteMapping("/rest/users/{id}")
//    public String deleteById(@PathVariable int id) {
//
//        try {
//            userRepo.deleteById(id);
//            return "Successfully deleted by id";
//        }
//       catch (Exception e){
//            return "Failed to delete by id";
//       }
//
//    }
}
