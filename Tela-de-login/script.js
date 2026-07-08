document.getElementById("form-cadastro").addEventListener("submit", function(event) {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let erro = false;


    document.getElementById("erro-nome").innerText = "";
    document.getElementById("erro-email").innerText = "";
    document.getElementById("erro-senha").innerText = "";


    if (nome === "") {
        document.getElementById("erro-nome").innerText = "O nome é obrigatório.";
        erro = true;
    }


    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("erro-email").innerText = "Digite um e-mail válido.";
        erro = true;
    }


    if (senha === "" || senha.length < 6) {  
        document.getElementById("erro-senha").innerText = "Digite ao menos 6 caracteres.";
        erro = true; 
    }


    if (erro) {
        event.preventDefault();
    } else {
        alert("Formulário enviado com sucesso!");
  
    }
});