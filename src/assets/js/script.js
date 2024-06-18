// Check if any element with the class 'simplify-harness-section' exists
if (document.querySelector('.simplify-harness-section')) {
  // Create a new Swiper instance
  var swiper = new Swiper(".simplify-harness-section", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
}

// our parners page footer
if (document.querySelector('.our-partners')) {
  // Create a new Swiper instance
  var swiper = new Swiper(".our-partners", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
}

// Check if any element with the class 'testimonial-slider' exists
if (document.querySelector('.testimonial-slider')) {
  // Create a new Swiper instance
  var swiper = new Swiper(".testimonial-slider", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    mousewheel: true,
    keyboard: true,
  });
}


// password hide and show
document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const togglePasswordButton = document.getElementById('togglePassword');
  const eyeIconVisible = document.getElementById('eyeIconVisible');
  const eyeIconHidden = document.getElementById('eyeIconHidden');

  // Check if togglePasswordButton is not null before adding the event listener
  if (togglePasswordButton) {
    togglePasswordButton.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      // Toggle the visibility of eye icons
      eyeIconVisible.classList.toggle('hidden');
      eyeIconHidden.classList.toggle('hidden');
    });
  }
});


// faq
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const faqContent = button.nextElementSibling;
    const isCurrentlyHidden = faqContent.classList.contains('hidden');

    // Close all FAQ items
    document.querySelectorAll('.faq-content').forEach(content => {
      content.classList.add('hidden');
      content.previousElementSibling.classList.remove('bg-green-green', 'text-white');
      content.previousElementSibling.classList.add('text-blue-blue', 'border-blue-blue');
      content.previousElementSibling.querySelector('.icon').textContent = '+';
      content.previousElementSibling.querySelector('.icon').classList.add('text-blue-blue');
    });

    // Open the clicked FAQ item if it was hidden
    if (isCurrentlyHidden) {
      faqContent.classList.remove('hidden');
      button.classList.add('bg-green-green', 'text-white');
      button.classList.remove('text-blue-blue', 'border-blue-blue');
      button.querySelector('.icon').textContent = '-';
      button.querySelector('.icon').classList.remove('text-blue-blue');
    }
  });
});


// tab privacy policy
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('[data-tabs-target]');
  const tabContents = document.querySelectorAll('[role="tabpanel"]');

  if (tabs.length > 0 && tabContents.length > 0) {
      tabs.forEach(tab => {
          tab.addEventListener('click', function () {
              tabs.forEach(t => {
                  t.classList.remove('bg-mediumspringgreen-mediumspringgreen', 'font-bold', 'text-2xl', 'leading-7', 'py-4', 'px-8', 'rounded-lg', 'rounded-t-lg');
                  t.classList.add('font-semibold', 'text-xl', 'leading-6', 'p-4', 'rounded-lg');
              });
              tabContents.forEach(tc => tc.classList.add('hidden'));

              this.classList.remove('font-semibold', 'text-xl', 'leading-6', 'p-4', 'rounded-lg');
              this.classList.add('bg-mediumspringgreen-mediumspringgreen', 'font-bold', 'text-2xl', 'leading-7', 'py-4', 'px-8', 'rounded-lg', 'rounded-t-lg');
              const target = document.querySelector(this.dataset.tabsTarget);
              target.classList.remove('hidden');
          });
      });

      // Activate the first tab by default
      tabs[0].classList.remove('font-semibold', 'text-xl', 'leading-6', 'p-4', 'rounded-lg');
      tabs[0].classList.add('bg-mediumspringgreen-mediumspringgreen', 'font-bold', 'text-2xl', 'leading-7', 'py-4', 'px-8', 'rounded-lg', 'rounded-t-lg');
      tabContents[0].classList.remove('hidden');
  } 
});
