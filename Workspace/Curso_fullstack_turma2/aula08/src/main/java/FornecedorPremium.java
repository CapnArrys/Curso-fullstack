import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FornecedorPremium extends Fornecedor{

    private double taxaDesconto;

    public FornecedorPremium(Long id, String nome, String telefone, double taxaDesconto) {
        super(id,nome,telefone);
        this.taxaDesconto = taxaDesconto;
    }




}
