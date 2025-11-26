const KEY = "FHxgrSiomlCFSTnZTAvi-jnzcep6MYVa5dfJim2GjSo"; // clé api
    const gallery = document.getElementById("gallery");
    const searchInput = document.getElementById("search");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    async function loadImages(query){
      const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      gallery.innerHTML="";
      data.results.forEach(photo=>{
        const img=document.createElement("img");
        img.src=photo.urls.small;
        img.alt=photo.alt_description||"";
        img.onclick=()=>{ modalImg.src=photo.urls.regular; modal.style.display="flex"; };
        gallery.appendChild(img);
      });
    }

    document.getElementById("go").onclick=()=>{
      const q=searchInput.value.trim();
      if(q) loadImages(q);
    };

    modal.onclick=()=>{ modal.style.display="none"; };