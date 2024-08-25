package br.com.gerenciadordeprodutos.api.Model;

import br.com.gerenciadordeprodutos.api.Enums.TipoFornecedorEnum;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "fornecedor")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Fornecedor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "cnpj", nullable = false, unique = true, length = 14)
    private String cnpj;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "tipo_fornecedor", nullable = false)
    @Enumerated(EnumType.STRING)
    private TipoFornecedorEnum tipoFornecedor;

    @Column(name = "criado_em", nullable = false)
    private LocalDateTime criadoEm;



}
