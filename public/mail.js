// Initialisation de EmailJS
emailjs.init("v5JcafjTNCkyu4z-r"); // Remplacez YOUR_PUBLIC_KEY par votre clé publique EmailJS

// Gestion e-mail avec EmailJS
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formulaire intercepté');

        emailjs.sendForm('service_yi5tkjs', 'template_owab0oc', this)
        .then(() => {
            console.log('SUCCESS!');

            //On modifie le texte du bouton
            document.querySelector('.button-submit').value = 'Message envoyé';
          
            
        }, (error) => {
            console.log('FAILED...', error);
          
        });
    });
}