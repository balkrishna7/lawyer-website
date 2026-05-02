const API = "https://lawyer-website-yske.onrender.com";

// NEWS
async function loadNews(){
  const res = await fetch(`${API}/api/news`);
  const data = await res.json();

  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  data.forEach(n=>{
    container.innerHTML += `
      <div class="news-card">
        <div>
          <h4>${n.title}</h4>
          <p>${n.content}</p>
        </div>
      </div>
    `;
  });
}

// BLOG
async function loadBlog(){
  const res = await fetch(`${API}/api/blog`);
  const data = await res.json();

  const container = document.getElementById("blogContainer");
  container.innerHTML = "";

  data.forEach(b=>{
    container.innerHTML += `
      <div class="news-card">
        <div>
          <h4>${b.title}</h4>
          <p>${b.content}</p>
        </div>
      </div>
    `;
  });
}

// ADD BLOG
async function addBlog(){
  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;

  await fetch(`${API}/api/blog`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({title,content})
  });

  alert("Blog Added");
  loadBlog();
}

loadNews();
loadBlog();