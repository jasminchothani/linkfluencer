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


// document.addEventListener('DOMContentLoaded', function () {
//   const accordionButtons = document.querySelectorAll('.accordion-button');

//   accordionButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const target = document.querySelector(this.getAttribute('data-target'));
//       const icon = this.parentElement.querySelector('.icon');

//       // Close all other accordion items and set their icons to '+'
//       document.querySelectorAll('.accordion-collapse').forEach(collapse => {
//         if (collapse !== target) {
//           collapse.classList.remove('show');
//           collapse.previousElementSibling.querySelector('.icon').textContent = '+';
//         }
//       });

//       // Toggle the clicked item and set the icon accordingly
//       target.classList.toggle('show');
//       icon.textContent = target.classList.contains('show') ? '-' : '+';
//     });
//   });
// });


// document.querySelectorAll('.faq-toggle').forEach(button => {
//   button.addEventListener('click', () => {
//     const faqContent = button.nextElementSibling;

//     // Close all FAQ items
//     document.querySelectorAll('.faq-content').forEach(content => {
//       if (!content.classList.contains('hidden')) {
//         content.classList.add('hidden');
//         content.previousElementSibling.classList.remove('bg-green-green', 'text-white');
//         content.previousElementSibling.classList.add('text-blue-blue', 'border-blue-blue');
//         content.previousElementSibling.querySelector('.icon').textContent = '+';
//         content.previousElementSibling.querySelector('.icon').classList.add('text-blue-blue');
//       }
//     });

//     // Open the clicked FAQ item
//     if (faqContent.classList.contains('hidden')) {
//       faqContent.classList.remove('hidden');
//       button.classList.add('bg-green-green', 'text-white');
//       button.classList.remove('text-blue-blue', 'border-blue-blue');
//       button.querySelector('.icon').textContent = '-';
//       button.querySelector('.icon').classList.remove('text-blue-blue');
//     } else {
//       faqContent.classList.add('hidden');
//       button.classList.remove('bg-green-green', 'text-white');
//       button.classList.add('text-blue-blue', 'border-blue-blue');
//       button.querySelector('.icon').textContent = '+';
//       button.querySelector('.icon').classList.add('text-blue-blue');
//     }
//   });
// });

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