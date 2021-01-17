package com.steg.workshop.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long question_id;

    private String content ;
    @ManyToOne
    private Formation formation ;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="question_id" , referencedColumnName = "question_id")
    @JsonIgnoreProperties(value = {"question"} ,allowSetters = true)
    private List<Choix> choix_list ;
}
