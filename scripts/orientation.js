/* SEÇÃO DE CÓDIGO PARA DEFINIR POSICAO CORRETA DO OBJETO FINGER, SE FOR PC OU MOBILE */

let distanceFingerTop
let distanceFingerLeft

function setDistanceFingerTopLeft() {
    if (isMobile) {
        distanceFingerTop = 40
        distanceFingerLeft = 35
        navigateFromAnyToOrientation()
    } else {
        distanceFingerTop = 60
        distanceFingerLeft = 60
        navigateFromAnyToMenu()
    }
}

let isMobile

// VERIFICA SE O DISPOSITIVO É UM PC OU UM CELULAR
function checkDevice() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        isMobile = true
    }
    else {
        isMobile = false        
    }

    setDistanceFingerTopLeft()
}

/* DETECTAR SE USUARIO AJUSTOU A TELA PARA HORIZONTAL */

let portrait = window.matchMedia("(orientation: portrait)");

screen.orientation.addEventListener("change", function(e) {
    portrait = window.matchMedia("(orientation: portrait)");

    if ( !portrait.matches ) { // ladscape
        navigateFromOrientationToMenu()
    }
});