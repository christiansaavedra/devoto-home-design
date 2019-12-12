let zoomBg = document.querySelector(".zoom-bg");

function carousel(a, b) {
  zoomBg.style.display = "flex";
  console.log(a);

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

function zoomClose() {
  if (event.target !== event.currentTarget) {
    return;
  } else {
    zoomBg.style.display = "none";
  }
}
