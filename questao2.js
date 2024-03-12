function fibonacciSeq(n) {

    let fibInit = [0, 1];

    while (fibInit[fibInit.length - 1] < n) {

        fibInit.push(fibInit[fibInit.length - 1] + fibInit[fibInit.length - 2]);
    }

    return fibInit;
}

function verificacaoFibonacci(num) {

    let fibInit = fibonacciSeq(num);
    
    return fibInit.includes(num);
}

let numero = parseInt(prompt("Digite um número para verificar se está na sequência de Fibonacci: "));

if (verificacaoFibonacci(numero)) {

    console.log(`O número ${numero} está na sequência de Fibonacci.`);

} else {
    
    console.log(`O número ${numero} não está na sequência de Fibonacci.`);
}
