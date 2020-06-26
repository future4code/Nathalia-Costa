// EXERCICIO 01
import axios from 'axios';

const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`

// A - O ENDPOINT GET /subscribers/all
// B - :Promise<any[]>
// C - 

async function getAssinantes(): Promise<any[]> {
    const usuarios = await axios.get(`${baseUrl}/subscribers/all`)
    return usuarios.data
}

async function main() {
    const assinates = await getAssinantes()
    console.log(assinates)
}
main()