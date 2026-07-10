package com.lemos.controle_estoque.controller;


import com.lemos.controle_estoque.domain.Fornecedor;
import com.lemos.controle_estoque.repository.FornecedorRepository;
import com.lemos.controle_estoque.service.CompleteCrudService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController extends CompleteCrudService<Fornecedor> {

    private final FornecedorRepository fornecedorRepository;

    public FornecedorController(FornecedorRepository fornecedorRepository) {
        this.fornecedorRepository = fornecedorRepository;
    }


    @Override
   protected FornecedorRepository getRepository(){
       return this.fornecedorRepository;
   }

}
