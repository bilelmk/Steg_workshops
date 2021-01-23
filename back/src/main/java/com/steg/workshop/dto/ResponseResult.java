package com.steg.workshop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseResult {
    private Long question_id ;
    private String question_content ;
    private List<ChoixResponse> list_choix_response ;
}
