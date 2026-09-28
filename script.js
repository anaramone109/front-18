function calcularTotal(valores) {
    return valores.reduce((total, valor) => total + valor, 0);
}

// Teste 1
console.assert(
    calcularTotal([100, 50]) === 150,
    "Teste 1 falhou"
);

// Teste 2
console.assert(
    calcularTotal([20, 30, 10]) === 60,
    "Teste 2 falhou"
);

// Teste 3 - lista vazia
console.assert(
    calcularTotal([]) === 0,
    "Teste 3 falhou"
);

// Teste 4 - um único valor
console.assert(
    calcularTotal([50]) === 50,
    "Teste 4 falhou"
);

console.log("Todos os testes foram concluídos com sucesso!");