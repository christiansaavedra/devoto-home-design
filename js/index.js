let zoomBg = document.querySelector(".zoom-bg");
let zoomBgPlanos = document.querySelector(".zoom-bg-planos");
let cerrarPlanos = document.querySelector(".cerrarPlanos"); //Es un div fantasma que uso para poder cerrar el carrousel al tocar fuera del mismo.
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

  function zoomClose() {
    if (event.target !== event.currentTarget) {
      return;
    } else {
      zoomBg.style.display = "none";
    }
  }
}

/*  */
let planos = [
  {
    url: "img/Planos/1.jpg",
  },
  {
    url: "img/Planos/2.jpg",
  },
  {
    url: "img/Planos/3.jpg",
  },
  {
    url: "img/Planos/page01_1.png",
  },
  {
    url: "img/Planos/page02_1.png",
  },
  {
    url: "img/Planos/page03_1.png",
  },
  {
    url: "img/Planos/page04_1.png",
  },
  {
    url: "img/Planos/page05_1.png",
  },
  {
    url: "img/Planos/page06_1.png",
  },
  {
    url: "img/Planos/page07_1.png",
  },
  {
    url: "img/Planos/page08_1.png",
  },
  {
    url: "img/Planos/page09_1.png",
  },
  {
    url: "img/Planos/page10_1.png",
  },
  {
    url: "img/Planos/page11_1.png",
  },
  {
    url: "img/Planos/page12_1.png",
  },
  {
    url: "img/Planos/page13_1.png",
  },
  {
    url: "img/Planos/page14_1.png",
  },
  {
    url: "img/Planos/page15_1.png",
  },
];

const carouselPlanos = async () => {
  cerrarPlanos.style.display = "flex";
  zoomBgPlanos.style.display = "flex";
  zoomBgPlanos.innerHTML = `
  <div id="carouselPlanos" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="img/Planos/1.jpg" alt="First slide">
    </div>
    ${planos.map((plano) => {
      return `<div class="carousel-item">
      <img class="d-block w-100" src="${plano.url}" alt="Second slide">
    </div>`;
    })}
    
    
  </div>
  <a class="carousel-control-prev" href="#carouselPlanos" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselPlanos" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   
    
`;
};

function zoomClosePlanos() {
  zoomBgPlanos.style.display = "none";
  cerrarPlanos.style.display = "none";
}
/*  */
var jmediaquery2 = window.matchMedia("(max-width: 767px)");
if (jmediaquery2.matches) {
  var element = document.getElementById("parallax");
  element.classList.remove("parallax3");
  element.classList.add("parallax3-mobile");
}

$(document).ready(function () {
  $("anchor-proyecto").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  $("anchor-contacto").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  $("anchor-nosotros").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
