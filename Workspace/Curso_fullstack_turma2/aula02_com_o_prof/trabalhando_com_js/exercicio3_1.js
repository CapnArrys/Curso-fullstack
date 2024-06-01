const temperaturas = [25, 30, 15, 20];

console.log(`as temperaturas armazenadas: [${temperaturas}] `);

var sorteado = temperaturas[Math.floor(Math.random() * temperaturas.length)];

conversao = ((sorteado * 9)/5) + 32

console.log(`a temperatura sorteada é ${sorteado}C, que corresponde a ${conversao}F`);

