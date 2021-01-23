package com.steg.workshop.controllers;

import com.steg.workshop.dto.ResponseResult;
import com.steg.workshop.models.Formateur;
import com.steg.workshop.models.Formation;
import com.steg.workshop.services.FormateurService;
import com.steg.workshop.services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("formations")
public class FormationController {

    @Autowired
    private FormationService formationService;

    @GetMapping
    public List<Formation> get() {
        return formationService.findAll() ;
    }

    @GetMapping("agent/{id}")
    public List<Formation> getPending(@PathVariable Long id) {
        return formationService.findByAgent(id) ;
    }

    @GetMapping("stat/{id}")
    public List<ResponseResult> getStat(@PathVariable Long id) {
        return  formationService.getStat(id) ;
    }

    @PostMapping()
    public Formation add(@RequestBody Formation formation) {
        return formationService.create(formation);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        formationService.delete(id);
    }
}
