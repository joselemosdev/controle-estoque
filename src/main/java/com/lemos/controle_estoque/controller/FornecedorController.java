package com.lemos.controle_estoque.controller;


import com.lemos.controle_estoque.domain.Fornecedor;
import com.lemos.controle_estoque.repository.FornecedorRepository;
import com.lemos.controle_estoque.repository.CompleteCrudRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController extends CompleteCrudRepository<Fornecedor> {

    public FornecedorController(FornecedorRepository fornecedorRepository) {
        super(fornecedorRepository);
    }
}
