package com.lemos.controle_estoque.domain;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProdutoTest {

    private Produto produto;

    @Test
    @DisplayName("Deve Lancar uma Exceção quando a quantidadeEstoque for Inferior A um ou superior a mil.")
    void checkQuantInferiorUmErro(){

        //cai no throw do construtor!
        assertThrows(IllegalArgumentException.class, () -> {
            produto = new Produto(-1);
        }, "Produto deve ter ao menos uma unidade");

        assertThrows(IllegalArgumentException.class, () -> {
            produto = new Produto(1000);
        }, "Produto deve ter no máximo 1 mil unidades");
    }

    @Test
    @DisplayName("deve permitir a criação de um produto")
    void checkCriarProdutoSucesso() {
        produto = new Produto(5);
        assertNotNull(produto);

        assertEquals(5, produto.getEstoqueMinimo());
    }

}