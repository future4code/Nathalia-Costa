// EXERCICIO 03

function adicionarTarefa(caminho: string, tarefa:string): void{
    const bufferArquivo: Buffer = fs.readFileSync(caminho);
    const texto: string = bufferArquivo.toString();
    const tarefas: string[] = JSON.parse(texto);

    tarefas.push(tarefa)
    
    const tarefasRefresh: string = JSON.stringify(tarefas)
    fs.writeFileSync(caminho, tarefasRefresh)

    console.log("Tarefa adicionada com sucesso!")
}
const caminho: string = process.argv[2];
const tarefa: string = process.argv[3];

adicionarTarefa(caminho, tarefa)
