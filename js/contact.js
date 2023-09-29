document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("loading").style.display = "block";
    document.getElementById("spinner-overlay").style.display = "block";

    const formData = new FormData(e.target);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/send_email.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
             // Esconder o loading e conteudo apos sucesso
             document.getElementById("loading").style.display = "none";
             document.getElementById("spinner-overlay").style.display = "none";
             document.getElementById("contactForm").style.display = "none";

             // Mostrar mensagem de sucesso
             document.getElementById("success-message").style.display = "block";

        }
    };
    xhr.send(formData);
});