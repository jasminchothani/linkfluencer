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




// workig fine
// const passwordInput = document.getElementById('password');
// const togglePasswordButton = document.getElementById('togglePassword');
// const eyeIconVisible = document.getElementById('eyeIconVisible');
// const eyeIconHidden = document.getElementById('eyeIconHidden');

// togglePasswordButton.addEventListener('click', () => {
//   const isPassword = passwordInput.type === 'password';
//   passwordInput.type = isPassword ? 'text' : 'password';

//   // Toggle the visibility of eye icons
//   eyeIconVisible.classList.toggle('hidden');
//   eyeIconHidden.classList.toggle('hidden');
// });


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
