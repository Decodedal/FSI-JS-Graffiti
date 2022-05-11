
// // Select some elements...
// let header = document.querySelector('#page-header')
// header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for (let i = 0 ; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

// let dogName = document.querySelector('.dog-name')
// // dogName.textContent = "JIFF"
// for (let i = 0; i < dogName.length; i++){
//     dogName[i].textcontent = "JIFF"
// }
// let ptext = document.querySelector("P")
// for (text in ptext){
// ptext.style.Color = "red"
// }
let head = document.querySelector('#page-header')
head.style.backgroundColor = "blue"
head.style.color = "white"

let ptext = document.querySelector(".dog-description")
// for (let i = 0; i < ptext.length; i++){
ptext.style.color = "red"
// }