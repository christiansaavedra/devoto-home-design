let zoomBg = document.querySelector(".zoom-bg");
let zoomBgPlanos = document.querySelector(".zoom-bg-planos");

var jmediaquery = window.matchMedia("(min-width: 769px)");
if (jmediaquery.matches) {
  function carousel(a, b, c) {
    zoomBg.style.display = "flex";
    zoomBg.innerHTML = `
  <div class="zoom-content">
  <div id="carouselExampleControls" class="carousel" data-ride="carousel" data-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="zoom-img" src="${a}" >
    </div>
    <div class="carousel-item">
      <img class="zoom-img" src="${b}" >
    </div>
    
    ${
      c
        ? `<div class="carousel-item asd">
        <img class="zoom-img" src="${c}" >
      </div>`
        : ""
    }
    
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div> `;
  }
  /* 
function carouselPlanos(a, b, c) {
  zoomBgPlanos.style.display = "flex";
  zoomBgPlanos.innerHTML = `
  <div class="zoom-content">
  <div id="carouselExampleControls" class="carousel" data-ride="carousel" data-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="zoom-img" src="${a}" >
    </div>
    <div class="carousel-item">
      <img class="zoom-img" src="${b}" >
    </div>
    
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div> `;
} */

  function zoomClose() {
    if (event.target !== event.currentTarget) {
      return;
    } else {
      zoomBg.style.display = "none";
      zoomBgPlanos.style.display = "none";
    }
  }
}

var jmediaquery2 = window.matchMedia("(max-width: 767px)");
if (jmediaquery2.matches) {
  var element = document.getElementById("parallax");
  element.classList.remove("parallax3");
  element.classList.add("parallax3-mobile");
  console.log(123);
}

$(document).ready(function() {
  $("anchor-proyecto").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function() {
  $("anchor-contacto").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function() {
  $("anchor-nosotros").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
