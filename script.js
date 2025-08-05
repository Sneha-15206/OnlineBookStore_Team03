// script.js

// Register validation
// Store registered user in localStorage

document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

//Validate all fields and confirm password match

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
  alert("Passwords do not match!");
  return;
}

  alert("Validation Passed");

//Store user after all validations pass

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
