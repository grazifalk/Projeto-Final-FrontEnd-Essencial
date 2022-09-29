let formulario ={
    nome:document.querySelector("#nome"),
    email:document.querySelector("#email"),
    mensagem:document.querySelector("#mensagem"),
    btnEnviar :document.querySelector("#btn-enviar")
};

formulario.btnEnviar.addEventListener("click",(e) =>{
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var mensagem = formulario.mensagem.value;
    var cont=0;

    if(nome.length < 1  ){
        alert("Insira um nome válido!")
    }else{cont++}
    if(email.length < 1){
        alert("Insira um email válido!")
    }else{cont++}
    
    if(mensagem.length < 1){
        alert("Insira uma mensagem válida!")
    }else{cont++}

    if (cont!=3){
        e.preventDefault;

    }else{
        localStorage.nome=nome
        localStorage.email=email
        localStorage.mensagem= mensagem
    }
})


