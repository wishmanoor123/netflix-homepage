// Scroll to Movies Section on "Get Started"
const getStartedBtn = document.querySelector(".get-started-btn");
const moviesSection = document.querySelector(".cards-section");

getStartedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moviesSection.scrollIntoView({ behavior: "smooth" });
});

// Modal Elements
const signInBtn = document.querySelector(".sign-in-btn");
const modal = document.getElementById("signinModal");
const closeModal = document.getElementById("closeModal");
const modalSubmit = document.getElementById("modalSubmit");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modalSubmit.addEventListener("click", () => {
  const email = document.getElementById("modalEmail").value;
  const password = document.getElementById("modalPassword").value;

  if (email && password) {
    alert("✅ Sign in successful!");
    modal.style.display = "none";
  } else {
    alert("⚠️ Please fill in both fields.");
  }
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
