package com.steg.workshop.repositories;

import com.steg.workshop.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query("SELECT q FROM Question q WHERE q.formation.id = :id")
    public List<Question> findAllByFormationId(@Param("id") Long id);
}
