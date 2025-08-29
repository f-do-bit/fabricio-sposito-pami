let n1 = 2;
let n2 = 5;
// Pascal Case = NomeVariavel (primeira letra da palavra
// é sempre maiuscula)
// Camel Case = nomeVariavel (primeira letra da palavra é
// Minuscuula e o restante começa com maiuscula)
// Kebab Case = nome-variavel (tanto faz se começa com
// maiuscula ou minuscula, o imporatante é separar por 
// hifen)
// Snake case = nome_variavel (tanto faz se começa com
// maiuscula ou minuscula, o importante é separar por 
// undeline ou seja _)

function soma(){
    console.log(5 + 14);
}
soma();
// função simples que não recebe paramêtros

function somaComParametros(v1, v2){
    let resultado = v1 + v2;
    return resultado;
}
console.log(somaComParametros(n1, n2));