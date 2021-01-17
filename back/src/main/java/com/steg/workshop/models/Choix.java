package com.steg.workshop.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Choix {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String content ;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question ;
}
