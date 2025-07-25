document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const mobileToggleBtn = document.querySelector('.mobile-theme-toggle i');

    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        toggleBtn.classList.toggle('fa-moon');
        toggleBtn.classList.toggle('fa-sun');
        mobileToggleBtn.classList.toggle('fa-moon');
        mobileToggleBtn.classList.toggle('fa-sun');
    }

    toggleBtn.addEventListener('click', toggleTheme);
    mobileToggleBtn.addEventListener('click', toggleTheme);
});


document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('div[id]');
  const navLinks = document.querySelectorAll('nav a');

  const activateLink = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const onScroll = () => {
    let currentId = '';
    const scrollY = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      if (scrollY >= offsetTop && scrollY < offsetTop + section.offsetHeight) {
        currentId = section.id;
      }
    });

    if (currentId) {
      activateLink(currentId);
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // zaznacz od razu po załadowaniu
});


document.addEventListener("DOMContentLoaded", () => {
  const lightbox = GLightbox({
    selector: '.glightbox'
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-btn");
    const nav = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            hamburger.classList.remove("is-active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Student IV roku Informatyki",
        "Entuzjasta nowych technologii",
        "Programista z pasją",
        "Miłośnik sportu"
    ];
    const el = document.getElementById("student-status");
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            el.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 60);
        } else {
            setTimeout(() => {
                el.textContent = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeText();
            }, 3500);
        }
    }

    typeText();
});


