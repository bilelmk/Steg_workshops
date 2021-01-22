package com.steg.workshop.services;

import com.steg.workshop.models.Response;
import com.steg.workshop.repositories.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    @Autowired
    private ResponseRepository responseRepository ;

    public Response create(Response response) {
        return responseRepository.save(response) ;
    }
}
