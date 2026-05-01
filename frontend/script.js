const API = "https://lawyer-website-yske.onrender.com";


// ================= NEWS LOAD =================
async function loadNews() {
  try {
    const res = await fetch(`${API}/api/news`);
    const data = await res.json();

    const container = document.getElementById("newsContainer");

    if (!container) return;

    container.innerHTML = "";

    data.forEach(n => {
      const div = document.createElement("div");
      div.classList.add("news-card");

      div.innerHTML = `
        <h3>${n.title}</h3>
        <p>${n.content}</p>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    console.log("News error:", err);
  }
}

loadNews();


// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      alert("Message Sent Successfully ✅");
      form.reset();

    } catch (err) {
      alert("Error sending message ❌");
      console.log(err);
    }
  });
}


// ================= SCROLL ANIMATION =================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
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


// ================= BUTTON SCROLL (OPTIONAL) =================
const btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
}