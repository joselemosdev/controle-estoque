package com.lemos.controle_estoque.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Getter
@Entity
public class Categoria {

    @Id
    @UuidGenerator
    private UUID id;

    private String nome;

    private String descricao;

}
