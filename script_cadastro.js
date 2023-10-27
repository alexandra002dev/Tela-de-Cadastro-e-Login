const form = document.querySelector(".form");
const button = document.querySelector("button");

const nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

const usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

const mostraSenha = document.querySelector("#mostrarSenha");
const senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

const mostrarConfirm = document.querySelector("#MostrarConfirm");
const confirmaSenha = document.querySelector("#confirmsenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmSenha = false;

const msgError = document.querySelector(".msgError");
const msgSucess = document.querySelector(".msgSucess");

nome.addEventListener("keyup",()=>{
    if(nome.value.length <= 4){
        labelNome.setAttribute("style", "color:red");
        labelNome.innerHTML = "Nome  *Insira no minímo 4 caracteres";
        nome.setAttribute("style", "border-color: red");
        validNome = false;
    }else{
        labelNome.setAttribute("style", "color:green");
        labelNome.innerHTML = "Nome";
        nome.setAttribute("style", "border-color: green");
        validNome = true;
    }
});

usuario.addEventListener("keyup",()=>{
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute("style", "color:red");
        labelUsuario.innerHTML = "Usuário  *Insira no minímo 4 caracteres";
        usuario.setAttribute("style", "border-color: red");
        validUsuario = false;
    }else{
        labelUsuario.setAttribute("style", "color:green");
        labelUsuario.innerHTML = "Usuário";
        usuario.setAttribute("style", "border-color: green");
        validUsuario = true;
    }
});

senha.addEventListener("keyup",()=>{
    if(senha.value.length <= 7){
        labelSenha.setAttribute("style", "color:red");
        labelSenha.innerHTML = "Senha  *Insira no minímo 8 caracteres";
        senha.setAttribute("style", "border-color: red");
        validSenha = false;
    }else{
        labelSenha.setAttribute("style", "color:green");
        labelSenha.innerHTML = "Senha";
        senha.setAttribute("style", "border-color: green");
        validSenha = true;
    }
});

confirmaSenha.addEventListener("keyup",()=>{
    if(confirmaSenha.value.length <= 7){
        labelConfirmSenha.setAttribute("style", "color:red");
        labelConfirmSenha.innerHTML = "Senha  *Insira no minímo 8 caracteres";
        confirmaSenha.setAttribute("style", "border-color: red");
        validConfirmSenha = false;
    }else if(confirmaSenha.value != senha.value){
        labelConfirmSenha.setAttribute("style", "color:red");
        labelConfirmSenha.innerHTML = "Senha * Senha diferente";
        confirmaSenha.setAttribute("style", "border-color: red");
    }
    else{
        labelConfirmSenha.setAttribute("style", "color:green");
        labelConfirmSenha.innerHTML = "Confirma Senha";
        confirmaSenha.setAttribute("style", "border-color: green");
        validConfirmSenha = true;
    }
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
});
function cadastrar(){
    msgError.innerHTML = "";
    msgSucess.innerHTML = "";
  
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem("listaUser")|| "[]");
        listaUser.push(
            {
                nomeCad:nome.value,
                userCad:usuario.value,
                senhaCad:senha.value,
            }
        )
        localStorage.setItem("listaUser", JSON.stringify(listaUser));
        msgSucess.innerHTML = "Cadastrando Usuário...";
        msgSucess.style.display = "flex";
        msgError.style.display = "none";
        nome.value = "";
        usuario.value = "";
        senha.value = "";
        confirmaSenha.value = "";
        setTimeout(()=>{
            window.location.href="index.html";
        },3000);
       
    }else{
        msgError.innerHTML = "Preencha todos os campos corretamente antes de cadastrar";
        msgError.style.display = "flex";
        msgSucess.style.display = "none";
    }
   }

mostraSenha.addEventListener("click",()=>{
    let senha = document.querySelector("#senha");
    if(senha.getAttribute("type") == "password"){
        senha.setAttribute("type","text");  
    }else{
        senha.setAttribute("type","password");  
    }
});
mostrarConfirm.addEventListener("click",()=>{
    let senha = document.querySelector("#confirmsenha");
    if(senha.getAttribute("type") == "password"){
        senha.setAttribute("type","text");  
    }else{
        senha.setAttribute("type","password");  
    }
});



button.addEventListener("click", cadastrar);