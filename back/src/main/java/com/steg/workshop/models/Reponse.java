package com.steg.workshop.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Reponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Agent agent ;

    @ManyToOne
    private Question question ;

    @ManyToOne
    private Choix choix_reponse ;

}
