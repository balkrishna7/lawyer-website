const API = "https://lawyer-website-yske.onrender.com";

// DISCLAIMER
function acceptDisclaimer(){
  localStorage.setItem("ok","yes");
  document.getElementById("disclaimer").style.display="none";
}

if(localStorage.getItem("ok")){
  document.getElementById("disclaimer").style.display="none";
}

// NEWS
async function loadNews(){
  const c=document.getElementById("newsContainer");
  try{
    const res=await fetch(`${API}/api/news`);
    const d=await res.json();

    if(!d.length) throw "err";

    d.forEach(n=>{
      c.innerHTML+=`<div class="news-card"><h4>${n.title}</h4><p>${n.content}</p></div>`;
    });

  }catch{
    c.innerHTML=`<div class="news-card"><h4>Latest Court Update</h4><p>Recent legal developments.</p></div>`;
  }
}

// BLOG
async function loadBlog(){
  const c=document.getElementById("blogContainer");
  try{
    const res=await fetch(`${API}/api/blog`);
    const d=await res.json();

    d.forEach(b=>{
      c.innerHTML+=`<div class="news-card"><h4>${b.title}</h4><p>${b.content}</p></div>`;
    });

  }catch{
    c.innerHTML="No blog";
  }
}

// ADD BLOG
async function addBlog(){
  const t=document.getElementById("blogTitle").value;
  const c=document.getElementById("blogContent").value;

  await fetch(`${API}/api/blog`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({title:t,content:c})
  });

  alert("Added");
  loadBlog();
}

loadNews();
loadBlog();