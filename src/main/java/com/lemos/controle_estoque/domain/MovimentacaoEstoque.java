package com.lemos.controle_estoque.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Data
public class MovimentacaoEstoque {

    @Id
    private UUID id;

    private String tipo;

    private int quantidade;

    private Timestamp data;

    private String observacao;

    @JoinColumn(name="produto_id")
    @ManyToOne
    private Produto produto;
}
