let pessoa = {
    nome:"Aluno",
    cpf:"123.123.123-12",
    cidade:"Cidade",
    notas: [8.5, 7.2, 9.0, 6.8]
}
console.log(`o nome é ${pessoa.nome} | o cpf é ${pessoa.cpf} | a cidade é ${pessoa.cidade} `);

console.log(`a primeira nota do aluno é: ${pessoa.notas[0]}`)
console.log(`a segunda nota do aluno é: ${pessoa.notas[1]}`)
console.log(`a terceira nota do aluno é: ${pessoa.notas[2]}`)
console.log(`a quarta nota do aluno é: ${pessoa.notas[3]}`)

var media = (pessoa.notas[0] + pessoa.notas[1] + pessoa.notas[2] + pessoa.notas[3])/pessoa.notas.length;

console.log(`a média do aluno é: ${media.toFixed(1)}`)

var numsorteado = pessoa.notas[Math.floor(Math.random() * pessoa.notas.length)]

var numconvertido = numsorteado * 10

console.log(`a nota sorteada foi ${numsorteado} e convertida para a escala de 0-100 é: ${numconvertido}`)