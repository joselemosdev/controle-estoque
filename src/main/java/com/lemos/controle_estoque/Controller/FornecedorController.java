package com.lemos.controle_estoque.Controller;


import com.lemos.controle_estoque.Domain.Fornecedor;
import com.lemos.controle_estoque.Service.FornecedorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

    private final FornecedorService service;
    public FornecedorController(FornecedorService fornecedorService){
        this.service = fornecedorService;
    }

    @GetMapping
    private List<Fornecedor> getFornecedores(){
        return service.getFornecedores();
    }

    @GetMapping("/{id}")
    private Optional<Fornecedor> getFornecedor(@PathVariable("id") String id){
        return service.getFornecedorById(id);
    }
}
