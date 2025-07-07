document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    "proyecto1.jpg",
    "proyecto2.jpg",
    "proyecto3.png",
    "proyecto4.png",
    "proyecto5.jpg",
    "proyecto6.jpg",
    "proyecto7.jpg",
    "proyecto8.jpg",
    "proyecto1 - copia.jpg",
    "proyecto2 - copia.jpg",
    "proyecto3 - copia.png",
    "proyecto4 - copia.png",
    "proyecto5 - copia.jpg",
    "proyecto6 - copia.jpg",
    "proyecto7 - copia.jpg",
    "proyecto8 - copia.jpg",
    "proyecto1 - copia - copia.jpg",
    "proyecto2 - copia - copia.jpg",
    "proyecto4 - copia - copia.png",
    "proyecto3 - copia - copia.png",
    "proyecto5 - copia - copia.jpg",
    "proyecto6 - copia - copia.jpg",
    "proyecto7 - copia - copia.jpg",
    "proyecto8 - copia - copia.jpg"

    

    
  ];
  // Carga de imagenes en la galería
  const contenedor = document.getElementById("galeria-grid");

  imagenes.forEach(nombre => {
    const img = document.createElement("img");
    img.src = `../assets/images/${nombre}`;
    img.alt = `Imagen ${nombre}`;
    contenedor.appendChild(img);
  });
});
