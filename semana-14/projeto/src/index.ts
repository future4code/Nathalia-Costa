// 1. Criem um tipo para representar uma conta para o usuário
// 2. Criem mais um tipo: para representar as transações que 
// serão salvas no extrato
// 3. Criem uma função (`createAccount`) que será responsável por 
// cadastrar um usuário em um arquivo `JSON`. Neste momento, não 
// se preocupe, com as validações descritas nas funcionalidades.
// 4. Criem uma função (`getAllAccounts`) que será responsável por 
// pegar todos os usuários existentes no arquivo `JSON`.
// 5. Adicione, uma validação na função do item 1 (`createAccount`): 
// o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. 
// Caso não possua, exibam uma mensagem de erro.
import moment from "moment";
import fs from "fs";

type ExtratoType = {
    valor: number,
    data: string,
    descricao: string
}
type conta = {
    nome: string,
    cpf: string,
    nascimento: string,
    saldoAtual: number,
    extrato: ExtratoType[]
};

// TO DO, sem cpf iguais
function criarConta(nome: string, nascimento: string, cpf: string){
    //VALIANDO A IDADE
    const dataNasc = moment(nascimento, "DD/MM/YYYY");
    const hoje = moment();
    const idade = hoje.diff(dataNasc, "years");

    if(idade < 18){
        console.log("Necessário que o usuário tenha mais de 18 anos")
        return;
    };
    
    // PEGAR ARQUIVO DO JSON E CONVERTER EM STRING[]
    const usuariosFilePath = "C:/Users/Larissa/Downloads/Repositório - GitHub/Nathalia-Costa/semana-14/projeto/src/usuarios.json"
    const usuariosFileData: Buffer = fs.readFileSync(usuariosFilePath);
    const usuariosString: string  = usuariosFileData.toString();
    
    //CONVERTENDO STRING PARA OBJETO
    const usuarios: conta[] = JSON.parse(usuariosString);

    //VALIDAR CPF
    const foundUser = usuarios.find((usuario: conta) =>{
        return usuario.cpf === cpf
    })
    if (foundUser !== undefined){
        console.log("CPF já cadastrado");
        return
    }
    // ADICIONANDO CONTA
    usuarios.push({
        nome: nome,
        nascimento: nascimento,
        cpf: cpf,
        saldoAtual: 0,
        extrato: []
    });
    console.log(usuarios)

    // CONVERTENDO DE OBJETO PARA STRING
    const usuariosJson = JSON.stringify(usuarios, null, 2);

    // ENVIANDO O ARQUIVO CONVERTIDO PARA O FILE JSON
    fs.writeFileSync(usuariosFilePath, usuariosJson)
};
const nome:string = process.argv[2];
const cpf:string = process.argv[3];
const nascimento:string = process.argv[4];

criarConta(nome, cpf, nascimento);