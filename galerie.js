const KEY = "FHxgrSiomlCFSTnZTAvi-jnzcep6MYVa5dfJim2GjSo"; // clé api
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

async function loadImages(query){
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=27&client_id=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  gallery.innerHTML="";
  if (data.results.length === 0) {
    gallery.innerHTML = "<div>Aucun résultat trouvé pour cette recherche.</div>";
    return;
  }
  data.results.forEach(photo=>{
    const img=document.createElement("img");
    img.src=photo.urls.small;
    img.alt=photo.alt_description||"";
    img.onclick=()=>{ modalImg.src=photo.urls.regular; modal.style.display="flex"; };
    gallery.appendChild(img);
  });
};


//
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById("go").click(); // Déclenche la recherche
    }
});
//



document.getElementById("go").onclick=()=>{
  const q=searchInput.value.trim();
      if(q) loadImages(q);
    };

    modal.onclick=()=>{ modal.style.display="none"; };

//Sélection des boutons de suggestion (ceux qui ont un data-tag)
const suggestionButtons = document.querySelectorAll('.suggestions button');
suggestionButtons.forEach(button => {
  button.onclick = () => {
    // Récupère le mot-clé depuis l'attribut data-tag
    const q = button.getAttribute('data-tag');        
    // Met à jour le champ de recherche (optionnel)
    searchInput.value = q; 
    if(q) {
      loadImages(q);
    }
  };
});

document.addEventListener('keydown', (e) => {
    if (modal.style.display === "flex") {
        if (e.key === 'Escape') {
            modal.style.display = "none"; // Échap pour fermer
        }
        // Pour navigation dans les images (si implémentée)
        if (e.key === 'ArrowRight') {
            // Image suivante
        }
        if (e.key === 'ArrowLeft') {
            // Image précédente
        }
    }
});
