const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu__toggler');
let body = selectElement('.nav__list');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});