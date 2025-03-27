document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "123456") {
        alert("Login Successful!");
        window.location.href = "../index.html";
    } else {
        alert("Invalid email or password!");
    }
});

document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    alert(`Welcome ${name}, your account has been created!`);
    window.location.href = "login.html";
});
