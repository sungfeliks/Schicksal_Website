document.addEventListener('DOMContentLoaded', function(){
    const navToggle = document.querySelector('.nav-toggle');
    const navBar = document.querySelector('.navBar');

    navToggle.addEventListener('click', function() {
        navBar.classList.toggle('active');
    })
})