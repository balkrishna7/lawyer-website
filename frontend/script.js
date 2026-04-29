// Load Articles
fetch("http://localhost:5000/api/articles")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("articles");
    data.forEach(article => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
      container.appendChild(div);
    });
  });

// Contact Form
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Message sent!");
});