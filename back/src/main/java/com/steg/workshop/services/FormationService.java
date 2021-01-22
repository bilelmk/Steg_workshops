package com.steg.workshop.services;

import com.steg.workshop.models.Formation;
import com.steg.workshop.repositories.FormationRepository;
import com.steg.workshop.repositories.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FormationService {

    @Autowired
    private FormationRepository formationRepository ;

    @Autowired
    private ResponseRepository responseRepository ;


    public List<Formation> findAll(){
        return this.formationRepository.findAll() ;
    }

    public Formation create(Formation formation){
        return this.formationRepository.save(formation);
    }

    public void delete(Long id){
        this.formationRepository.deleteById(id);
    }

    public List<Formation> findByAgent(Long id) {
        List<Formation> pending = new ArrayList<>() ;
        List<Formation> formations = this.formationRepository.findAll() ;
        for(Formation formation : formations) {
            if(this.responseRepository.findByAgentIdAndFormationId(id , formation.getId()) == null){
                pending.add(formation) ;
            }
        }
        return pending ;
    }
}
