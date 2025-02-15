var countDate = new Date();
countDate = new Date(
  countDate.getFullYear() + 1,
  countDate.getMonth() - 8,
  countDate.getDay() + 5,
  countDate.getHours() - 2
);
var x = setInterval(function () {
  var now = new Date();
  var diff = countDate - now;
  var month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  var Days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  var Hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("month").innerHTML = month;
  document.getElementById("days").innerHTML = Days;
  document.getElementById("hours").innerHTML = Hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
