package com.lemos.controle_estoque.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import org.springframework.data.auditing.DateTimeProvider;

import java.sql.Date;
import java.util.UUID;

@Getter
@Entity
public class Categoria {

    @Id
    private UUID id;

    private String nome;

    private String descricao;

}
