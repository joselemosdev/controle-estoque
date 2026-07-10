package com.lemos.controle_estoque.service;


import com.lemos.controle_estoque.domain.Fornecedor;
import com.lemos.controle_estoque.repository.FornecedorRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public abstract class FornecedorService implements FornecedorRepository {

    FornecedorRepository repository;

    @Override
    public Fornecedor save(Fornecedor fornecedor){

        //resolver a regra de negócio do fornecedor
        //antes de salvar
        return repository.save(fornecedor);
    }
}
