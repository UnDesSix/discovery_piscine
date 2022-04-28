function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

function randomRGB() {
    let RGBColor1 = getRandomInt(255);
    let RGBColor2 = getRandomInt(255);
    let RGBColor3 = getRandomInt(255);
    let hexString = '#' + RGBColor1.toString(16) + RGBColor2.toString(16) + RGBColor3.toString(16);
    return hexString;
}

function changeBackground() {
    color = randomRGB()
    document.body.style.background = color;
 }