//High order function
function somar (num1, num2) {
    return num1 + num2;
}

function subtrair (num1, num2) {
    return num1 - num2;

}

function multiplicar (num1, num2) {
    return num1 *  num2;
}

function dividir (num1, num2) {
    return num1 / num2;
}



function hof (num1, num2, operacao) {
    return operacao(num1, num2);
}


function hof2 (num1, num2, operacao) {
    return console.log(operacao, operacao(num1, num2))
}



hof(4,5,somar)
//Métodos de arrays:
// Reduce --> acumulador


//For each -> executa uma acção para cada elemento do array, basicamente um for resumido para arrays
const frutas = ["maçã", "laranja", "pêra"];

frutas.forEach(function(fruta) {        /* callback */
    console.log("For Each Anônima " + fruta);
});


//Usando função arrow
frutas.forEach(fruta => console.log("For Each Arrow: " + fruta));

//Retornando o indice do elemento

frutas.forEach(function(fruta, indice) {    //passsar rato por cima do forEach*
    console.log("Index: ", indice + " Fruta: " + fruta);
});




const notas = [7.5, 8.0, 6.5, 9.0, 5.5];
const media = 7.3;

notas.forEach(function(nota, indice) {
    if (nota > media) {
        console.log(nota, "indice: ", indice);
    }
})

//map 
const precosEmEuros = [10, 20, 30];
const cotacaoEuroReal = 6.21;

const precosEmReal = precosEmEuros.map(function(precoEmEuro) { //tmb se pode meter index, *2nd argumento de callbacks
    return precoEmEuro * cotacaoEuroReal;
}) 

//*ver função toLocaleString

/* precoEmEuro.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'}),"Preço em Real...."
 */

//Exercicio

const dados = [1, 7, 10, 44, 12, 59];
const novoDados = dados.map(function(dado) {
    if (dado % 2 === 0) {
        console.log (dado, "é par");;
        return dado % 2;
    } else {
        console.log (dado, "é impar");
        return dado % 2;
    }
});

console.log(novoDados);

//solucao prof

const parOuImpar = dados.map(function(numero) {
    const resto = numero % 2;

    if (resto === 0) {
        console.log(numero, "é par");
    } else {
        console.log(numero, "é impar");
    }
});  //Neste caso ele n transforma para um novo array, faz apenas uma operação para cada elemento do array

//Filter, se elemento passar na condição (true) é adicionado ao novo array;

const idades = [12, 18, 25];

const maiorDeIdade = idades.filter(idade => idade >= 18);
console.log(maiorDeIdade);


const produtos = [
    {nome: "Camisa", preco: 60},
    {nome : "Sapatos", preco:40}
]

const filtroPorPreco = produtos.filter(produto => produto.preco < 50);

//Exercicio

const produtosEmOferta = [
    {nome: "Camisa" , preco: 60, oferta: false},
    {nome: "Meias" , preco: 10, oferta: true},
    {nome: "Boné" , preco: 20, oferta: true},
]

const produtosEmOfertaPreco = produtosEmOferta.filter(produto => produto.preco > 10 && produto.oferta);
console.log(produtosEmOfertaPreco);


//Find: devolve primeiro elemento que respeitar a condição

const formandos = ["Pedro", "Catarina", "João"];
utilizadorEncontrado = formandos.find(nomeFormando => nomeFormando === 'Catarina');
console.log(`Olá ${utilizadorEncontrado}`)
//se não encontrar dá undefined, que posteriormente seria necessário tratar



//Every e Some
    //Every retorna true se todos os elementos do array retornarem true;
    //Some retorna true se pelos menos um elemento no array for true;

const notas2 = [12, 15, 8, 19, 11];

const abaixoDe10 = notas.some(nota => nota < 10);

console.log(`Algum aluno foi para recurso? ${abaixoDe10 ? 'Sim' : 'Não'}`);
// Msm lógica para o Every

//Reduce: pode retornar qq coisa, nós determinamos. Ao contrário dos outros temos de colocar 2 parametros.
  //por defeito acc é 0

const precos = [10, 20 ,30];

const totalCarrinho = precos.reduce(function (acumulado, valorAtual) {
    return acumulado + valorAtual;
});

console.log(`O total da compra será de: ${totalCarrinho}`);

// Exercicio
const inflacaoMensal = [0.9, 0.1, 0.2, 1.2, -0.87, -0,32, 0.2, 0.95, 0.3, 0.12, 0.17, 0.76];

const inflacaoAnual = inflacaoMensal.reduce((acc, n) => acc + n, 0);
console.log(`inflacaoAnual:  ${inflacaoAnual}`);


console.log(`A inflacao acumulada é ${inflacaoAnual.toLocaleString('pt-PT')}%`);  //troca . por ,

//Imutabilidade
//metodos não seguros: push, pop, shift, splice, sort,

//spread operator   ...array ; ...objeto
const numeros = [1, 2, 3];
const copia = [...numeros];


const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b];

//tmb dá para objetos {...pessoa};

const novasFrutas = [...frutas, "Pera"];
const novasFrutas2 = ["Pera", ...frutas];
const novasFrutas3 =  [...frutas.slice(0,1), "Abacaxi", ...frutas.slice(1) ]    
const teste = [1,2,3]
const teste2 = teste.slice(0,1); //1 não inclusive
console.log(teste2);

// Exercicio:

const lProg = ["JavaScript", "Java", "C++", "C#"];

const novoLprog = [...lProg.slice(0,1), "TypeScript", ...lProg.slice(1,4), "C"];
console.log(novoLprog);  


//com objetos
const pessoa = {
    nome: "Rodrigo",
    apelido: "Costa",
    nacionalidade: "PT"
}

const atualizarCadastro = {...pessoa, cidade: "Barcelos"};
console.log(atualizarCadastro);



//Com Destructuring:  
const {nome, apelido, nacionalidade} = pessoa  
//guarda cada atributo numa variavel nova
//dá jeito em funções porque objetos não sao iteraveis.


//restOperator   //atenção: pode ser pesado para servidores!
filtroPorPreco
function criarEncomenda(cliente, ...itens) {  
    console.log(`Faturamento para ${cliente}`);
    console.log(`Itens comprados: ${itens}`);
}

criarEncomenda("Rodrigo","Camisa", "Telemóvel", "Portátil"); 
//sem os tres pontos, ele só iria assumir camisa como segundo argumento
//assim a função é flexivel e podemos passar os parametros que quisermos (dentro da função é transformado em array)



