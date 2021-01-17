package com.steg.workshop.services;

import com.steg.workshop.models.Formation;
import com.steg.workshop.repositories.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormationService {

    @Autowired
    private FormationRepository formationRepository ;

    public List<Formation> findAll(){
        return this.formationRepository.findAll() ;
    }

    public Formation create(Formation formation){
        return this.formationRepository.save(formation);
    }

    public void delete(Long id){
        this.formationRepository.deleteById(id);
    }
}
