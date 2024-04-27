$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_spotify = $("#spotify");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_spotify.click(function () {
    window.open(
      "https://open.spotify.com/intl-pt/track/2ZTCl6wQMDSMfY4s8GHZdj?si=09309b0946264756",
      "_blank"
    );
  });
  document.getElementById("img").addEventListener("click", function () {
    window.open("./ab.jpeg", "_blank");
  });
  function open() {
    envelope.addClass("open").removeClass("close");
  }

  document.getElementById("open").addEventListener("click", function () {
    var messageDiv = document.createElement("div");

    messageDiv.textContent = "Uma mensagem";
    messageDiv.classList.add("message");

    document.body.appendChild(messageDiv);

    var heartDiv = document.createElement("div");

    heartDiv.innerHTML = "TE AMO MEU AMOR MINHA DIVA PERFEITA RAINHA";

    heartDiv.classList.add("hearts");

    document.body.appendChild(heartDiv);
  });
});
