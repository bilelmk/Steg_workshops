package com.steg.workshop.services;

import com.steg.workshop.models.Agent;
import com.steg.workshop.models.Formation;
import com.steg.workshop.repositories.AgentRepository;
import com.steg.workshop.repositories.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository ;

    public List<Agent> findAll(){
        return this.agentRepository.findAll() ;
    }

    public Agent create(Agent agent){
        return this.agentRepository.save(agent);
    }

    public void delete(Long id){
        this.agentRepository.deleteById(id);
    }

    public ResponseEntity findByMatricule(String matricule) {
        Agent agent = this.agentRepository.findByMatricule(matricule) ;
        if(agent != null) {
            return new ResponseEntity(agent , HttpStatus.OK) ;
        }
        return new ResponseEntity("not found" , HttpStatus.NOT_FOUND) ;

    }
}
