public class Main {
    public static void main(String[] args) {

        Produto produto1 = new Produto(1L , "Arroz" , 7.49 , 5);


        produto1.exibirDetalhes();

        produto1.negociar();

        produto1.negociar();

        Fornecedor fornecedor1 = new Fornecedor(1L, "Urbano LTDA", "11111-1111");

        FornecedorPremium fornecedorPremium1 = new FornecedorPremium(fornecedor1.getId(), fornecedor1.getNome(), fornecedor1.getTelefone(), 5.00);

        





    }
}