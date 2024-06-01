const numeros = Array.from({ length:100 }, (_, index) => index + 1);

var qtdfizz = 0;
var qtdbuzz = 0;
var qtdfizzbuzz = 0;


numeros.map(numero => {
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("FizzBuzz");
        qtdfizzbuzz++;
        
    } else if(numero % 3 == 0) {
        console.log("Fizz");
        qtdfizz++;

    } else if(numero % 5 == 0) {
        console.log("Buzz");
        qtdbuzz++;

    } else {

    console.log(numero);
    }

    

});

console.log(`quantidade de fizzbuzz: ${qtdfizzbuzz} \nquantidade de fizz: ${qtdfizz} \nquantidade de buzz: ${qtdbuzz}`);