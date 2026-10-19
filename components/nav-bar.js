fetch('components/nav-bar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;

        let currentUrl = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('#nav-links .nav-link').forEach(link => {
            if (link.getAttribute('href') === currentUrl) {
                link.classList.add('active');
            }
        });
    });