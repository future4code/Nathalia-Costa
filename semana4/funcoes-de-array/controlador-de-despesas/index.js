const arrayDeDespesas = []
function despesasCadastradas(){
    const valor = document.getElementById("valor").value;
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value;
    
    document.getElementById("mostrarDespesasCadastradas").innerHTML += '<div><p>Valor: '+parseInt(valor)+' - Tipo: '+tipo+' - Descrição: '+descricao+'</p></div>'
    document.getElementById("valor").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("descricao").value = "";

    const despesa = {
        Valor: valor,
        Tipo: tipo,
        Descricao: descricao
    }
    arrayDeDespesas.push(despesa)
    console.log(arrayDeDespesas)

    
}

