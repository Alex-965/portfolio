document.getElementById('more').onclick = function() {
    document.getElementById('first').classList.toggle('active');
    document.getElementById('second').classList.toggle('active');
}

document.getElementById('button').onclick = function() {
    document.getElementById('list').classList.toggle('active');
    document.getElementById('button').classList.toggle('active');
}
