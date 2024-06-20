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
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleNewPasswordButton = document.getElementById('toggleNewPassword');
  const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');

  if (toggleNewPasswordButton) {
    toggleNewPasswordButton.addEventListener('click', function () {
      const newPassword = document.getElementById('newPassword');
      const eyeIconVisible = document.getElementById('eyeIconNewPasswordVisible');
      const eyeIconHidden = document.getElementById('eyeIconNewPasswordHidden');
      
      if (newPassword.type === 'password') {
        newPassword.type = 'text';
        eyeIconVisible.classList.add('hidden');
        eyeIconHidden.classList.remove('hidden');
      } else {
        newPassword.type = 'password';
        eyeIconVisible.classList.remove('hidden');
        eyeIconHidden.classList.add('hidden');
      }
    });
  }

  if (toggleConfirmPasswordButton) {
    toggleConfirmPasswordButton.addEventListener('click', function () {
      const confirmPassword = document.getElementById('confirmPassword');
      const eyeIconVisible = document.getElementById('eyeIconConfirmPasswordVisible');
      const eyeIconHidden = document.getElementById('eyeIconConfirmPasswordHidden');
      
      if (confirmPassword.type === 'password') {
        confirmPassword.type = 'text';
        eyeIconVisible.classList.add('hidden');
        eyeIconHidden.classList.remove('hidden');
      } else {
        confirmPassword.type = 'password';
        eyeIconVisible.classList.remove('hidden');
        eyeIconHidden.classList.add('hidden');
      }
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


// on scroll need to decrease height header
window.addEventListener('scroll', function() {
  var header = document.getElementById('mainHeader');
  if (window.scrollY > 0) {
      // Add class for smaller padding when scrolled
      header.classList.add('py-3');
      header.classList.remove('py-4');
  } else {
      // Add class for default padding when at the top
      header.classList.add('py-4');
      header.classList.remove('py-3');
  }
});


// dashboard sidebar toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggleSidebarBtn = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebarBtn && sidebar) {
    toggleSidebarBtn.addEventListener('click', function () {
      sidebar.classList.toggle('-translate-x-full');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function (event) {
      const isClickInside = toggleSidebarBtn.contains(event.target) || sidebar.contains(event.target);
      if (!isClickInside) {
        sidebar.classList.add('-translate-x-full');
      }
    });
  } 
});



// drop down dashboard
document.addEventListener("DOMContentLoaded", function() {
  var dropdownMenu = document.getElementById("dropdownMenu2");
  var dropdownContent = document.getElementById("dropdownContent");
  var caretIcon = document.getElementById("caretIcon"); // Assuming this is the ID of your caret icon image element

  if (dropdownMenu && dropdownContent && caretIcon) {
    dropdownMenu.addEventListener("click", function(event) {
      event.stopPropagation();
      dropdownContent.classList.toggle("hidden");
      caretIcon.classList.toggle("rotate-90"); // Toggle rotation of caret icon
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
      if (!dropdownMenu.contains(event.target)) {
        dropdownContent.classList.add("hidden");
        caretIcon.classList.remove("rotate-90"); // Ensure caret icon rotation is reset
      }
    });
  }
});

