package br.com.gerenciadordeprodutos.api.dtos;

import jakarta.validation.constraints.NotBlank;

public record LoginUsuarioRequest(
        String email,
        @NotBlank(message = "A senha não pode estar em branco!")
        String senha
) {
}
