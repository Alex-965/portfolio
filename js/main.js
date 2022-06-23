document.getElementById('more').onclick = function() {
    document.getElementById('first').classList.toggle('active');
    document.getElementById('second').classList.toggle('active');
}

document.getElementById('button').onclick = function() {
    document.getElementById('list').classList.toggle('active');
    document.getElementById('button').classList.toggle('active');
    document.getElementById('img').classList.toggle('active');
}



document.getElementById('en').onclick = function() {
    document.getElementById('en').classList.add('active');
    document.getElementById('uk').classList.remove('active');
}

document.getElementById('uk').onclick = function() {
    document.getElementById('uk').classList.add('active');
    document.getElementById('en').classList.remove('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () =>{

    section.forEach(sec =>{
         
        let top = window.scrollY;
        let offset = sec.offsetTop - 82;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id +']').classList.add('active');
            });
        };

    });

};