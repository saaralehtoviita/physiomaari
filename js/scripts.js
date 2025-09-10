/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

emailjs.init('YOUR_PUBLIC_KEY'); //sulkujen sisään tulee Maarin Public Key

//tehdään muuttuja lomakkeen tiedoista, etsii id:n contact-form html-tiedostosta
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();  // estää sivun uudelleenlatauksen

    //kenttien arvot
    const name = form.elements['user_name'].value.trim();
    const email = form.elements['user_email'].value.trim();
    const message = form.elements['message'].value.trim();

    //tarkastetaan, ettei ole tyhjiä kenttiä
    if (!name || !email || !message) {
        alert('Please fill in all fields so that I can get in touch.')
        return;
    }

    //sähköpostin tarkastus
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email adress');
        return;
    }

//funktio, joka lähettää lomakkeen tiedot EmailJS:n kautta
//YOUR_SERVICE_ID = EmailJS:n palvelutunnus (Service ID
//YOUR_TEMPLATE_ID = EmailJS:n mallipohjan (Template ID) tunnus
//this viittaa lähetettävän lomakkeen tietoihin

emailjs.sendform('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => {
        alert('Message sent successfully!');
        form.reset();
    }, (error) => {
        console.error(error);
        alert('Failed to send message. Please try again</span>');
    });
});

