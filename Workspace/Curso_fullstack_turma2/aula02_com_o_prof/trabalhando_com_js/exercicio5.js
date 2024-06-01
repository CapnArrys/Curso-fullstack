var notas = [8.00,9.00,10.00];

var media = (notas[0] + notas[1] + notas[2])/notas.length;

const mediaprovacao = 7.00;

console.log(`a primeira nota do aluno é: ${notas[0]}`)
console.log(`a segunda nota do aluno é: ${notas[1]}`)
console.log(`a terceira nota do aluno é: ${notas[2]}`)

console.log(`a média do aluno é: ${media.toFixed(1)} `)

if (media >= mediaprovacao) {
    console.log("Aluno aprovado!")
    
} else  {
    console.log("Aluno reprovado!")
}
