function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function changeOrientationBackgroundImage() {
    document.querySelector('#rotateScreen').style.display = "flex"
    document.body.classList.add("rotatescreen");

    await delay(4000);

    document.querySelector('#rotateScreen').style.display = "none"
    document.body.classList.remove("rotatescreen");

    document.querySelector('#menu').style.display = "flex"
    document.body.classList.add("start");

}

changeOrientationBackgroundImage()