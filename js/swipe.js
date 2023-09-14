document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-container');
    let isDragging = false;
    let startX, scrollLeft;
  
    cardContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - cardContainer.offsetLeft;
      scrollLeft = cardContainer.scrollLeft;
    });
  
    cardContainer.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  
    cardContainer.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    cardContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - cardContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the sensitivity as needed
      cardContainer.scrollLeft = scrollLeft - walk;
    });
  });
  