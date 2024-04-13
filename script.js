const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
   nav.classList.toggle('slide');
});

$(document).ready(function() {
   $("#contactForm").validate({
       rules: {
           fullname: {
               required: true,
               maxlength: 20
           },
           email: {
               required: true,
               email: true,
               maxlength: 30
           },
           phone: {
               required: true,
               number: true,
               maxlength: 12
           },
           message: {
               required: true,
               maxlength: 50
           }
       },
       messages: {
           fullname: {
               required: "Nama lengkap harus diisi",
               maxlength: "Nama lengkap tidak boleh lebih dari 20 karakter"
           },
           email: {
               required: "Email harus diisi",
               email: "Format email tidak valid",
               maxlength: "Email tidak boleh lebih dari 30 karakter"
           },
           phone: {
               required: "Nomor handphone harus diisi",
               number: "Nomor handphone harus berupa angka",
               maxlength: "Nomor handphone tidak boleh lebih dari 12 digit"
           },
           message: {
               required: "Pesan harus diisi",
               maxlength: "Pesan tidak boleh lebih dari 50 karakter"
           }
       }
   });
 });