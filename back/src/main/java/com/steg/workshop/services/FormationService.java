package com.steg.workshop.services;

import com.steg.workshop.dto.ChoixResponse;
import com.steg.workshop.dto.ResponseResult;
import com.steg.workshop.models.*;
import com.steg.workshop.repositories.FormationRepository;
import com.steg.workshop.repositories.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FormationService {

    @Autowired
    private FormationRepository formationRepository ;

    @Autowired
    private ResponseRepository responseRepository ;

    @Autowired
    private QuestionService questionService ;


    public List<Formation> findAll(){
        return this.formationRepository.findAll() ;
    }

    public Formation create(Formation formation){
        return this.formationRepository.save(formation);
    }

    public void delete(Long id){
        this.formationRepository.deleteById(id);
    }

    public List<Formation> findByAgent(Long id) {
        List<Formation> pending = new ArrayList<>() ;
        List<Formation> formations = this.formationRepository.findAll() ;
        for(Formation formation : formations) {
            if(this.responseRepository.findByAgentIdAndFormationId(id , formation.getId()) == null){
                pending.add(formation) ;
            }
        }
        return pending ;
    }

    public List<ResponseResult> getStat(Long id) {
        List<ResponseResult> final_responses = new ArrayList<>() ;
        List<Question> questions = questionService.findAllByFormation(id) ;
        initResponses(final_responses , questions) ;
        List<Response> responses = this.responseRepository.findByFormationId(id) ;

        for(Response response: responses) {
            for(ResponseDetail responseDetail : response.getResponseDetail()) {
                incrementStat(final_responses , responseDetail) ;
            }
        }
        return final_responses ;
    }

    private void incrementStat(List<ResponseResult> final_responses, ResponseDetail responseDetail) {
        for(ResponseResult responseResult : final_responses ) {
            if(responseResult.getQuestion_id() == responseDetail.getQuestion().getQuestion_id()) {
                for(ChoixResponse choix : responseResult.getList_choix_response()) {
                    if(choix.getChoix_id() == responseDetail.getChoix_reponse().getId()){
                        choix.setNumber(choix.getNumber() + 1 );
                    }
                }
            }
        }
    }

    private void initResponses(List<ResponseResult> final_responses, List<Question> questions) {
        for(Question question : questions) {
            List<ChoixResponse> choix_list = new ArrayList<>() ;
            for(Choix choix : question.getChoix_list()){
                ChoixResponse choixResponse = new ChoixResponse(choix.getId() , choix.getContent(),  0) ;
                choix_list.add(choixResponse) ;
            }
            ResponseResult response = new ResponseResult(question.getQuestion_id() , question.getContent() , choix_list) ;
            final_responses.add(response) ;
        }
    }
}
