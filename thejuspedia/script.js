// Selecciona todos los elementos con la clase 'collapsible'
const collapsibles = document.querySelectorAll('.collapsible');

// Agrega un evento 'click' a cada título para alternar el contenido
collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', () => {
        const content = collapsible.nextElementSibling; // Contenido asociado
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
            content.classList.add('hidden');
        }
    });
});