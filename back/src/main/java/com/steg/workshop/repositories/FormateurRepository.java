package com.steg.workshop.repositories;

import com.steg.workshop.models.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormateurRepository extends JpaRepository<Formateur, Long> {
}
