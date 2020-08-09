const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggler');
let body = selectElement('.nav-links');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});