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


animation()

function animation(){
    keyDown();
    removeAnimation();
}

function keyDown(){
    let pivoine = document.querySelector(".tama-outdoor")
    if (document.body.classList.contains('outdoor-body')){
        document.addEventListener('keydown', (e)=>{
            pivoine.style.animation = 'marche infinite 1s';
            if(e.key==='ArrowLeft'){
                pivoine.style.left = (pivoine.computedStyleMap().get('left').value - 5)+'px' ;
                pivoine.style.transform= 'scaleX(1)';
            };
            if(e.key==='ArrowRight'){
                pivoine.style.left = (pivoine.computedStyleMap().get('left').value + 5)+'px' ;
                pivoine.style.transform= 'scaleX(-1)';
            };
        })
    }
}

function removeAnimation(){
    let pivoine = document.querySelector(".tama-outdoor")
    if (document.body.classList.contains('outdoor-body')){
        document.addEventListener('keyup', (e)=>{
            pivoine.style.animation = 'none';
        })
    }
}

