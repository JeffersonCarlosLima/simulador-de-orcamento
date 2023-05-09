function orcamentoleitor(){
    var leitorface = document.getElementById("leitorface").value;
    var catraca = document.getElementById("catraca").value;
    var valorleitor = 4700;
    var valorcatraca = 11531;
    var valorservico = 450;
    
    var calculoleitor = leitorface * valorleitor;
    console.log(calculocatraca)
    var calculocatraca = catraca * valorcatraca;
    var servico = valorservico * (catraca+leitorface);
    var total = servico + calculocatraca + calculoleitor
    document.getElementById("resultado").innerHTML = calculocatraca;
    document.getElementById("resultado2").innerHTML = servico;
    document.getElementById("resultado3").innerHTML = calculoleitor;
    document.getElementById("total").innerHTML = total;


    if (total <= 0){
        alert("Para gerar o orçamento deverá adicionar ao menos um item!")
    }
    

}

function formatarMoeda() {

    valorFormatado = valorFormatado + '';
    valorFormatado = parseInt(valor.replace(/[\D]+/g, ''));
    valorFormatado = valorFormatado + '';
    valorFormatado = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valorFormatado = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valorFormatado;
    if(valor == 'NaN') elemento.value = '';
}