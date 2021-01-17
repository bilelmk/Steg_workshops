package com.steg.workshop.repositories;

import com.steg.workshop.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

    public User save(User user) ;

//    @Query("SELECT u FROM User u WHERE u.roles = 'user'")
//    public List<User> findUsers();

//    @Transactional
//    @Modifying
//    @Query("delete FROM User u WHERE u.user_id = :id")
//    public void deleteById(@Param("id") Long id);

}
