// EXERCICIO 06 

// A - FAZ UM LOTE DE REQUISIÇÕES PARA ENVIO.
//  B- UNIR O QUE PRECISAR SER ENVIADO PARA "DÁ UMA VIAGEM SÓ"

import axios from 'axios';
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`

type Usuarios = {
    id: string;
    name: string;
    email: string;
}

const enviarNotificacao = async (usuarios: Usuarios[], mensagem: string
): Promise<void> => {
    const promiseArray: Promise<any>[] = [];

    for (const usuario of usuarios) {
        console.log("Enviando notificação para: ", usuario.name) 
        promiseArray.push(
            axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: usuario.id,
            message: mensagem
        }))
    };
    await Promise.all(promiseArray);
    
    console.log("As notificações foram enviadas")
}