function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.classList.remove("hidden");
    modalImg.src = image.src;

    // reset animation
    modalImg.classList.remove("modal-animate-out");
    void modalImg.offsetWidth; // trick to re-trigger animation
    modalImg.classList.add("modal-animate-in");
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    // play zoom out
    modalImg.classList.remove("modal-animate-in");
    modalImg.classList.add("modal-animate-out");

    // wait until animation ends before hiding
    modalImg.addEventListener("animationend", () => {
        modal.classList.add("hidden");
    }, { once: true });
}


function openGuestlist() {
    document.getElementById("guestlistModal").classList.remove("hidden");
}
function closeGuestlist() {
    document.getElementById("guestlistModal").classList.add("hidden");
}

// Form Submission
// Toast Functions
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000); // hide after 3s
}

// Form Submission
const guestlistForm = document.getElementById("guestlistForm");
guestlistForm.addEventListener("submit", function(e) {
    e.preventDefault();
    closeGuestlist(); // close modal
    showToast("✅ You’ve been added to the guestlist!");
    guestlistForm.reset();
});