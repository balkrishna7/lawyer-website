const API = "https://lawyer-website-yske.onrender.com";

// Load Articles
fetch(`${API}/api/articles`)
  .then(res => res.json())
  .then(data => {
    console.log("DATA:", data); // 👈 DEBUG

    const container = document.getElementById("articles");
    container.innerHTML = "";

    data.forEach(article => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("FETCH ERROR:", err); // 👈 DEBUG
  });


// Contact Form
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    await fetch(`${API}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Message sent!");
  } catch (err) {
    console.error(err);
    alert("Error sending message");
  }
});