// EXERCICIO 05
// A - Call backs não funcionam em funções assincronas; 
// Não é recomendado o uso, mas sim o for, for ... of.

import axios from 'axios';
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`

type Usuarios = {
    id: string;
    name: string;
    email: string;
}

const enviarNotificacao = async (usuarios: Usuarios[], mensagem: string
): Promise<void> => {
    for (const usuario of usuarios) {
        await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: usuario.id,
            message: mensagem
        })
    }
}
