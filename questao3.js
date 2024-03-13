const json = require('./dados.json');
const jsonEstruturado = JSON.parse(JSON.stringify(json))
var array = jsonEstruturado

function calcularFaturamento(){
    
    var populado = false
    var menor = 0.0
    var maior = 0.0
    var total = 0.0
    var count = 0.0

    for (var i = 0; i < array.length; i++){

        // Remover os valores iguais a zero do início do array
        if (array[i].valor === 0){
            array.splice(i, 1)
            continue
        }

        count++

        //Popular as variaveis com o primeiro valor existente dentro do array
        if (!populado){
            menor = array[i].valor
            maior = array[i].valor
            total += array[i].valor
            populado = true
            continue
        }

        // se o valor for o menor, substituo a variavel que tinha sido populada
		if (array[i].valor < menor) {
			menor = array[i].valor
		}

        // se o valor for maior, substituo a variavel que tinha sido populada
		if (array[i].valor > maior) {
			maior = array[i].valor
		}

        // somar para obter a media
		total += array[i].valor
       
    }

    var media = total / count
    var contadorDias = 0

    // qual o numero de dias que o valor foi acima da media
    for (var i = 0; i < array.length; i++){
        if (array[i].valor > media){
            contadorDias++
            
        }
    }
    
    console.log("O menor valor de faturamento ocorrido em um dia do mês foi: " + menor.toFixed(2) + 
    "\n O maior valor de faturamento ocorrido em um dia do mês foi: " + maior.toFixed(2) + 
    `\n O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi: ${contadorDias} dias `)
}

calcularFaturamento()