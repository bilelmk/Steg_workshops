package com.steg.workshop.services;

import com.steg.workshop.models.User;
import com.steg.workshop.repositories.UserRepository;
import com.steg.workshop.util.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

//    public void deleteUser(Long id) {
////        Car car  = this.findUserById(id).getCar();
////        if (car != null){
////            carService.removeCar(car.getCar_id());
////        }
//        userRepository.deleteById(id);
//    }

//    public User findUserById(Long id) {
//        return userRepository.findById(id).orElse(null);
//    }
}