// Toggle Dark Mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", (e) => {
  e.preventDefault();

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});


// Validasi Formulir Pendaftaran
const registerForm = document.getElementById("registerForm");
const msg = document.getElementById("msg");

function showRegisteredMessage() {
  registerForm.style.display = "none";
  msg.textContent = "✅ Anda telah mendaftar, silakan tunggu pemberitahuan.";
  msg.style.fontWeight = "bold";
  msg.style.color = "green";
}

if (localStorage.getItem("sudahDaftar") === "true") {
  showRegisteredMessage();
}

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || nim === "" || email === "") {
      alert("Harap lengkapi semua data!");
      return;
    }

    localStorage.setItem("sudahDaftar", "true");

    alert(`✅ Registrasi berhasil!\nTerima kasih sudah mendaftar di BMFTI, ${name}.`);

    showRegisteredMessage();
  });
}
