package com.lemos.controle_estoque.controller;

import com.lemos.controle_estoque.domain.Categoria;
import com.lemos.controle_estoque.repository.CategoriaRepository;
import com.lemos.controle_estoque.repository.CompleteCrudRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categoria")
public class CategoriaController extends CompleteCrudRepository<Categoria> {

    public CategoriaController(CategoriaRepository categoriaRepository){
        super(categoriaRepository);
    }
}
