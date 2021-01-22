package com.steg.workshop.controllers;

import com.steg.workshop.models.Response;
import com.steg.workshop.services.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("response")
public class ResponseController {

    @Autowired
    private ResponseService responseService ;

    @PostMapping()
    public Response add(@RequestBody Response response) {
        return responseService.create(response);
    }
}
