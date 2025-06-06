const reviews = [
  {
    text: `"The level of care at Dr. Hariharan's practice is beyond exceptional. His approach to Siddha medicine is compassionate and highly effective."`,
    patient: "Emily Chen - Patient for 2 years"
  },
  {
    text: `"Dr. Hariharan thoroughly explains treatments and ensures the best possible care. I'm grateful for his expertise."`,
    patient: "Rajesh Kumar - Patient for 5 years"
  },
  {
    text: `"I've seen tremendous improvements in my health under Dr. Hariharan’s guidance. His preventative approach makes a huge difference."`,
    patient: "Aisha Patel - Patient for 3 years"
  },
  {
    text: `"The Siddha treatments recommended by Dr. Hariharan worked wonders for my condition. Highly recommended!"`,
    patient: "Vikram Singh - Patient for 4 years"
  }
];

let currentReviewIndex = 0;

function updateReview(index) {
  const testimonialElement = document.querySelector(".testimonial");
  const patientElement = document.querySelector(".patient");

  testimonialElement.textContent = reviews[index].text;
  patientElement.textContent = reviews[index].patient;
}

document.querySelector(".left-arrow").addEventListener("click", () => {
  currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
  updateReview(currentReviewIndex);
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  updateReview(currentReviewIndex);
});

document.querySelectorAll('.location-option').forEach(option => {
  option.addEventListener('click', () => {
    const target = option.getAttribute('data-location');

    document.querySelectorAll('.location-detail').forEach(detail => {
      detail.style.display = 'none';
    });

    document.getElementById(`${target}-detail`).style.display = 'block';

    document.querySelectorAll('.location-option').forEach(opt => opt.classList.remove('active-location'));
    option.classList.add('active-location');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ✅ Matrix Scramble Looping Effect
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("matrix-title");
  const originalText = el.textContent;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let interval = null;

  function scrambleOnce() {
    let frame = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      let output = "";
      for (let i = 0; i < originalText.length; i++) {
        if (i < frame) {
          output += originalText[i];
        } else if (originalText[i] === " ") {
          output += " ";
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      el.textContent = output;
      frame++;

      if (frame > originalText.length) {
        clearInterval(interval);
      }
    }, 60);
  }

  scrambleOnce();
  setInterval(scrambleOnce, 1500); // repeat every 10 seconds
});
