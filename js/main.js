function consultaCep(){
    $('.barra-progresso').show();
    let cep = document.getElementById("cep").value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type:"GET", //tipo da requisição.
        success:function(response){ //vai retornar com os dados da url
            console.log(response); 
            //document.getElementById("logradouro").innerHTML = response.logradouro; //usando js.
            $('#logradouro').html(response.logradouro); //usando o JQuery. 
            $('#bairro').html(response.bairro); 
            $('#localidade').html(response.localidade); 
            $('#uf').html(response.uf); 
            $('#title-cep').html('CEP ' + response.cep);
            $('.cep').show();
            $('.barra-progresso').hide();

             
        } 

    })
}
$ (function () {
    $('.cep').hide();
    $('.barra-progresso').hide();
})
