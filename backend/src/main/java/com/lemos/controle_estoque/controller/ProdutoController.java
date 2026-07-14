package com.lemos.controle_estoque.controller;


import com.lemos.controle_estoque.domain.Produto;
import com.lemos.controle_estoque.repository.ProdutoRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/produto")
public class ProdutoController extends CompleteCrudController<Produto> {

    public ProdutoController(ProdutoRepository produtoRepository){
        super(produtoRepository);
    }

}
