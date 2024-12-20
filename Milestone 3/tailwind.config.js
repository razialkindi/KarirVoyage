/*=============== LOGIN FORM ===============*/
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let loginTitle = document.querySelector('.login-form-container h1'); // Add this line to select the h1 element

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    loginTitle.innerText = "KarirVoyage"; // Change "Your New Title" to the desired title
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
    loginTitle.innerText = "KarirVoyage"; // Reset the title when closing the form
});

/*=============== SIGNUP FORM ===============*/
let formSBtn = document.querySelector('#signup-btn');
let signupForm = document.querySelector('.signup-form-container');
let formSClose = document.querySelector('#form-close-signup');
let signupTitle = document.querySelector('.signup-form-container h1');

// Simpan teks default
const defaultTitleText = "KarirVoyage";

formSBtn.addEventListener('click', () => {
    signupForm.classList.add('active');
    signupTitle.innerText = defaultTitleText;
});

formSClose.addEventListener('click', () => {
    signupForm.classList.remove('active');
    signupTitle.innerText = defaultTitleText; // Mengembalikan teks default
});

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}