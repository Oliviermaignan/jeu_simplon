import { ProgressBar } from "./class/ProgressBar.js"; 

let lifeBar = new ProgressBar('faim', 'faimBar');
let joieBar = new ProgressBar('joie', 'joieBar');
let dodoBar = new ProgressBar('dodo', 'dodoBar');
let sortieBar = new ProgressBar('sortie', 'sortieBar');



let faimBtn = document.querySelector('#faimIcon')
faimBtn.addEventListener('click', ()=>{
    lifeBar.addLife();
    lifeBar.sourir();
})
let joieBtn = document.querySelector('#joieIcon')
joieBtn.addEventListener('click', ()=>{
    joieBar.addLife();
    joieBar.sourir();
})
let dodoBtn = document.querySelector('#dodoIcon')
dodoBtn.addEventListener('click', ()=>{
    dodoBar.addLife();
    dodoBar.sourir();
})
let sortieBtn = document.querySelector('#sortieIcon')
sortieBtn.addEventListener('click', ()=>{
    sortieBar.addLife();
    sortieBar.sourir();
})

