document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores del formulario
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Formatear el mensaje para WhatsApp
    let whatsappMessage = `Hola, me llamo ${name}.\nCorreo: ${email}\nMensaje: ${message}`;

    // Número de WhatsApp de destino (debe incluir el código del país, por ejemplo: 5491123456789)
    let phoneNumber = '34606666614';

    // URL de la API de WhatsApp
    let whatsappUrl = `https://wa.me/${34606666614}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redireccionar a la URL de WhatsApp
    window.location.href = whatsappUrl;
});