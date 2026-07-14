package com.lemos.controle_estoque.service;


import com.lemos.controle_estoque.domain.MovimentacaoEstoque;
import com.lemos.controle_estoque.domain.Produto;
import com.lemos.controle_estoque.enums.TipoMovimentacaoEnum;
import com.lemos.controle_estoque.repository.MovimentacaoEstoqueRepository;
import com.lemos.controle_estoque.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public abstract class MovimentacaoEstoqueService  implements MovimentacaoEstoqueRepository {

    private final MovimentacaoEstoqueRepository movimentacaoEstoqueRepository;
    private final ProdutoRepository produtoRepository;

    public MovimentacaoEstoqueService(MovimentacaoEstoqueRepository movimentacaoEstoqueRepository, ProdutoRepository produtoRepository) {
        this.movimentacaoEstoqueRepository = movimentacaoEstoqueRepository;
        this.produtoRepository = produtoRepository;
    }

    @Override
    public MovimentacaoEstoque save(MovimentacaoEstoque movimentacaoEstoque){

        final Produto produtoAntesDaAlteracao = this.produtoRepository.getById(movimentacaoEstoque.getProduto().getId());
        final Produto produtoAtualizado = movimentacaoEstoque.getProduto();


        if(produtoAntesDaAlteracao.getQuantidadeEstoque() > produtoAtualizado.getQuantidadeEstoque()){
            movimentacaoEstoque.setTipo(TipoMovimentacaoEnum.SAIDA.toString());
        } else if (produtoAtualizado.getQuantidadeEstoque() > produtoAntesDaAlteracao.getQuantidadeEstoque()){
            movimentacaoEstoque.setTipo(TipoMovimentacaoEnum.ENTRADA.toString());
        } else {
            movimentacaoEstoque.setTipo(TipoMovimentacaoEnum.AJUSTE.toString());
        }

        movimentacaoEstoque.setData(LocalDateTime.now());

        return this.movimentacaoEstoqueRepository.save(movimentacaoEstoque);
    }
}
