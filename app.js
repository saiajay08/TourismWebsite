// Modal Elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close");
const bookNowBtn = document.getElementById("book-now");

// Booking form destination input
const destinationInput = document.getElementById("destination");

// Open modal with details
document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const place = btn.getAttribute("data-place");
    const description = btn.getAttribute("data-description");
    const details = btn.getAttribute("data-details");

    modalTitle.textContent = place;
    modalDescription.textContent = description;
    modalDetails.textContent = details;

    // Store destination for booking form
    bookNowBtn.setAttribute("data-place", place);

    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Book Now button → scroll to booking form & prefill
bookNowBtn.addEventListener("click", () => {
  const place = bookNowBtn.getAttribute("data-place");
  destinationInput.value = place; // auto-fill destination
  modal.style.display = "none";
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
});

// Booking form submit with AJAX
document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("booking.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    // Show popup with confirmation
    document.getElementById("popup-message").textContent = data;
    document.getElementById("success-popup").style.display = "flex";
    this.reset();
  })
  .catch(err => alert("Error: " + err));
});

// Close popup
document.querySelector(".close-popup").addEventListener("click", () => {
  document.getElementById("success-popup").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("success-popup")) {
    document.getElementById("success-popup").style.display = "none";
  }
});
