document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));


const btnTop = document.createElement('button');

btnTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
btnTop.classList.add('btn-top');

document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTop.classList.add('active');
    } else {
        btnTop.classList.remove('active');
    }
});

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});