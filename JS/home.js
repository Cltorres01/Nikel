//CRIAR CONTA
document.getElementById("transaction-modal").addEventListener("submit", function (e) {
    e.preventDefault();
e
    const valorCarteira = document.getElementById("valor-carteira");
    const valorDespesa = document.getElementById("valor-despesa").value;
    const data = document.getElementById("data").value;
    const descrição = document.getElementById("descrição").value;
    const tipo = document.querySelector('input[name="type-input"]:checked').value;

    if(tipo == 1){
        valorCarteira.setHTML(parseFloat(valorCarteira.innerHTML) + parseFloat(valorDespesa));
    } else {
        valorCarteira.setHTML(parseFloat(valorCarteira.innerHTML) - parseFloat(valorDespesa));
    }
    

    const tabela = document.getElementById("tabela");
    const newrow = tabela.insertRow(-1);
    const celldata = newrow.insertCell(0);
    celldata.appendChild( document.createTextNode(data));
    const cellvalor = newrow.insertCell(1);
    cellvalor.appendChild(document.createTextNode(valorDespesa));
    const celltipo = newrow.insertCell(2);
    if(tipo == 1){
        celltipo.appendChild(document.createTextNode("Entrada"));
    } else {
        celltipo.appendChild(document.createTextNode("Saida"));
    }
    
    const celldescrição = newrow.insertCell(3);
    celldescrição.appendChild(document.createTextNode(descrição));


    if(parseFloat(valorCarteira.innerHTML) <0) {
        alert("Atenção. Seu saldo após cadastrar essa despesa será negativo, deseja continuar?");
        return;
    } 

    

})
