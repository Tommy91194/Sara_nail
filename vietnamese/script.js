// Toggle the menu when the hamburger icon is clicked
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navbarNav').classList.toggle('active');
    document.getElementById('hamburger').classList.toggle('active');
});

// Change header background color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Adds scrolled effect
    } else {
        header.classList.remove('scrolled');
    }
}); */


// Toggle hamburger menu
 document.getElementById('hamburger').addEventListener('click', function () {
    const nav = document.getElementById('navbarNav');
    nav.classList.toggle('active');
});

// Close hamburger menu when a link is clicked
const navLinks = document.querySelectorAll('#navbarNav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const nav = document.getElementById('navbarNav');
        nav.classList.remove('active'); // Hide the menu
    });
}); 

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.horizontal-scroll-nav a');
    const sections = document.querySelectorAll('section');

    // Cuộn mượt khi nhấp vào liên kết
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Làm nổi bật liên kết khi section tương ứng được hiển thị
    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});

document.querySelectorAll('.quick-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        const targetId = this.getAttribute('href'); // Lấy ID của section cần cuộn đến
        const targetSection = document.querySelector(targetId); // Tìm section tương ứng
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Cuộn mượt
                block: 'start'     // Căn section lên đầu màn hình
            });
        }
    });
});

const backToTopButton = document.getElementById('back-to-top');

// Hiển thị nút khi cuộn xuống
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Cuộn lên đầu trang khi nhấp vào nút
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});