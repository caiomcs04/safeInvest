package com.safeinvest.backsafeinvest.model;

import lombok.*;
import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.validation.constraints.NotNull;

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

    @NotNull
    private String tokenName;

    @NotNull
    private String contract;
}