package com.steg.workshop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChoixResponse {
     private Long choix_id ;
     private String choix_content ;
     private int number ;
}
