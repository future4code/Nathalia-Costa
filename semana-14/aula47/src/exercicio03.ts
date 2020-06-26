// EXERCICIO 03

type User = {
    id: string;
    name: string;
    email: string;
}

// A - não, pois vamos tipar aquela 
// função de acordo com a tipagem criada.

// B - mapeamos por motivos de segurança e 
// boa prática para termos certeza que o retorno 
// será o esperado.
// C ->
import axios from 'axios';
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`

const getAssinantes = async (): Promise<User[]> =>{
    const usuarios = await axios.get(`${baseUrl}/subscribers/all`)
    return usuarios.data.map((usuario: any) =>{
        return{
            id: usuario.id,
            name: usuario.name,
            email: usuario.email
        }
    })
}

const main = async () =>  {
    const assinates = await getAssinantes()
    console.log(assinates)
}
main()