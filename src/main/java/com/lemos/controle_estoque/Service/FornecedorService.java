package com.lemos.controle_estoque.Service;


import com.lemos.controle_estoque.Domain.Fornecedor;
import com.lemos.controle_estoque.Repository.FornecedorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FornecedorService {

    private final FornecedorRepository repository;
    private Fornecedor fornecedor;

    public FornecedorService(FornecedorRepository fornecedorRepository){
        this.repository = fornecedorRepository;
    }

    public List<Fornecedor> getFornecedores(){
        return this.repository.findAll();
    }

    public Optional<Fornecedor> getFornecedorById(String id)
    {
        final UUID uuid = java.util.UUID.fromString(id);
        return this.repository.findById(uuid);
    }


}
