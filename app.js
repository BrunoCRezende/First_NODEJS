/*console.log("Node JS")

var n1 = 5;
var n2 = 2;
var result = n1 + n2;

console.log("resultado = " + result)

if(result>=10){
    console.log("resultado é maior que 10")
}
else{
    console.log("resultado é menor que 10")
}

var soma = require("./soma.JS")
var sub = require("./sub.JS")
var mult = require("./mult.JS")
var div = require("./div.JS")


console.log("soma: " + soma(10,10))
console.log("sub: " + sub(10,10))
console.log("mult: " + mult(10,10))
console.log("div: " + div(10,10))
*/

var http = require('http')

http.createServer(function(req, res){
    res.end("mensagem direcionada")
}).listen(8081)

console.log("Servidor ativo")