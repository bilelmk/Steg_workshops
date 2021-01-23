package com.steg.workshop.controllers;

import com.steg.workshop.dto.AuthenticationRequest;
import com.steg.workshop.dto.AuthenticationResponse;
import com.steg.workshop.dto.MyUserDetails;
import com.steg.workshop.models.User;
import com.steg.workshop.services.MyUserDetailsService;
import com.steg.workshop.services.UserService;
import com.steg.workshop.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("authentication")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private UserService userService ;


    @PostMapping(value = "/signup")
    public User postAuthenticationData(@RequestBody User user){
        return userDetailsService.creatUser(user) ;
    }

    @PostMapping(value = "/login")
    public ResponseEntity createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            Authentication a = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final MyUserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt , userDetails));
    }

}