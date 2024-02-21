let carouselInner = document.querySelector('.carousel-inner');

let carouselItems = document.querySelectorAll('.carousel-item');
let carouselLastItem = carouselItems[carouselItems.length - 1];

const btnLeft = document.querySelector('.slider__btn--left');
const btnRigth = document.querySelector('.slider__btn--rigth');

if (carouselInner) {
  carouselInner.insertAdjacentElement('afterbegin', carouselLastItem); // Coloca el ultimo item al inicio
}


function Next() {
  let carouselFirstItem = document.querySelectorAll('.carousel-item')[0];
  carouselInner.style.marginLeft = '-200%';
  carouselInner.style.transition = 'all 0.5s';
  setTimeout(function () {
    carouselInner.style.transition = 'none';
    carouselInner.insertAdjacentElement('beforeend', carouselFirstItem);
    carouselInner.style.marginLeft = '-100%';
  }, 500);
}

function Prev() {
  let carouselItems = document.querySelectorAll('.carousel-item');
  let carouselLastItem = carouselItems[carouselItems.length - 1];
  carouselInner.style.marginLeft = '0';
  carouselInner.style.transition = 'all 0.5s';
  setTimeout(function () {
    carouselInner.style.transition = 'none';
    carouselInner.insertAdjacentElement('afterbegin', carouselLastItem);
    carouselInner.style.marginLeft = '-100%';
  }, 500);
}
if (btnRigth) {
  btnRigth.addEventListener('click', () => {
    Next();
  });
}

if (btnLeft) {
  btnLeft.addEventListener('click', () => {
    Prev();
  });
}

if (carouselInner) {
  setInterval(() => {
    Next();
  }, 6000)
}




const nav = document.querySelector('.navegacion');
let menu = document.querySelector('.menu');
let cerrar = document.querySelector('.cerrar-menu');
const body = document.querySelector('body');
const fondo = document.querySelector('.fondo');
function navFijo() {
  const scrollY = window.scrollY;

  if (scrollY >= 400) {

    if (window.innerWidth <= 768) {
      menu.style.display = 'block';
      nav.style.display = 'none';
    } else {
      menu.style.display = 'none';
      nav.style.display = 'flex';
    }

  } else {
    nav.style.display = 'flex';
    menu.style.display = 'none';
    nav.classList.remove('nav-fijo');
    cerrar.style.display = 'none';
    nav.style.opacity = 1;
    nav.style.top = '355px';
    nav.style.marginTop = '-315px';
  }

  menu.addEventListener('click', () => {
    nav.style.opacity = .5;
    nav.style.top = '330px';
    nav.style.marginTop = '-315px';
    setTimeout(() => {
      nav.style.opacity = 1;
      nav.style.top = '0px';
      nav.style.marginTop = '0px';
    }, 90)
    nav.style.display = 'flex';
    nav.classList.add('nav-fijo');
    cerrar.style.display = 'block';
  })

  // if (nav.style.display == 'flex') {
  //   window.addEventListener('scroll', () => {
  //     nav.style.display = 'flex';
  //   })
  // }
  cerrar.addEventListener('click', () => {
    nav.style.display = 'none';
    nav.style.top = '330px';
    nav.style.marginTop = '-315px';
  })
}

window.addEventListener('scroll', navFijo);


// Verificacion en PC

if (window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    if (scrollY > 10) {
      nav.style.backgroundColor = 'var(--nav-fijo)';
      nav.style.marginTop = '-355px';
    }
    else {
      nav.style.backgroundColor = 'transparent';
      nav.style.marginTop = '-330px';
    }
  })


}


// Vehiculos

