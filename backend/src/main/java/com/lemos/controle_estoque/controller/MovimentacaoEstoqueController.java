package com.lemos.controle_estoque.controller;


import com.lemos.controle_estoque.domain.MovimentacaoEstoque;
import com.lemos.controle_estoque.repository.MovimentacaoEstoqueRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movimentacao-estoque")
public class MovimentacaoEstoqueController extends CompleteCrudController<MovimentacaoEstoque> {

    public MovimentacaoEstoqueController(MovimentacaoEstoqueRepository movimentacaoEstoqueRepository){
        super(movimentacaoEstoqueRepository);
    }
}


