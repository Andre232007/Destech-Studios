const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
   menuToggle.addEventListener('click', () => {
       mainNav.classList.toggle('active');
       menuToggle.classList.toggle('active'); // Opcional: para mudar o visual do botão de menu
   });
}
// Você pode adicionar mais JavaScript aqui, como para fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
   link.addEventListener('click', () => {
       mainNav.classList.remove('active');
       menuToggle.classList.remove('active'); // Opcional
   });
});
AOS.init({
   duration: 1000,
   easing: 'ease-in-out',
   once: true
});

(function() {
   emailjs.init("YOUR_USER_ID"); // Substitua "YOUR_USER_ID" pela sua chave pública do EmailJS
})();

document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('contact-form');
   if (form) {
       form.addEventListener('submit', function(event) {
           event.preventDefault();

           const nome = document.querySelector('input[@name="nome"]').value;
           const email = document.querySelector('input[@name="email"]').value;
           const assunto = document.querySelector('input[@name="assunto"]').value;
           const mensagem = document.querySelector('textarea[@name="mensagem"]').value;

           const serviceID = 'service_YOUR_SERVICE_ID'; // Substitua
           const templateID = 'template_YOUR_TEMPLATE_ID'; // Substitua

           const templateParams = {
               from_name: nome,
               from_email: email,
               subject: assunto,
               message: mensagem
           };

           emailjs.send(serviceID, templateID, templateParams)
               .then(function(response) {
                   alert('Mensagem enviada com sucesso!', response.status, response.text);
                   form.reset();
               }, function(error) {
                   alert('Falha ao enviar a mensagem...', error);
               });
       });
   }
});
