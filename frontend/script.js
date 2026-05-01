const API = "https://lawyer-website-yske.onrender.com";

async function loadNews() {
  try {
    const res = await fetch(`${API}/api/news`);
    const data = await res.json();

    const container = document.getElementById("newsContainer");

    container.innerHTML = "";

    data.forEach((n, i) => {
      container.innerHTML += `
        <div class="news-card">
          <img src="images/court.jpg">
          <div>
            <p class="news-title">${n.title}</p>
            <span>${n.content}</span>
          </div>
        </div>
      `;
    });

  } catch (err) {
    console.log("Error loading news", err);
  }
}

loadNews();