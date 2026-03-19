const botones = document.querySelectorAll("button");
const container = document.getElementById("container");

botones.forEach(btn => {
  btn.addEventListener("click", async () => {
    const tipo = btn.dataset.type;

    const res = await fetch(`/receta/${tipo}`);
    const data = await res.json();

    if (data.length === 0) {
      container.innerHTML = "<p>No hay tacos</p>";
      return;
    }

    let html = "";

    data.forEach(taco => {
      html += `
        <h2 class="titulo-taco">${taco.nombre}</h2>
        <h3>Ingredientes:</h3>
        <p>Carne de: ${taco.ingredientes.proteina.nombre}, 
        Modo preparación: ${taco.ingredientes.proteina.preparacion}</p>
        <p>Salsa: ${taco.ingredientes.salsa.nombre} (${taco.ingredientes.salsa.picor})</p>
      `;

      taco.ingredientes["acompañamientos"].forEach((a, index) => {
        html += `
          <p><b>Acompañamiento ${index + 1}:</b></p>
          <p>Nombre: ${a.nombre}</p>
          <p>Cantidad: ${a.cantidad}</p>
          <p>Ingredientes: ${a.ingredientes.join(", ")}</p>
        `;
      });

      html += "<hr>";
    });

    container.innerHTML = html;
  });
});