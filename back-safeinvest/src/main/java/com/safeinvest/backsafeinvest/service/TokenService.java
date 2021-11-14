package com.safeinvest.backsafeinvest.service;

import com.safeinvest.backsafeinvest.model.Token;
import com.safeinvest.backsafeinvest.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TokenService {

    TokenRepository tokenRepository;

    @Autowired
    public TokenService(TokenRepository tokenRepository){
        this.tokenRepository = tokenRepository;
    }

    public Token save(Token token){
        return tokenRepository.save(token);
    }

    public List<Token> findAll() {
        return tokenRepository.findAll();
    }

    public Optional<Token> findById(Long id) {
        return tokenRepository.findById(id);
    }

    public Token update(Token accessLevel){
        return tokenRepository.save(accessLevel);
    }

    public void deleteAccessLevel(Long id) {
        tokenRepository.deleteById(id);
    }

}