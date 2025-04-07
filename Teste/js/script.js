/* function cliquei(){
    alert("OLA, "+ nome)
}*/

var form = document.getElementById("formulario")

form.addEventListener("submit", function(sub) {
    sub.preventDefault(); // impedindo envio padrão do forms

    // pegando os valores do input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(
        `Nome: ${name} 
        Email: ${email} 
        Senha: ${password}`)

});