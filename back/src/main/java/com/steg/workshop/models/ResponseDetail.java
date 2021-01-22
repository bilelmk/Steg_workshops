package com.steg.workshop.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class ResponseDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detail_id;

    @ManyToOne
    private Choix choix_reponse ;

    @ManyToOne
    private Question question ;

    @ManyToOne
    @JoinColumn(name = "response_id")
    private Response response ;

}
