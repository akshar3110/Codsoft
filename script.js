function showContent(contentId) {
    // Hide all content items
    var contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}
// Initialize Typed.js
var typedFunctionality = new Typed('#typed-functionality', {
    strings: ["Web Development "],
    typeSpeed: 80,
    loop: true
});
