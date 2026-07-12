package com.lemos.controle_estoque.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

public abstract class CompleteCrudRepository<T> {

    private final JpaRepository<T, UUID> repository;

    protected CompleteCrudRepository(JpaRepository<T, UUID> repository) {
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


    @DeleteMapping()
    public void delete(@RequestBody T entity){
        this.repository.delete(entity);
    }

}
