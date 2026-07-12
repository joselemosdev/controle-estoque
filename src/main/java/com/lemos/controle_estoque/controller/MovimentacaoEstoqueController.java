package com.lemos.controle_estoque.controller;


import com.lemos.controle_estoque.domain.MovimentacaoEstoque;
import com.lemos.controle_estoque.repository.MovimentoEstoqueRepository;
import com.lemos.controle_estoque.repository.CompleteCrudRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movimentacao-estoque")
public class MovimentacaoEstoqueController extends CompleteCrudRepository<MovimentacaoEstoque> {

    public MovimentacaoEstoqueController(MovimentoEstoqueRepository movimentoEstoqueRepository){
        super(movimentoEstoqueRepository);
    }
}


