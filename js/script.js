/* Lógica para carregar o vídeo ao chegar na div dele */

document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');

    const lazyLoadVideo = function(entry) {
        if (entry.isIntersecting) {
            const placeholder = entry.target;
            const iframe = document.createElement('iframe');
            iframe.src = placeholder.getAttribute('data-src');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('frameborder', '0');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            placeholder.innerHTML = '';
            placeholder.appendChild(iframe);
            observer.unobserve(placeholder);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(lazyLoadVideo);
    });

    videoPlaceholders.forEach(placeholder => {
        observer.observe(placeholder);
    });
});