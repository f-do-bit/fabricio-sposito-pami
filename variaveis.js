//control + ; = comentario
//Javascript é uma linguagem fracamente tipada             
var texto = "Olá"; //aspas duplas contem sempre uma string
let texto2 = "Mundo"; //ponto e virgula é opcional
const texto3 = "!"; //aspas simples tambem server para string!

console.log(
     texto, texto2, texto3
);
//virgula conecta com espaço, já + conecta tudo junto

texto = "hello";
let msg = `${texto} ${texto2} ${texto3}`
//Use crase junto de ${} para concatanar(conectar)
//também
console.log(msg);


// texto3 = "teste";
// O exemplo acima mostra que impossivel reatribuir um valor a uma constante

let numero = 4;
console.log(typeof numero);

let obj = {nome: "Fabricio", idade: 16}
console.log(
    "Nome:", obj.nome,
    "Idade:", obj.idade);
console.log(typeof obj);
// Objeto é sempre um elemento chave/valor

let arr = ['Fabricio', 'P.', 'T.', 'Sposito'];
console.log(arr[0], arr[3]);
console.log(typeof arr);