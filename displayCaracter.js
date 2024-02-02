console.log('helllloooo')


let tamaImg = document.querySelector('#tamaImg')
tamaImg.src = './landingState.svg'
console.log(tamaImg.src);

let persosNormalArray = [
    './persoSVG/persoNormal1.png',
    './persoSVG/persoNormal2.png',
    './persoSVG/persoNormal3.png'
]


let currentIndex = 0; // Initialize the index

// Define a function to change the src attribute of tamaImg
function changeImage() {
    tamaImg.src = persosNormalArray[currentIndex];
    currentIndex = (currentIndex + 1) % persosNormalArray.length; // Increment index, loop back to 0 if it exceeds array length
}

// Call the function immediately to set the initial image
changeImage();

// Call changeImage() every second
let intervalId = setInterval(changeImage, 500);
  