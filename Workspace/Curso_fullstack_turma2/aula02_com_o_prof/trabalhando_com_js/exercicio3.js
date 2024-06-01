const notas = [8.00,9.00,10.00];

var media = (notas[0] + notas[1] + notas[2])/notas.length;

console.log(`a primeira nota é ${notas[0]}, a segunda nota é ${notas[1]}, a terceira nota é ${notas[2]}, a média do aluno é ${media.toFixed(2)}`)