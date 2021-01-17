package com.steg.workshop.controllers;


import com.steg.workshop.models.Choix;
import com.steg.workshop.services.ChoixService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("choix")
public class ChoixController {

    @Autowired
    private ChoixService choixService ;

    @PostMapping()
    public Choix add(@RequestBody Choix choix) {
        return choixService.create(choix);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        choixService.delete(id);
    }
}
