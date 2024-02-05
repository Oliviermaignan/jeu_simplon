import { ProgressBar } from "./ProgressBar.js"; 

let lifeBar = new ProgressBar('faim');
lifeBar.changeColor ('green')
lifeBar.setProgressBar()
lifeBar.decreasingProgress()
console.log(lifeBar)