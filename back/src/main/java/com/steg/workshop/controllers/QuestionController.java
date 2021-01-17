package com.steg.workshop.controllers;

import com.steg.workshop.models.Question;
import com.steg.workshop.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("{id}")
    public List<Question> get(@PathVariable Long id) {
        return questionService.findAllByFormation(id) ;
    }

    @PostMapping()
    public Question add(@RequestBody Question question) {
        return questionService.create(question);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        questionService.delete(id);
    }
}
