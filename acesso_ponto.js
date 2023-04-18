const cliente = {
    nome: "Leonardo",
    idade: 18,
    cpf: "111222223333",
    email: "leonardo@dominio.com"
}

console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade} anos.`)

console.log(`Os 3 primeiros digitos do CPF é ${cliente.cpf.substring(0, 3)}`)