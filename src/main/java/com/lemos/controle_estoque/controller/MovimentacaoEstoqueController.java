package com.lemos.controle_estoque.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movimentacao-estoque")
public class MovimentacaoEstoqueController {


    @GetMapping("/{id}")
    private String getMovimentacaoEstoque(){
        return "";
    }
}


