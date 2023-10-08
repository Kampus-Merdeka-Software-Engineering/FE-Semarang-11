document.addEventListener('DOMContentLoaded', function () {
  // Memastikan elemen-elemen sudah ada di dalam dokumen HTML
  const counter = document.getElementById("counter");
  const daysValue = document.querySelector(".days .value");
  const hoursValue = document.querySelector(".hours .value");
  const minutesValue = document.querySelector(".minutes .value");
  const secondsValue = document.querySelector(".seconds .value");

  var endDate = new Date(((new Date()).getFullYear() + 1) + "/12/31 23:59:59").getTime();

  function updateTimer() {
    var now = new Date().getTime();
    var timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      counter.innerHTML = "Countdown Selesai";
    } else {
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Mengatur nilai elemen-elemen dengan innerText
      daysValue.innerText = padZero(days);
      hoursValue.innerText = padZero(hours);
      minutesValue.innerText = padZero(minutes);
      secondsValue.innerText = padZero(seconds);
    }
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  updateTimer();

  var timerInterval = setInterval(updateTimer, 1000);


  function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("message").textContent = "Email dan password harus diisi.";
    } else if (email === "contoh@email.com" && password === "password123") {
        document.getElementById("message").textContent = "Login berhasil!";
    } else {
        document.getElementById("message").textContent = "Email atau password salah.";
    }
  }
});



