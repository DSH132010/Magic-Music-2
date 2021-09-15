const overlay = document.querySelector('.overlay');
const DragArea = document.getElementById('drag')
const FeaturesPara = document.querySelector('.para')
const slideNav1 = document.querySelector('.slide-nav-1')
const slideNav2 = document.querySelector('.slide-nav-2')
const slideNav3 = document.querySelector('.slide-nav-3')
const slideNav4 = document.querySelector('.slide-nav-4')
const slideNav5 = document.querySelector('.slide-nav-5')
const slideNav6 = document.querySelector('.slide-nav-6')
const tl = gsap.timeline()

var toggle = false


tl.from('nav', {
    opacity: 0,
    translateY: '-10px',
    duration: '0.6'
  })
  .from('.hero', {
    opacity: 0,
    translateX: '100px',
    duration: '0.6'
  })
  .from('.title', {
    opacity: 0,
    translateX: '-40px',
    duration: '0.6'
  })
  .from('.circle', {
    scale: 0,
    duration: '0.6'
  })


function openNav() {
  overlay.classList.add('overlay-open')
}

function closeNav() {
  overlay.classList.remove('overlay-open')
}


function dot1() {
  slideNav1.style.fontSize = `40px`
}

function dot2() {
  slideNav2.style.fontSize = `40px`
  slideNav1.style.fontSize = `30px`
  slideNav3.style.fontSize = `30px`
  slideNav4.style.fontSize = `30px`
  slideNav5.style.fontSize = `30px`
  slideNav6.style.fontSize = `30px`
}
function dot3() {
  slideNav3.style.fontSize = `40px`
  slideNav4.style.fontSize = `30px`
  slideNav5.style.fontSize = `30px`
  slideNav6.style.fontSize = `30px`
  slideNav2.style.fontSize = `30px`
  slideNav1.style.fontSize = `30px`
}
function dot4() {
  slideNav4.style.fontSize = `40px`
  slideNav5.style.fontSize = `30px`
  slideNav6.style.fontSize = `30px`
  slideNav2.style.fontSize = `30px`
  slideNav1.style.fontSize = `30px`
  slideNav3.style.fontSize = `30px`
}

function dot5() {
  slideNav5.style.fontSize = `40px`
  slideNav4.style.fontSize = `30px`
  slideNav6.style.fontSize = `30px`
  slideNav2.style.fontSize = `30px`
  slideNav1.style.fontSize = `30px`
  slideNav3.style.fontSize = `30px`
}
function dot6() {
  slideNav6.style.fontSize = `40px`
  slideNav5.style.fontSize = `30px`
  slideNav4.style.fontSize = `30px`
  slideNav2.style.fontSize = `30px`
  slideNav1.style.fontSize = `30px`
  slideNav3.style.fontSize = `30px`
}