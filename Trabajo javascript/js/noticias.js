document.addEventListener("DOMContentLoaded", () => {
  fetch("data/noticias.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo de noticias.");
      }
      return response.json();
    })
    .then((noticias) => {
      const contenedor = document.getElementById("contenedor-noticias");

      noticias.forEach((noticia) => {
        const div = document.createElement("div");
        div.classList.add("noticia");

        div.innerHTML = `
          <h3>${noticia.titulo}</h3>
          <small>${noticia.fecha}</small>
          <p>${noticia.contenido}</p>
        `;

        contenedor.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error cargando las noticias:", error);
      const contenedor = document.getElementById("contenedor-noticias");
      contenedor.innerHTML = "<p>No se pudieron cargar las noticias.</p>";
    });
});
