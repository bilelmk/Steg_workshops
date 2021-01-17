package com.steg.workshop.dto;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String jwt;
    private MyUserDetails user ;

    public AuthenticationResponse(String jwt ,MyUserDetails user ) {
        this.jwt = jwt;
        this.user = user ;
    }
}
