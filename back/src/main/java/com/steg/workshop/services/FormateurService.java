package com.steg.workshop.services;

import com.steg.workshop.models.Formateur;
import com.steg.workshop.repositories.FormateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormateurService {

    @Autowired
    private FormateurRepository formateurRepository ;

    public List<Formateur> findAll(){
        return this.formateurRepository.findAll() ;
    }

    public Formateur create(Formateur formateur){
        return this.formateurRepository.save(formateur);
    }

    public void delete(Long id){
        this.formateurRepository.deleteById(id);
    }
}
