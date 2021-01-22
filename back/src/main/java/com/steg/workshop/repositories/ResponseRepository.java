package com.steg.workshop.repositories;

import com.steg.workshop.models.Response;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResponseRepository extends JpaRepository<Response, Long> {
    Response findByAgentIdAndFormationId(Long agent_id, Long formation_id);
}
