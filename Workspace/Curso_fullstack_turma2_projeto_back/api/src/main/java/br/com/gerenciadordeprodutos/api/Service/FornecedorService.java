package br.com.gerenciadordeprodutos.api.Service;

import br.com.gerenciadordeprodutos.api.Dtos.CriarFornecedorRequest;
import br.com.gerenciadordeprodutos.api.Dtos.FornecedorCriadoResponse;
import br.com.gerenciadordeprodutos.api.Model.Fornecedor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FornecedorService {

    FornecedorCriadoResponse criarFornecedor(CriarFornecedorRequest criarFornecedorRequest);

    Fornecedor buscarFornecedorPeloId(Long id);

    List<Fornecedor> buscarTodosFornecedores();

    Fornecedor atualizarFornecedor(Long id, CriarFornecedorRequest criarFornecedorRequest);

    void excluirFornecedorPeloId(Long id);



}
