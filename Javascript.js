document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "lcm@gmail.com" && password === "lcm123") {
        window.location.href = "index.html";
    } else {
        document.getElementById("message").innerHTML = "Contrasena o Email invalidos.";
    }
});s
