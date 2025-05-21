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

    // Hide all detail sections
    document.querySelectorAll('.location-detail').forEach(detail => {
      detail.style.display = 'none';
    });

    // Show the selected one
    document.getElementById(`${target}-detail`).style.display = 'block';

    // Optional: highlight selected item
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
});


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

