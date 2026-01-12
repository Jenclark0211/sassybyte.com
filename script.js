const users = [
  { username: "admin", password: "password123" },
  { username: "jennifer", password: "sassybyte2025" },
  { username: "emily", password: "emily7575" },
  { username: "michael", password: "Mjen1177#" }, 
  { username: "bryan", password: "bryan7575" }
];

document.getElementById("signin").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const match = users.find(u => u.username === user && u.password === pass);

  if (match) {
    window.location.href = "main.html";
  } else {
    alert("Incorrect username or password.");
  }
});
