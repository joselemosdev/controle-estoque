package com.lemos.controle_estoque.service;


import com.lemos.controle_estoque.domain.Fornecedor;
import com.lemos.controle_estoque.repository.FornecedorRepository;
import org.springframework.stereotype.Service;

@Service
public abstract class FornecedorService implements FornecedorRepository {

    FornecedorRepository repository;

    @Override
    public Fornecedor save(Fornecedor fornecedor){


        return repository.save(fornecedor);
    }
}
