// Function to open a modal by ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block"; // Show the modal
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

// Function to close a modal when clicking outside of the modal content
function closeModal(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        document.body.style.overflow = ""; // Restore background scrolling
    }
}

// Function to close a modal by ID
function closeModalById(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restore background scrolling
    }
}
