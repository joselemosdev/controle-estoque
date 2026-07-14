package com.lemos.controle_estoque.controller;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

public abstract class CompleteCrudController<T> {

    private final JpaRepository<T, UUID> repository;

    protected CompleteCrudController(JpaRepository<T, UUID> repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<T> findAll(){
        return this.repository.findAll();
    }
    @GetMapping("/{id}")
    public T findById(@PathVariable("id") UUID id){
        return this.repository.findById(id).orElseThrow(() -> new RuntimeException("Não encontrado"));
    }

    @PostMapping
    public T save(@RequestBody T entity){
        return this.repository.save(entity);
    }

    @PutMapping()
    public T update(@RequestBody T updatedEntity) {
        return this.repository.save(updatedEntity);
    }

    @DeleteMapping()
    public void delete(@RequestBody T entity){
        this.repository.delete(entity);
    }

}
