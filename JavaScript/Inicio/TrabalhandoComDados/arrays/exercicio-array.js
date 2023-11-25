// ************************** exercicio *********************************
// crie 2 arrays: nomes e sobrenomes
// crie um terceiro array de nomesCompleto
// ao final, exiba os nomes completos no console com o foreach
// é necessário conter pelo menos 5 nomes
// utilizar arrow functions

const nomes = ["Jil", "Ingrid", "Rubens", "Breno", "Pietro"]
const sobrenomes = ["Oliveira", "Martiliano", "Kisonas", "Figueira", "Furquim"]

const nomesCompleto = nomes.map((nome, indice) => {
    return ` ${nome} ${sobrenomes[indice]} ` 
})

nomesCompleto.forEach((nomeCompleto) => {
    console.log (nomeCompleto)
})





