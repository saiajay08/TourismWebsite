// Navbar toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Modal Elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close");
const bookNowBtn = document.getElementById("book-now");
const destinationInput = document.getElementById("destination");

// Open modal
document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const place = btn.getAttribute("data-place");
    const description = btn.getAttribute("data-description");
    const details = btn.getAttribute("data-details");

    modalTitle.textContent = place;
    modalDescription.textContent = description;
    modalDetails.textContent = details;

    bookNowBtn.setAttribute("data-place", place);
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Book Now button → prefill booking form
bookNowBtn.addEventListener("click", () => {
  const place = bookNowBtn.getAttribute("data-place");
  destinationInput.value = place;
  modal.style.display = "none";
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
});

// Booking form submit
document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const destination = destinationInput.value;
  const date = document.getElementById("date").value;

  alert(`Booking Confirmed!\nName: ${name}\nDestination: ${destination}\nDate: ${date}`);
  e.target.reset();
});
