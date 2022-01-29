"use strict";

document.getElementById('home-link').onclick = function() {
    document.getElementById('home-link').classList.add('active');
    document.getElementById('about-link').classList.remove('active');
    document.getElementById('skills-link').classList.remove('active');
    document.getElementById('portfolio-link').classList.remove('active');
    document.getElementById('contacts-link').classList.remove('active');
}
document.getElementById('about-link').onclick = function() {
    document.getElementById('home-link').classList.remove('active');
    document.getElementById('about-link').classList.add('active');
    document.getElementById('skills-link').classList.remove('active');
    document.getElementById('portfolio-link').classList.remove('active');
    document.getElementById('contacts-link').classList.remove('active');
}
document.getElementById('skills-link').onclick = function() {
    document.getElementById('home-link').classList.remove('active');
    document.getElementById('about-link').classList.remove('active');
    document.getElementById('skills-link').classList.add('active');
    document.getElementById('portfolio-link').classList.remove('active');
    document.getElementById('contacts-link').classList.remove('active');
}
document.getElementById('portfolio-link').onclick = function() {
    document.getElementById('home-link').classList.remove('active');
    document.getElementById('about-link').classList.remove('active');
    document.getElementById('skills-link').classList.remove('active');
    document.getElementById('portfolio-link').classList.add('active');
    document.getElementById('contacts-link').classList.remove('active');
}
document.getElementById('contacts-link').onclick = function() {
    document.getElementById('home-link').classList.remove('active');
    document.getElementById('about-link').classList.remove('active');
    document.getElementById('skills-link').classList.remove('active');
    document.getElementById('portfolio-link').classList.remove('active');
    document.getElementById('contacts-link').classList.add('active');
}


