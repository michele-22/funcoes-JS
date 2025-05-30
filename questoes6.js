// Questão1
function saudacao(nome){
    console.log(`${nome} cursa T.I no IFCE de Tianguá!`)
}
saudacao("Michele");


// Questão2
function somaValor(a, b) {
    return `A soma de ${a} + ${b} = ${a + b}`;
}
console.log(somaValor(6,3));


// Questão3
function ehPar(numero) {
    console.log(`O número ${numero} é par?`);
    return numero % 2 === 0;
}
console.log(ehPar(6)); 
console.log(ehPar(9));  


// Questão4
const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (a === 0) {
            return "Erro na divisão por zero '0'";
        }
        else {
            return a / b;
        }
    }
};
 console.log(calculadora.somar(7,3));
 console.log(calculadora.subtrair(7,3));
 console.log(calculadora.multiplicar(7,3));
 console.log(calculadora.dividir(7,0));
 console.log(calculadora.dividir(0,7));
 console.log(calculadora.dividir(7,7));


// Questão5
function criarSaudacao (saudacao){
    return function (nome){
        return `${saudacao}, ${nome}!`;
    };
}

const boaNoite = criarSaudacao ("Boa Noite");
console.log(boaNoite("João"));


// Questão6
function atualizarIdade (pessoa, novaIdade){
    pessoa.idade = novaIdade;
    console.log("Atualizado!")
}

const antonio = {
    nome : "Antônio",
    idade : 24
};

const lorena = {
    nome : "Lorena",
    idade : 10
};

const vicente = {
    nome: "Vicente",
    idade: 21
}

console.log(antonio)
atualizarIdade(antonio, 22)
console.log(antonio)
console.log()

console.log(lorena)
atualizarIdade(lorena, 15)
console.log(lorena)
console.log()

console.log(vicente)
atualizarIdade(vicente, 22)
console.log(vicente)