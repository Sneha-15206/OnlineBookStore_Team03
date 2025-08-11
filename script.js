// ---------------------
// Registration Handling
// ---------------------
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  // Get form values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Basic Validation
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Prevent duplicate email registration
  let existingUser = JSON.parse(localStorage.getItem("user"));
  if (existingUser && existingUser.email === email) {
    alert("Email already registered.");
    return;
  }

  // Save user to localStorage
  let user = { name, email, phone, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "login.html";
});

// ---------------------
// Login Handling
// ---------------------
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value;

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password.");
  }
});

// ---------------------
// Show Password Toggle
// ---------------------
document.getElementById("showPassword")?.addEventListener("change", function() {
  let pwdField = document.getElementById("loginPassword");
  pwdField.type = this.checked ? "text" : "password";
});
