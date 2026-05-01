const API = "https://lawyer-website-yske.onrender.com";

// NEWS LOAD
async function loadNews() {
  const res = await fetch(`${API}/api/news`);
  const data = await res.json();

  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  data.forEach(n => {
    container.innerHTML += `
      <div class="news-card">
        <img src="images/court.jpg">
        <div>
          <p>${n.title}</p>
          <span>${n.content}</span>
        </div>
      </div>
    `;
  });
}

// BLOG LOAD
async function loadBlog() {
  const res = await fetch(`${API}/api/blog`);
  const data = await res.json();

  const container = document.getElementById("blogContainer");
  container.innerHTML = "";

  data.forEach(b => {
    container.innerHTML += `
      <div class="news-card">
        <img src="images/court.jpg">
        <div>
          <p>${b.title}</p>
          <span>${b.content}</span>
        </div>
      </div>
    `;
  });
}

// ADD BLOG
async function addBlog() {
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;

  if (!title || !content) {
    alert("Fill all fields");
    return;
  }

  await fetch(`${API}/api/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  });

  alert("Blog added ✅");

  loadBlog();
}

loadNews();
loadBlog();