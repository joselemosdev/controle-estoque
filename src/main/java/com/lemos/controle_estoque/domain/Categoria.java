package com.lemos.controle_estoque.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
public class Categoria {

    @Id
    private UUID id;

    private String nome;

    private String descricao;

}
