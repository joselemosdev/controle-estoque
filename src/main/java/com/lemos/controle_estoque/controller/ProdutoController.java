package com.lemos.controle_estoque.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @GetMapping("/{id}")
    private String getProduto(){
        return "endpoint de produto funciona";
    }
}
