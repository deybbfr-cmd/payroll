// Mobile menu toggle
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton && menuCloseButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
  });

  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
}

// Contact form popup
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popup-close");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Show popup
      popup.style.display = "flex";

      // Clear form
      form.reset();
    });
  }

  if (popupClose) {
    popupClose.addEventListener("click", function() {
      popup.style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const bookingForm = document.querySelector(".booking-form");
  const bookingPopup = document.getElementById("booking-popup");
  const bookingPopupClose = document.getElementById("booking-popup-close");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Show popup
      bookingPopup.style.display = "flex";

      // Clear form
      bookingForm.reset();
    });
  }

  if (bookingPopupClose) {
    bookingPopupClose.addEventListener("click", function() {
      bookingPopup.style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const orderForm = document.querySelector(".buy-form");
  const orderPopup = document.getElementById("order-popup");
  const orderPopupClose = document.getElementById("order-popup-close");

  if (buyForm) {
    buyForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Show popup
      orderPopup.style.display = "flex";

      // Clear form
      buyForm.reset();
    });
  }

  if (orderPopupClose) {
    orderPopupClose.addEventListener("click", function() {
      orderPopup.style.display = "none";
    });
  }
});