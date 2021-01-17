package com.steg.workshop.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String cin;
    private String nom;
    private String prenom;
    private String adresse;
    private String email;
    private String telephone;
//    private String password;

}
