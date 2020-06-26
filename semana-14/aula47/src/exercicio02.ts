// EXERCICIO 02
import axios from 'axios';

const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`
// a. Explique, com suas palavras, a diferença da sintaxe 
// de uma função nomeada assíncrona e uma arrow function assíncrona.
// A - 
// B - 

const getAssinantes = async (): Promise<any[]> =>{
    const usuarios = await axios.get(`${baseUrl}/subscribers/all`)
    return usuarios.data
}

const main = async () =>  {
    const assinates = await getAssinantes()
    console.log(assinates)
}
main()