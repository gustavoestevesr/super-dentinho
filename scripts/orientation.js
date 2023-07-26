/* SEÇÃO DE CÓDIGO PARA DEFINIR POSICAO CORRETA DO OBJETO FINGER, SE FOR PC OU MOBILE */

let distanceFingerTop;
let distanceFingerLeft;

function setDistanceFingerTopLeft() {
  if (isMobile) {
    distanceFingerTop = 30;
    distanceFingerLeft = 30;
    navigateFromAnyToOrientation();
  } else {
    distanceFingerTop = 60;
    distanceFingerLeft = 60;
    navigateFromAnyToMenu();
  }
}

function toggleFullscreen() {
    const doc = window.document;
    const docEl = doc.documentElement;
  
    const requestFullscreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullscreen ||
      docEl.msRequestFullscreen;
    
    const exitFullscreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;
  
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      if (requestFullscreen) {
        docEl.addEventListener('click', requestFullscreen.bind(docEl));
        docEl.click();
      }
    } else {
      if (exitFullscreen) {
        exitFullscreen.call(doc);
      }
    }
  }
  

let isMobile;

// VERIFICA SE O DISPOSITIVO É UM PC OU UM CELULAR
function checkDevice() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  setDistanceFingerTopLeft();
  toggleFullscreen();
}

/* DETECTAR SE USUARIO AJUSTOU A TELA PARA HORIZONTAL */

let portrait = window.matchMedia("(orientation: portrait)");

screen.orientation.addEventListener("change", function (e) {
  portrait = window.matchMedia("(orientation: portrait)");

  if (!portrait.matches) {
    // ladscape
    navigateFromOrientationToMenu();
  }
});
