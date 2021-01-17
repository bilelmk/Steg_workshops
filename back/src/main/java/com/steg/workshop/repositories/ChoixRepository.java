package com.steg.workshop.repositories;

import com.steg.workshop.models.Choix;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChoixRepository extends JpaRepository<Choix, Long> {
}
