package com.steg.workshop.controllers;

import com.steg.workshop.models.Agent;
import com.steg.workshop.models.Formateur;
import com.steg.workshop.services.AgentService;
import com.steg.workshop.services.FormateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("formateurs")
public class FormateurController {

    @Autowired
    private FormateurService formateurService;

    @GetMapping
    public List<Formateur> get() {
        return formateurService.findAll() ;
    }

    @PostMapping()
    public Formateur add(@RequestBody Formateur formateur) {
        return formateurService.create(formateur);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        formateurService.delete(id);
    }
}
