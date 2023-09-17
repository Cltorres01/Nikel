//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const passwordcreateinput = document.getElementById("password-create-input").value;
    const passwordconfirminput = document.getElementById("password-confirm-input").value;
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5) {
        alert("Preencha o campo com um email válido.");
        return;
    }

    if(passwordcreateinput != passwordconfirminput) {
        alert("Senhas não conferem.")
    }

})
