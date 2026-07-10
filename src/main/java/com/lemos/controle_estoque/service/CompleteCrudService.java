package com.lemos.controle_estoque.service;


import com.lemos.controle_estoque.domain.Fornecedor;
import com.lemos.controle_estoque.repository.FornecedorRepository;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import  java.lang.System;
import java.util.UUID;;

public abstract class CompleteCrudService<T> {

    protected abstract JpaRepository<T, UUID> getRepository();


    @GetMapping
    public List<T> findAll(){
        System.out.println("Hello, World!");
        return this.getRepository().findAll();
    }
    @GetMapping("/{id}")
    public T findById(@PathVariable("id") UUID id){
        return this.getRepository().findById(id).orElseThrow(() -> new RuntimeException("Não encontrado"));
    }

    @PostMapping
    public T save(@RequestParam("entity") T entity){
        return this.getRepository().save(entity);
    }

    @DeleteMapping()
    public void delete(@RequestParam("entity") T entity){
        this.getRepository().delete(entity);
    }

}
