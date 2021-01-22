package com.steg.workshop.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Response {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long response_id;

    @ManyToOne
    private Agent agent ;

    @ManyToOne
    private Formation formation ;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="response_id" , referencedColumnName = "response_id")
    @JsonIgnoreProperties(value = {"response"} ,allowSetters = true)
    private List<ResponseDetail> responseDetail ;

}
