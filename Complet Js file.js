// script.js
document.getElementById('nextPageButton').addEventListener('click', () => {
    document.querySelector('.content').classList.add('fade-out');
    
    // Redirect after the animation duration (0.5s)
    setTimeout(() => {
        window.location.href = 'next-page.html'; // Replace with your next page URL
    }, 500);
});
