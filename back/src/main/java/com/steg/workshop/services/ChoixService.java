package com.steg.workshop.services;

import com.steg.workshop.models.Choix;
import com.steg.workshop.repositories.ChoixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChoixService {

    @Autowired
    private ChoixRepository choixRepository ;

    public Choix create(Choix choix) {
        return choixRepository.save(choix) ;
    }

    public void delete(Long id) {
        choixRepository.deleteById(id);
    }

}
