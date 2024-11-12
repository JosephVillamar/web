document.addEventListener('DOMContentLoaded', function() {
    var elementos = document.querySelectorAll('.marco2');

    elementos.forEach(function(elemento) {
        elemento.addEventListener('mouseover', function() {
            elemento.style.transform = 'scale(1.1)';
            elemento.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.2)';
        });

        elemento.addEventListener('mouseout', function() {
            elemento.style.transform = 'scale(1)';
            elemento.style.boxShadow = 'none';
        });
    });
});