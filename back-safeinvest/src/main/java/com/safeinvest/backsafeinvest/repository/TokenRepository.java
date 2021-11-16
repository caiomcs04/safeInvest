package com.safeinvest.backsafeinvest.repository;

import com.safeinvest.backsafeinvest.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenRepository  extends JpaRepository<Token, Long> {
    Optional<Token> findByTokenName(String tokenName);
    Optional<Token> findByContract(String contract);
}