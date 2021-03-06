//exercicio 1

const candidato = (experiencia) => {
	return new Promise((resolve, reject) => { 
        // o new é um instanciamento
        // a Promise tem que retornar alguma coisa
        
        setTimeout(() => {
            experiencia > 5 ? resolve('Contratado como sênior') : reject('Contratado como júnior') 
            
            //resolve é o acerto, cai no then (pode ser qualquer palavra no lugar de resolve e reject, o que importa é a posição
            
            //reject é o erro, cai no catch
        }, 2000)
    }) 
}

const vaga = (experiencia) => {
    candidato(experiencia)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

//exercicio 2

const numParImpar = data => data%2 != 0 ? setTimeout(() => {console.log('ímpar')}, 1000) : setTimeout(() => {console.log('par')}, 2000) //quando resolve a function em uma linha não precisa da chave

const numPromise = data => {
    return new Promise((resolve, reject) => {
        if(isNaN(data)){
            reject('deu ruim')
        } else {
            resolve(numParImpar(data))
        }
    })
}

const returnPromise = data => {
    numPromise(data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// ou

const numParImpar = data => {
    return new Promise((resolve, reject) => {
        if (isNaN(data)){
            reject(console.log('deu ruim'))
        }
        else if (data%2 != 0) {
            setTimeout(() => {
                resolve(console.log('ímpar'))
            }, 1000)
        }
        else {
            setTimeout(() => {
                reject(console.log('par'))
            }, 2000)
        } 
    })
}

const returnParImpar = data => {
    numParImpar(data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// (raissa)

const isANumber = numero => {
    return new Promise((resolve, reject) => {
        (typeof numero !== 'number') ? reject('deu ruim') : resolve('ok')
    })
}

const returnPromise = numero => {
    return new Promise((resolve, reject) => { 
        if (numero % 2 === 1) {
            setTimeout(() => {
                resolve ('ímpar')
            }, 1000)
        } if (numero % 2 === 0) {
            setTimeout(() => {
                resolve ('par')
            }, 2000)
        }    
    })  
}

function job(data) {
    isANumber(data)
    .then(() => returnPromise(data))
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
}

// (mayara)

/* Crio uma função que verifica se é par[true] ou impar[false] */
const parOuImpar = num => num % 2 === 0 ? true : false;

//crio uma variavel recebendo uma função com um parâmetro 'numero' que tem uma Promise
const novaPromessa = (numero) => {
  return new Promise((resolve, reject) => {
    //crio uma variavel que recebe a função parOuImpar 
    const numPar = parOuImpar(numero) 
    //identifico se 'numero' é um número msm e se o parametro esta vazio
    if(!isNaN(numPar) || numero == null) {
      reject("Deu ruim")
    }
    else {
        //verifico se 'numPar' é par[true] : impar[false]
      par === true ? setTimeout(() => {resolve(numero + " é par")}, 2000) : setTimeout(() => {resolve(numero + " é impar")}, 1000)
    }
  })  
}

function retornoPromessa(num){
 novaPromessa(num)
 .then(resultado => console.log({resultado}))
 .catch(reject => console.log({reject}))
};