document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPresupuesto");
  const producto = document.getElementById("producto");
  const plazo = document.getElementById("plazo");
  const extras = form.querySelectorAll('input[name="extras"]');
  const totalSpan = document.getElementById("total");

  const preciosBase = {
    landing: 299,
    ecommerce: 699,
    app: 1200
  };

  const preciosExtras = {
    seo: 100,
    backup: 50,
    hosting: 150
  };

  function calcularPresupuesto() {
    const productoSeleccionado = producto.value;
    let total = preciosBase[productoSeleccionado];

    // Sumar extras
    extras.forEach(extra => {
      if (extra.checked) {
        total += preciosExtras[extra.value];
      }
    });

    // Descuento por plazo 
    const dias = parseInt(plazo.value) || 0;
    if (dias < 15) {
      total *= 1.2;
    } else if (dias > 45) {
      total *= 0.9;
    }

    totalSpan.textContent = `${total.toFixed(2)} €`;
  }

  // Recalcular en cada cambio
  producto.addEventListener("change", calcularPresupuesto);
  plazo.addEventListener("input", calcularPresupuesto);
  extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));

  // Validación de campos de contacto
  function validarFormulario(e) {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const condiciones = document.getElementById("condiciones").checked;

    const nombreValido = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{1,15}$/.test(nombre);
    const apellidosValido = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{1,40}$/.test(apellidos);
    const telefonoValido = /^[0-9]{9}$/.test(telefono);
    const emailValido = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);

    if (!nombreValido || !apellidosValido || !telefonoValido || !emailValido || !condiciones) {
      alert("Por favor, completa correctamente todos los campos del formulario.");
      e.preventDefault(); 
    }
  }

  form.addEventListener("submit", validarFormulario);

  // Cálculo inicial
  calcularPresupuesto();
});
