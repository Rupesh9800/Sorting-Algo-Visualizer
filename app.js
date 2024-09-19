document.addEventListener('DOMContentLoaded', function() {
    // Prevent default behavior for anchor tags within the video card
    const videoCardLinks = document.querySelectorAll('.col-md-6 .card-body a');
    videoCardLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor tag behavior
        // Add custom behavior if needed
      });
    });
  });

