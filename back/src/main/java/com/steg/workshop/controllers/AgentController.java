package com.steg.workshop.controllers;

import com.steg.workshop.dto.MatriculeDto;
import com.steg.workshop.models.Agent;
import com.steg.workshop.services.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("agents")
public class AgentController {

    @Autowired
    private AgentService agentService;

    @GetMapping
    public List<Agent> get() {
        return agentService.findAll() ;
    }

    @PostMapping()
    public Agent add(@RequestBody Agent agent) {
        return agentService.create(agent);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        agentService.delete(id);
    }

    @PostMapping("login")
    public ResponseEntity login(@RequestBody MatriculeDto matricule) {
        return agentService.findByMatricule(matricule.getMatricule()) ;
    }

}
