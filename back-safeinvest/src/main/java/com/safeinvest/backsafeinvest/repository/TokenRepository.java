package com.safeinvest.backsafeinvest.repository;

import com.safeinvest.backsafeinvest.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository  extends JpaRepository<Token, Long> {
}