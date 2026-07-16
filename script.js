// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", function () {

    const abrir = document.getElementById("abrir");
    const loader = document.getElementById("loader");
    const invitacion = document.getElementById("invitacion");

    // Abrir invitación
    abrir.addEventListener("click", function () {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
            invitacion.style.display = "block";

            // Animación suave al aparecer
            invitacion.animate(
                [
                    { opacity: 0, transform: "translateY(30px)" },
                    { opacity: 1, transform: "translateY(0px)" }
                ],
                {
                    duration: 1000,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            // Ir al inicio
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 600);

    });

});

// Pequeño efecto de brillo en el título
setInterval(() => {

    const titulo = document.querySelector("header h1");

    if (titulo) {

        titulo.animate(
            [
                { opacity: 1 },
                { opacity: 0.7 },
                { opacity: 1 }
            ],
            {
                duration: 1800
            }
        );

    }

}, 3000);

// Mensaje de bienvenida en la consola
console.log("✨ Bienvenido a la invitación de graduación de María Cristina ✨");