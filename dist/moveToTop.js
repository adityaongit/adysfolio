const scrollToTopButton = document.getElementById("scroll-to-top");

// Function to check if page is scrollable
function isPageScrollable() {
    return document.documentElement.scrollHeight > window.innerHeight;
}

// Function to update button visibility
function updateButtonVisibility() {
    const isScrollable = isPageScrollable();
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (isScrollable && scrollPosition > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// Show/hide button when user scrolls
window.addEventListener("scroll", updateButtonVisibility);

// Check button visibility on page load and resize
window.addEventListener("load", () => {
    updateButtonVisibility();
});
window.addEventListener("resize", () => {
    updateButtonVisibility();
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// Attach click event to the button
scrollToTopButton.addEventListener("click", scrollToTop);

// Initial check
updateButtonVisibility();
