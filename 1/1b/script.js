document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Create user object
    let user = { name, email, password };

    // Save to localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Send data via AJAX POST request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("User Registered Successfully!");
        window.location.href = "users.html"; // Redirect to users list
      }
    };

    xhr.send(JSON.stringify(user));
  });
