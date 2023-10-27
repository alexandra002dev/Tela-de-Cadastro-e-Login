
const form = document.querySelector(".form");
const button = document.querySelector("#button");
let listaUserArray = [];

let userValid = {
    nome:"",
    user:"",
    senha:""
};



const usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");

const mostraSenha = document.querySelector(".fa-eye");
const senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");

const msgError = document.querySelector(".msgError");
const msgSucess = document.querySelector(".msgSucess");

function entrar(){
    listaUserArray= JSON.parse(localStorage.getItem("listaUser"));
    listaUserArray.forEach((item)=>{
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome:item.nomeCad,
                user: item.userCad,
                senha:item.senhaCad
            }
        }
    });
    if(usuario.value == userValid.user && senha.value == userValid.senha && usuario.value != "" && senha.value !=""){
            window.location.href="tela inicial.html";
            let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
            localStorage.setItem("token", token);
            localStorage.setItem("userLogado", JSON.stringify(userValid))
            usuario.value = "";
    }else{
        senha.setAttribute("style", "border-color: red");
        labelSenha.setAttribute("style", "color: red");
        usuario.setAttribute("style", "border-color: red");
        labelUsuario.setAttribute("style", "color: red");
        msgError.innerHTML = "Você não está cadastrado!";
        msgError.style.display = "flex";
        usuario.focus();
        usuario.value = "";
        senha.value = "";
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

mostraSenha.addEventListener("click",()=>{
    let senha = document.querySelector("#senha");
    if(senha.getAttribute("type") == "password"){
        senha.setAttribute("type","text");  
    }else{
        senha.setAttribute("type","password");  
    }
});

button.addEventListener("click", entrar);