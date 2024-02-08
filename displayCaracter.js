// // a refaire en CSS

// console.log('helllloooo')


// let tamaImg = document.querySelector('#tamaImg')

// let persosNormalArray = [
//     './persoSVG/persoNormal1.png',
//     './persoSVG/persoNormal2.png',
//     './persoSVG/persoNormal3.png'
// ]


// let currentIndex = 0; // Initialize the index

// // Define a function to change the src attribute of tamaImg
// function changeImage() {
//     if (tamaImg.src.includes('deadCharacter.svg')){
//         changeTitle()
//         clearInterval(intervalId)
//     } else {
//         tamaImg.src = persosNormalArray[currentIndex];
//         currentIndex = (currentIndex + 1) % persosNormalArray.length; // Increment index, loop back to 0 if it exceeds array length
//     }
// }

// // Call the function immediately to set the initial image
// changeImage();

// // Call changeImage() every second
// let intervalId = setInterval(changeImage, 500);

// function changeTitle(){
//     let title = document.querySelector('.playground>p')
//     title.textContent= "✟ J'étais Pivoine ✟"
// }