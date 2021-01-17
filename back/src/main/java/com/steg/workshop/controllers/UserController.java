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

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController
{
//    Logger logger = LoggerFactory.getLogger(UserController.class);

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
//        try {
//            this.mailService.sendMail(user);
//        }catch (Exception e) {
//            System.out.println(e);
//        }
        return userDetailsService.creatUser(user) ;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
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

//    @PostMapping(value = "/image")
//    public User changeProfileImage( @RequestParam("file") MultipartFile file ,  @RequestParam("id")  Long id) {
//        String path = System.getProperty("user.dir") + "/src/main/resources/static/images/" ;
//        File folder = new File(path);
//
//        if (!folder.exists()) {
//            if (folder.mkdir()) {
//                System.out.println("Directory is created!");
//            } else {
//                System.out.println("Failed to create directory!");
//            }
//        }
//        String filename = file.getOriginalFilename();
//        String newFileName = FilenameUtils.getBaseName(filename) + "." + "jpeg";
//        File serverFile = new File (path + File.separator + newFileName);
//        try {
//            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());
//        } catch(Exception e) { e.printStackTrace(); }
//
//        return userService.updateUserImage( "images/" + newFileName ,id) ;
//    }

//    @PutMapping
//    public User update(@RequestBody User user) {
//        return userService.updateUser(user) ;
//    }
//
//    @GetMapping
//    public List<User> findAll() {
//        return userService.findAllUsers() ;
//    }
//
//    @GetMapping("{id}")
//    public User find(@PathVariable Long id) {
//        return userService.findUserById(id) ;
//    }
//
//    @DeleteMapping("{user_id}")
//    public void deleteUser(@PathVariable Long user_id) {
//        userService.deleteUser(user_id);
//    }

}