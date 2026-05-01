// ================= API BASE =================
const API = "https://lawyer-website-yske.onrender.com";


// ================= LOAD NEWS =================
async function loadNews() {
  try {
    const res = await fetch(`${API}/api/news`);
    const data = await res.json();

    const container = document.getElementById("newsContainer");

    if (!container) return;

    container.innerHTML = "";

    data.forEach(news => {
      const div = document.createElement("div");
      div.classList.add("news-card");

      div.innerHTML = `
        <h3>${news.title}</h3>
        <p>${news.content}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.log("News load error:", error);
  }
}


// ================= CONTACT FORM =================
function setupContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      alert("Message sent successfully ✅");
      form.reset();

    } catch (error) {
      alert("Failed to send message ❌");
      console.log(error);
    }
  });
}


// ================= SCROLL ANIMATION =================
function setupScrollAnimation() {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "all 0.8s ease";

    observer.observe(sec);
  });
}


// ================= BUTTON SCROLL =================
function setupButtonScroll() {
  const btn = document.querySelector(".btn");

  if (!btn) return;

  btn.addEventListener("click", () => {
    console.log("Button clicked");
  });
}


// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  loadNews();
  setupContactForm();
  setupScrollAnimation();
  setupButtonScroll();
});