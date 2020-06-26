// EXERCICIO 07

import axios from 'axios';
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`

const getAssinantes = async (): Promise<any[]> =>{
    const usuarios = await axios.get(`${baseUrl}/subscribers/all`)
    return usuarios.data
};
const getNoticias = async (): Promise<any[]> =>{
    const noticia = await axios.get(`${baseUrl}/news/all`)
    return noticia.data
};

type Usuarios = {
    id: string;
    name: string;
    email: string;
};

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
};

const addAssinante = async(name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
        name, 
        email
    })
};
async function putCriarNoticia(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title,
        content,
        date
    })
};

const criarEEnviarNotificacao = async () =>{
    try {
        await putCriarNoticia(
            "Eu acho...",
            "Que vi um gatinho",
            1593123227
        );
        const usuarios = await getAssinantes();
        await enviarNotificacao(usuarios, "Olha essa novidade!")
    } catch (erro) {
        console.log("erro: ", erro.message)
    }
};

const getTodasNotificações = async (): Promise<any> => {
    const usuarios = await getAssinantes();
    
    const notificacaoPromise: Promise<any>[] = [];

    for (const usuario of usuarios) {
        notificacaoPromise.push(
            axios.get(`${baseUrl}/subscribers/${usuario.id}/notifications/all`))
    };
    const resultado = await Promise.all(notificacaoPromise);
    const dataResultado = resultado.map(res => res.data);
    
    return dataResultado
};

const main = async () => {
    await addAssinante("piu-piu", "piu@labenu.com");
    await criarEEnviarNotificacao();
    await getTodasNotificações();
    // await getNoticias()
};

main();