package com.safeinvest.backsafeinvest.model;

import lombok.*;
import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
public class Token {
    @Id
    @GeneratedValue
    private long id;
    private String tokenName;
    private String contract;
}