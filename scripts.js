document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let currentIndex;

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
            currentIndex = index;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = "none";
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
        updateModalImage();
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
        updateModalImage();
    });

    function updateModalImage() {
        modalImg.src = galleryImages[currentIndex].src;
        captionText.innerHTML = galleryImages[currentIndex].alt;
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});