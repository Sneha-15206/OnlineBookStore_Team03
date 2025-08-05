// script.js
// Store registered user in localStorage
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registered successfully!");
});

// Login validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login successful!");
  } else {
    alert("Invalid credentials");
  }
});
