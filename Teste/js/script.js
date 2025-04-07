/*primeiro teste

 function cliquei(){
    alert("OLA, "+ nome)
}*/

var form = document.getElementById("formulario")

form.addEventListener("submit", function(sub) {
    sub.preventDefault(); // impedindo envio padrão do forms

    // pegando os valores do input e declarando as variaveis
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Windows alert com os dados do usuário
    alert(
        `Nome: ${name} 
        Email: ${email} 
        Senha: ${password}`)

});