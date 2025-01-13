window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

function createSnowflakes() {
  const snowContainer = document.querySelector(".snow-container");
  const numberOfSnowflakes = 50;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.animationDelay = Math.random() * 2 + "s";

    snowContainer.appendChild(snowflake);
  }
}

createSnowflakes();

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".about-film");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  section.classList.add("show");
              }
          });
      },
      { threshold: 0.2 } 
  );

  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showItem(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector('.carousel-button-left').addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          showItem(currentIndex);
      }
  });

  document.querySelector('.carousel-button-right').addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
          currentIndex++;
          showItem(currentIndex);
      }
  });
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const facts = document.querySelectorAll(".fact");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  facts.forEach((fact) => {
    observer.observe(fact);
  });
});

document.getElementById("toggle-button").addEventListener("click", function () {
  const hiddenFacts = document.querySelectorAll(".hidden-fact");
  const button = this;

  hiddenFacts.forEach(fact => {
    if (fact.style.display === "none" || fact.style.display === "") {
      fact.style.display = "list-item";
    } else {
      fact.style.display = "none";
    }
  });

  button.textContent = 
    button.textContent === "↓" ? "	↑" : "↓";
});

window.onscroll = function() {
  var btn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = 'block';
  } else {
      btn.style.display = 'none';
  }
};

document.getElementById('scrollToTopBtn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}; 