package com.steg.workshop.services;

import com.steg.workshop.models.Question;
import com.steg.workshop.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository  questionRepository ;

    public List<Question> findAllByFormation(Long id) {
        return questionRepository.findAllByFormationId(id) ;
    }

    public Question create(Question question) {
        return questionRepository.save(question) ;
    }

    public void delete(Long id) {
        questionRepository.deleteById(id);
    }
}
