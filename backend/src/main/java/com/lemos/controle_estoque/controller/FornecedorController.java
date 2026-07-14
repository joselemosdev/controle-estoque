package com.lemos.controle_estoque.controller;


import com.lemos.controle_estoque.domain.Fornecedor;
import com.lemos.controle_estoque.repository.FornecedorRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController extends CompleteCrudController<Fornecedor> {

    public FornecedorController(FornecedorRepository fornecedorRepository) {
        super(fornecedorRepository);
    }
}
