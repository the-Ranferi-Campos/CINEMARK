document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('ageForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const ageInput = document.getElementById('ageInput');
        const age = parseInt(ageInput.value, 10);
        
        if (isNaN(age)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }
        
        if (age < 15) {
            alert("¡Felicidades! Eres elegible para un descuento.");
        } else {
            alert("Lo sentimos, no eres elegible para un descuento.");
        }
    });
});