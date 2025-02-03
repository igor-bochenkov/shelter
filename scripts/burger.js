function burger() {
  const burgerBtn = document.querySelector("[data-js-header-burger-button]"),
    burgerOverlay = document.querySelector("[data-js-header-overlay]"),
    menuWrapper = document.querySelector(".menu-header__wrapper"),
    headerItems = document.querySelectorAll(".header__menu-item");

  function openMenu() {
    burgerBtn.classList.add("is-active");
    burgerOverlay.classList.add("is-active");
  }

  burgerBtn.addEventListener("click", () => {
    openMenu();
  });
}

export default burger;
// function toggleBurgerClass() {
// burgerIcon.classList.toggle('active');
// menuHeader.classList.toggle('active');
// menuWrapper.classList.toggle('active');
// document.body.classList.toggle('lock');
// }
// function hideBurger() {
// burgerIcon.classList.remove('active');
// menuHeader.classList.remove('active');
// menuWrapper.classList.remove('active');
// document.body.classList.remove('lock');
// }

// burgerIcon.addEventListener('click', function () {
// toggleBurgerClass();
// });

// menuWrapper.addEventListener('click', (event) => {
// if (event.target === menuWrapper && menuHeader.classList.contains('active')) {
//   toggleBurgerClass();
// }
// });

// menuHeaderLinks.forEach(link => {
// link.addEventListener('click', hideBurger);
// })

//? =======================
// function closeBurgerMenu() {
//   burgerMenu.classList.remove('open');
//   burger.classList.remove('open');
//   document.body.style.overflow = '';

// }

// function openBurgerMenu() {
//   burgerMenu.classList.add('open');
//   burger.classList.add('open');
//   document.body.style.overflow = 'hidden';
// }

// closeBurgerMenu();

// burger.addEventListener('click', (e) => {
//   if (burger.classList.contains('open')) {
//     closeBurgerMenu();
//   } else {
//     openBurgerMenu();
//   }
// })

// burgerItems.forEach(item => {
//   item.addEventListener('click', closeBurgerMenu)
// })

// burgerOverlay.addEventListener('click', (e) => {
//   if (burgerMenu.classList.contains('open') && e.target !== burgerMenu) {
//     closeBurgerMenu();
//   }
// })

// window.onscroll = (e) => {
//   if (burgerMenu.classList.contains('open')) {
//     closeBurgerMenu();
//   }
// }
