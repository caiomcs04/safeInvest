package com.safeinvest.backsafeinvest.controller;

import com.safeinvest.backsafeinvest.model.Token;
import com.safeinvest.backsafeinvest.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/token")
public class TokenController {

    @Autowired
    TokenService tokenService;

    @PostMapping
    @CrossOrigin(origins = "*")
    public Token createAccessLevel(@RequestBody Token token){
        return tokenService.save(token);
    }

    @GetMapping
    @CrossOrigin(origins = "*")
    public List<Token> getAccessLevelList(){
        return tokenService.findAll();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Token> getAccessLevelById(@PathVariable("id") Long id ) throws Exception {
        return ResponseEntity.ok(tokenService.findById(id).orElseThrow(()->new Exception("Token not found")));
    }

    @PutMapping
    @CrossOrigin(origins = "*")
    public Token updateToken(@RequestBody Token token){
        return tokenService.update(token);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Token> deleteDateType(@PathVariable("id") Long id) {
        tokenService.deleteAccessLevel(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
