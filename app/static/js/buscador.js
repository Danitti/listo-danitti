const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sin-resultados");

// Sin tareas no hay buscador: getElementById devuelve null
if (buscador !== null) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.trim().toLowerCase();
        let visibles = 0;

        for (const tarea of document.querySelectorAll("[data-task-item]")) {
            const coincide = tarea.querySelector(".task-title").textContent.toLowerCase().includes(texto);

            tarea.classList.toggle("d-none", !coincide);
            tarea.classList.toggle("coincide", coincide && texto !== "");

            if (coincide) {
                visibles++;
            }
        }

        sinResultados.classList.toggle("d-none", visibles>0);
    })
    // La tecla / lleva al buscador, como en GitHub o YouTube
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "/" && document.activeElement !== buscador) {
            evento.preventDefault();
            buscador.focus();
        }
    });
}