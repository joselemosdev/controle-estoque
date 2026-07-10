package com.lemos.controle_estoque.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class Fornecedor {

    @Id
    private UUID id;

    private String nome;

    private String cnpj;

    private String telefone;

    private String email;
}
