document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert("Mensaje enviado");
    var confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";
    confirmationMessage.textContent = "Formulario enviado con éxito.";
});