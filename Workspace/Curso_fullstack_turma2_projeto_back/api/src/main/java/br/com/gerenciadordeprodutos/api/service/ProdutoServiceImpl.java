package br.com.gerenciadordeprodutos.api.service;

import br.com.gerenciadordeprodutos.api.dtos.CriarProdutoRequest;
import br.com.gerenciadordeprodutos.api.dtos.ProdutoCriadoResponse;
import br.com.gerenciadordeprodutos.api.model.Fornecedor;
import br.com.gerenciadordeprodutos.api.model.Produto;
import br.com.gerenciadordeprodutos.api.repository.FornecedorRepository;
import br.com.gerenciadordeprodutos.api.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    @Autowired
    FornecedorRepository fornecedorRepository;

    @Override
    public ProdutoCriadoResponse criarProduto(CriarProdutoRequest criarProdutoRequest) {

        Fornecedor fornecedor = fornecedorRepository.findById(criarProdutoRequest.fornecedorId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não encontrado."));


        Produto produto = new Produto();
        produto.setNome(criarProdutoRequest.nome());
        produto.setPreco(criarProdutoRequest.preco());
        produto.setDescricao(criarProdutoRequest.descricao());
        produto.setFornecedor(fornecedor);

        Produto produtoCriado = produtoRepository.save(produto);

        return new ProdutoCriadoResponse(
                "Produto criado com sucesso",
                produtoCriado.getId()
        );

    }

    @Override
    public Produto buscarProdutoPeloId(Long id) {

        return produtoRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não encontrado."));
    }

    @Override
    public List<Produto> buscarTodosProdutos() {
        return produtoRepository.findAll();
    }

    @Override
    public Produto atualizarProduto(Long id, CriarProdutoRequest criarProdutoRequest) {
        Produto produtoExistenteParaSerAtualizado = produtoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado."));

        Fornecedor novofornecedor = fornecedorRepository.findById(criarProdutoRequest.fornecedorId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fornecedor não encontrado."));



        produtoExistenteParaSerAtualizado.setNome(criarProdutoRequest.nome());
        produtoExistenteParaSerAtualizado.setPreco(criarProdutoRequest.preco());
        produtoExistenteParaSerAtualizado.setDescricao(criarProdutoRequest.descricao());

        produtoExistenteParaSerAtualizado.setFornecedor(novofornecedor);

        return produtoRepository.save(produtoExistenteParaSerAtualizado);

    }

    @Override
    public void excluirProdutoPeloId(Long id) {
        Produto produtoParaSerDeletado = produtoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado."));

        produtoRepository.delete(produtoParaSerDeletado);
    }
}
