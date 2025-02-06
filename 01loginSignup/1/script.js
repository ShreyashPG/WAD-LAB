// Signup Function
function signup() {
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;

    if (username === "" || password === "") {
        document.getElementById("message").textContent = "Fields cannot be empty!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    let existingUser = users.find(user => user.username === username);
    if (existingUser) {
        document.getElementById("message").textContent = "Username already taken!";
        return;
    }

    let user = { username, password };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 201) {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("message").textContent = "Signup Successful!";
        }
    };

    xhr.send(JSON.stringify(user));
}

// Signin Function
function signin() {
    let username = document.getElementById("signinUsername").value;
    let password = document.getElementById("signinPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "welcome.html";
    } else {
        document.getElementById("message").textContent = "Invalid Username or Password!";
    }
}
