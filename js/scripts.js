// 1 - Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

// 2 - Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo. //

// function parAte(number) {
//   for (let i = 0; i <= number; i = i + 2) {
//     if (number % 2 == 0) {
//       console.log(i)
//     }
//   }
// }
// parAte(40)

// 3 - Você deve fazer a leitura de X valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos. Entrada Você receberá 5 valores inteiros.

// const values = [30, 40, -10, 0 ,-2]
// function IntValue(value) {
//   let totPar = 0
//   let totImpar = 0
//   let totPos = 0
//   let totNeg = 0
//   for (let i = 0; i < value.length; i++)
//     if (value[i] > 0) {
//       totPos++
//       if (value[i] % 2 == 0) {
//         totPar++
//       }
//     }
//   console.log('Não é um número valido')

//   console.log(
//     `Pares: ${totPar} , impares: ${totImpar}, positivos: ${totPos}, negativos: ${totNeg}`
//   )
// }
// IntValue([20, -20, 15, -15, 1])

// function IntValue(values) {
//   let totPar = 0
//   let totImpar = 0
//   let totPos = 0
//   let totNeg = 0
//   for (let Totn of values) {
//     if (Totn > 0) {
//       totPos++
//       if (Totn % 2 == 0) {
//         totPar++
//       } else {
//         totImpar++
//       }
//     }
//     if (Totn < 0) {
//       totNeg++
//       if (Totn % 2 == 0) {
//         totPar++
//       } else {
//         totImpar++
//       }
//     }
//   }
//   console.log(
//     `Pares: ${totPar} , impares: ${totImpar}, positivos: ${totPos}, negativos: ${totNeg}`
//   )
// }

// IntValue([20, -20, 15, -15, 1])

// 4 - Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas domésticas.
// Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma
// anotar cada item na mesma hora que percebe a falta dele em casa.
// O problema é que o aplicativo não exclui itens duplicados,
// como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa.
// Sua tarefa é melhorar o aplicativo de notas desenvolvendo
// um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.

let listaCompras = [
  'Feijão',
  'Arroz',
  'azeite',
  'Macarrão',
  'Molho de tomate',
  'Sal',
  'azeite',
  'arroz',
  'feijão',
  'Macarrão',
  'Molho de tomate',
  'Sal',
  'Arroz',
  'azeite',
  'Macarrão',
  'Molho de tomate',
  'sal',
  'azeite'
]

function listMarket(list) {
  let updateList = []
  for (let itens of list) {
    itens = itens.toLowerCase()
    if (updateList.indexOf(itens) == -1) {
      updateList.push(itens)
    }
  }
  return updateList
}

console.log(listMarket(listaCompras).sort())
