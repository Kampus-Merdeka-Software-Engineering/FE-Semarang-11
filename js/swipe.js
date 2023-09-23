document.addEventListener('DOMContentLoaded', function () {
  const cardWrapper = document.querySelector('.card-wrapper');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  const cardWidth = document.querySelector('.card').offsetWidth;
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function goToCard(index) {
      cardWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
      currentIndex = index;

      // Mengecek apakah kita berada di kartu pertama atau terakhir
      // dan menonaktifkan atau mengaktifkan tombol-tombol sesuai kebutuhan
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === cardWrapper.children.length - 1;
  }

  // Fungsi untuk menghandle swipe pada perangkat sentuh
  cardWrapper.addEventListener('touchstart', function (event) {
      touchStartX = event.touches[0].clientX;
  });

  cardWrapper.addEventListener('touchmove', function (event) {
      touchEndX = event.touches[0].clientX;
  });

  cardWrapper.addEventListener('touchend', function () {
      const swipeDistance = touchStartX - touchEndX;

      if (swipeDistance > 50 && currentIndex < cardWrapper.children.length - 1) {
          goToCard(currentIndex + 1);
      } else if (swipeDistance < -50 && currentIndex > 0) {
          goToCard(currentIndex - 1);
      }
  });

  nextButton.addEventListener('click', function () {
      if (currentIndex < cardWrapper.children.length - 1) {
          goToCard(currentIndex + 1);
      }
  });

  prevButton.addEventListener('click', function () {
      if (currentIndex > 0) {
          goToCard(currentIndex - 1);
      }
  });
});
