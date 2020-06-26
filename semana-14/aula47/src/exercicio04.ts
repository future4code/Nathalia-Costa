// EXERCICIO 04

// A - Função put, pois enviaremos uma informação{body} para o banco de dados.
// B - 
// C ->
import axios from 'axios';
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`

async function putCriarNoticia(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title: "Cassia Eller",
        content: "Mudaram as estações, nada mudou",
        date: 1593123227
    })
}

const main = async () => {
    try {
        await putCriarNoticia(
            "Cassia Eller",
            "Mudaram as estações, nada mudou",
            1593123227
        )
    } catch (err) {
        console.log("Erro: ", err.message)
    }
}
main()