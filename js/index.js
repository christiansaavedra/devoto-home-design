let zoomBg = document.querySelector(".zoom-bg");
let zoomBgPlanos = document.querySelector(".zoom-bg-planos");

function carousel(a, b) {
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

function carouselPlanos(a, b, c) {
  zoomBgPlanos.style.display = "flex";
  zoomBgPlanos.innerHTML = `
  <div class="zoom-content">
  <div id="carouselExampleControls" class="carousel" data-ride="carousel" data-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="zoom-img-planos" src="${a}" >
    </div>
    <div class="carousel-item">
      <img class="zoom-img-planos" src="${b}" >
    </div>
    <div class="carousel-item">
    <img class="zoom-img-planos" src="${c}" >
  </div>
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div> `;
}

function zoomClose() {
  if (event.target !== event.currentTarget) {
    return;
  } else {
    zoomBg.style.display = "none";
    zoomBgPlanos.style.display = "none";
  }
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
