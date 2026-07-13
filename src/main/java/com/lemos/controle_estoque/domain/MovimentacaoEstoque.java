package com.lemos.controle_estoque.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class MovimentacaoEstoque {

    @Id
    @UuidGenerator
    private UUID id;

    private String tipo;

    private int quantidade;

    private LocalDateTime data;

    private String observacao;

    @JoinColumn(name="produto_id")
    @ManyToOne
    private Produto produto;
}