const slider = document.querySelector('.slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeftVehiculo = document.querySelector('.slider__btn--left-vehiculo');
const btnRigthVehiculo = document.querySelector('.slider__btn--right-vehiculo');


// ---El primer slider---

// if (slider) {
//   slider.insertAdjacentElement('afterbegin', sliderSectionLast)
// }
// function Next2() {
//   let sliderFirstItem = document.querySelectorAll('.slider__section')[0];
//   let marginLeft1 = '-200%'
//   slider.style.marginLeft = '-200%';
//   slider.style.transition = 'all 0.2s';
//   setTimeout(function () {
//     slider.style.transition = 'none';
//     slider.insertAdjacentElement('beforeend', sliderFirstItem);
//     slider.style.marginLeft = '-100%';
//   }, 200);
// }

// function Prev2() {
//   let sliderSection = document.querySelectorAll('.slider__section');
//   let sliderSectionLast = sliderSection[sliderSection.length - 1];
//   slider.style.marginLeft = '0';
//   slider.style.transition = 'all 0.2s';
//   setTimeout(function () {
//     slider.style.transition = 'none';
//     slider.insertAdjacentElement('afterbegin', sliderSectionLast);
//     slider.style.marginLeft = '-100%';
//   }, 200);
// }


// ---El slider hecho de otra manera diferente---
translate = 0;
function Next2() {
  slider.style.transition = 'all 0.2s';
  if (translate > -80) {
    slider.style.transform = `translateX(${translate - 20}%)`;
    translate -= 20;
  } else {
    slider.style.transform = `translateX(0%)`;
    translate = 0;
  }
}

function Prev2() {
  slider.style.transition = 'all 0.2s';
  if (translate < 0) {
    slider.style.transform = `translateX(${translate + 20}%)`;
    translate += 20;
  } else {
    slider.style.transform = `translateX(-80%)`;
    translate = -80;
  }
}



if (btnRigthVehiculo) {
  btnRigthVehiculo.addEventListener('click', () => {
    Next2(0);
  });
}

if (btnLeftVehiculo) {
  btnLeftVehiculo.addEventListener('click', () => {
    Prev2();
  });
}


/* Focus Slider Mini  */
const sliderMini = document.querySelector('.slider-mini');
let sliderSectionMini = document.querySelectorAll('.slider__section-mini');

// Añadir eventos a todos los elementos con la clase 'sliderSectionMini'
sliderSectionMini.forEach((element, index) => {
  element.addEventListener('mouseenter', () => {
    // Remover la clase 'no-selected' para aplicar la transición definida en CSS
    element.classList.remove('no-selected');

    if (index === 0) {
      element.classList.remove('no-selected');
    }
  });

  element.addEventListener('mouseleave', () => {
    // Agregar la clase 'no-selected' al salir para revertir la transición
    if (!element.classList.contains('selected'))
      element.classList.add('no-selected');
    // if (index === 0) {
    //   element.classList.remove('no-selected');
    // }
  });
})

sliderSectionMini.forEach(element => {
  element.addEventListener('click', () => {
    sliderSectionMini.forEach(el => {
      el.classList.remove('selected');
      el.classList.add('no-selected');
    });
    element.classList.add('selected');
    element.classList.remove('no-selected');
  })
})

let selectedPosition = 0;
function MoverSelected() {
  let array = [];
  sliderSectionMini.forEach((element, index) => {
    array[index] = element;
  })
  if (array[selectedPosition] == undefined) {
    selectedPosition = 0;
    array[selectedPosition + 4].classList.add('no-selected');
  }
  array[selectedPosition].classList.add('selected');
  array[selectedPosition].classList.remove('no-selected');
  if (selectedPosition != 0) {
    array[selectedPosition - 1].classList.add('no-selected');
    array[selectedPosition - 1].classList.remove('selected');
  }


}

function MoverSelected2() {
  let array = [];
  sliderSectionMini.forEach((element, index) => {
    array[index] = element;
  })
  if (selectedPosition == 4) {
    array[0].classList.add('no-selected');
  }
  array[selectedPosition].classList.add('selected');
  array[selectedPosition].classList.remove('no-selected');
  if (selectedPosition != 4) {
    array[selectedPosition + 1].classList.add('no-selected');
    array[selectedPosition + 1].classList.remove('selected');
  }
}

btnRigthVehiculo.addEventListener('click', () => {
  if (selectedPosition <= 4) {
    selectedPosition++;
  } else {
    selectedPosition = 0;
  }
  MoverSelected();
})

btnLeftVehiculo.addEventListener('click', () => {
  if (selectedPosition == 0) {
    selectedPosition = 4;
  } else {
    selectedPosition--;
  }
  MoverSelected2();
})

// Remover y agregar las clases selected u active en los sliders
let seccion1 = document.querySelector('.seccion1');
seccion1.addEventListener('click', (e) => {
  e.preventDefault();
  slider.style.transition = 'all 0.2s';
  slider.style.transform = `translateX(0%)`;
  selectedPosition = 0;
  translate = 0;
})

let seccion2 = document.querySelector('.seccion2');
seccion2.addEventListener('click', (e) => {
  e.preventDefault();
  slider.style.transition = 'all 0.2s';
  slider.style.transform = `translateX(-20%)`;
  selectedPosition = 1;
  translate = -20;
})

let seccion3 = document.querySelector('.seccion3');
seccion3.addEventListener('click', (e) => {
  e.preventDefault();
  slider.style.transition = 'all 0.2s';
  slider.style.transform = `translateX(-40%)`;
  selectedPosition = 2;
  translate = -40;
})

let seccion4 = document.querySelector('.seccion4');
seccion4.addEventListener('click', (e) => {
  e.preventDefault();
  slider.style.transition = 'all 0.2s';
  slider.style.transform = `translateX(-60%)`;
  selectedPosition = 3;
  translate = -60;
})

let seccion5 = document.querySelector('.seccion5');
seccion5.addEventListener('click', (e) => {
  e.preventDefault();
  slider.style.transition = 'all 0.2s';
  slider.style.transform = `translateX(-80%)`;
  selectedPosition = 4;
  translate = -80;
})

