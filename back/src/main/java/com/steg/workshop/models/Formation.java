package com.steg.workshop.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Formation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nom;
    private String description;
    private String duree;
    @OneToOne
    private Formateur formateur;
    @ManyToOne
    private Theme theme ;

}
