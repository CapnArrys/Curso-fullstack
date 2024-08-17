import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Produto implements Negociavel{

    private Long id;
    private String nome;
    private double preco;
    private int qtdEstoque;





    public void exibirDetalhes() {
        System.out.println("Produto ID: " + id + ", Nome: " + nome + ", preço: " + preco + " quantidade no estoque: " + qtdEstoque);

    }

    @Override
    public void negociar() {
        if (qtdEstoque > 0) {
            qtdEstoque--;
            System.out.println("Produto negociado! estoque atual: " + qtdEstoque);

        } else {
            System.out.println("não há o produto em estoque!");
        }

    }
}
