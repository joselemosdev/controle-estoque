package com.lemos.controle_estoque.domain;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Data
public class Produto {


    @Id
    @UuidGenerator
    private UUID id;

    private String nome;
    private String descricao;
    private BigDecimal valor;

    @Column(name = "codigo_barras")
    private String codigoBarras;

    @Column(name = "preco_compra")
    private BigDecimal precoCompra;

    @Column(name = "preco_venda")
    private BigDecimal precoVenda;

    @Column(name = "quantidade_estoque")
    private int quantidadeEstoque;

    @Column(name = "estoque_minimo")
    private int estoqueMinimo;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "fornecedor_id")
    private Fornecedor fornecedor;
}
