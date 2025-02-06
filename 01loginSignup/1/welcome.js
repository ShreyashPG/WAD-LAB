document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("loggedInUser");

    if (!username) {
        window.location.href = "index.html"; // Redirect if not logged in
    } else {
        document.getElementById("user").textContent = username;
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
