package com.steg.workshop.services;

import com.steg.workshop.models.Formateur;
import com.steg.workshop.models.Theme;
import com.steg.workshop.repositories.FormateurRepository;
import com.steg.workshop.repositories.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemeService {

    @Autowired
    private ThemeRepository themeRepository ;

    public List<Theme> findAll(){
        return this.themeRepository.findAll() ;
    }

    public Theme create(Theme theme){
        return this.themeRepository.save(theme);
    }

    public void delete(Long id){
        this.themeRepository.deleteById(id);
    }
}
