document.addEventListener('DOMContentLoaded', function () {
    // Attach click event listeners to all publication titles
    document.querySelectorAll('.publication-title').forEach(title => {
        title.addEventListener('click', () => {
            const details = title.nextElementSibling;
            const isActive = details.classList.contains('active');

            // Close all open publication details
            document.querySelectorAll('.publication-details.active').forEach(openDetails => {
                openDetails.classList.remove('active');
            });
            document.querySelectorAll('.publication-title.active').forEach(openTitle => {
                openTitle.classList.remove('active');
            });

            // Toggle the clicked publication's details
            if (!isActive) {
                details.classList.add('active');
                title.classList.add('active');
            }
        });
    });
});