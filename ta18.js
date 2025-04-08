const personas = [
    "Ana",
    "Carlos",
    "Beatriz",
    "Daniel",
    "Elena",
    "Fernando",
    "Gabriela",
    "Héctor",
    "Isabel",
    "Juan"
  ];
  
  function renderizarLista(filtro = "") {
    const ul = document.getElementById("listaPersonas");
    ul.innerHTML = ""; // Limpiar lista
  
    const filtradas = personas.filter(nombre =>
      nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  
    filtradas.forEach(nombre => {
      ul.innerHTML += `<li>${nombre}</li>`;
    });
  }
  
  document.getElementById("busqueda").addEventListener("input", (event) => {
    renderizarLista(event.target.value);
  });
  
  renderizarLista();
  