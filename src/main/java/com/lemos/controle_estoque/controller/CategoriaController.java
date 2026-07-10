package com.lemos.controle_estoque.controller;

import com.lemos.controle_estoque.domain.Categoria;
import com.lemos.controle_estoque.repository.CategoriaRepository;
import com.lemos.controle_estoque.service.CompleteCrudService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categoria")
public class CategoriaController extends CompleteCrudService<Categoria> {

    private final CategoriaRepository categoriaRepository;

    public CategoriaController(CategoriaRepository categoriaRepository){
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    protected CategoriaRepository getRepository(){
        return this.categoriaRepository;
    }
}
