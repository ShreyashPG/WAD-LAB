document.addEventListener("DOMContentLoaded", function () {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userList = document.getElementById("userList");

  users.forEach((user) => {
    let row = `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
    userList.innerHTML += row;
  });
});
