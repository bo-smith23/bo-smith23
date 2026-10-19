fetch('components/nav-bar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        const placeholder = document.getElementById('nav-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
        }

        let currentUrl = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('#nav-links .nav-link').forEach(link => {
            if (link.getAttribute('href') === currentUrl) {
                link.classList.add('active');
            }
        });
    })
    .catch(error => {
        console.error('Failed to load navigation bar:', error);
    });