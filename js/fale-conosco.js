let formulario ={
    nome:document.querySelector("#nome"),
    email:document.querySelector("#email"),
    mensagem:document.querySelector("#mensagem"),
    btnEnviar :document.querySelector("#btn-enviar")
};

formulario.btnEnviar.addEventListener("click",() =>{
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var mensagem = formulario.mensagem.value;

    if(nome.length < 1  ){
        alert("Insira um nome válido!")
    }
    if(email.length < 1){
        alert("Insira um email válido!")
    }
    
    if(mensagem.length < 1){
        alert("Insira uma mensagem válida!")
    }
})
