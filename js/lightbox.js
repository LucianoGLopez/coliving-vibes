const btnClose = document.querySelector("#btn-cierra");
const btnNext = document.querySelector("#btn-adelanta");
const btnPrevious = document.querySelector("#btn-retrocede");

const images = document.querySelectorAll(".cardsGalleryRossello img");

const lightbox = document.querySelector("#contenedor-principal");
const activeImage = document.querySelector("#imagen-activa");

let indiceImage = 0;


// Open lightbox
const openLightbox = (event) => {
  activeImage.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImage = Array.from(images).indexOf(event.target);
};

images.forEach((imagen)=> {
  imagen.addEventListener('click', openLightbox);
});


// Close lightbox
btnClose.addEventListener('click', ()=>{
  lightbox.style.display = 'none';
});

// Next image
const nextImage = () => {

  if(indiceImage === images.length -1){
    indiceImage = -1;
  }

  activeImage.src = images[indiceImage + 1].src;
  indiceImage++
};

btnNext.addEventListener('click', nextImage);

// Prev image
const previousImage = () => {

  if(indiceImage===0){
    indiceImage = images.length;
  }

  activeImage.src = images[indiceImage -1].src;
  indiceImage--;
};

btnPrevious.addEventListener('click', previousImage);

