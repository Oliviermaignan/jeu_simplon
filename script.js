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

// lancement du mode sortie

let sortieBtn = document.querySelector('#sortieIcon')
sortieBtn.addEventListener('click', ()=>{

    let tamaOutDoor = document.querySelector('.outdoor-container');
    tamaOutDoor.style.display = 'block';

    let background = document.querySelector(".background");
    background.classList.add('resizing-outdoor');

    let mainTopContainer = document.querySelector('.main-top-container');
    mainTopContainer.classList.add('outdoor');

    let bottomContainer = document.querySelector('.bottom-container');
    bottomContainer.classList.add('outdoor');

    let body = document.querySelector('body')
    body.classList.add('outdoor-body')

    sortieBar.addLife();
    sortieBar.addLife();
    sortieBar.addLife();
    sortieBar.addLife();
    sortieBar.addLife();
    dodoBar.addLife();
    dodoBar.addLife();
    joieBar.addLife();
    joieBar.addLife();
    lifeBar.addLife();
    lifeBar.addLife();

    animation();
    affichageRegleOutdoor()
    setTimeout(()=>{
        tamaOutDoor.style.display = 'none';

        background.classList.remove('resizing-outdoor');

        mainTopContainer.classList.remove('outdoor');

        bottomContainer.classList.remove('outdoor');
        body.classList.remove('outdoor-body')
    },10000)


    }
)


// les fonctions pour gérer le modes exterieurs
function animation(){
    keyDown();
    removeAnimation();
}

function keyDown(){
    let pivoine = document.querySelector(".tama-outdoor")
    let body = document.querySelector('body');
    console.log(body.classList.contains('outdoor-body'))
    if (body.classList.contains('outdoor-body')){
        console.log('aaa')
        document.addEventListener('keydown', (e)=>{
            pivoine.style.animation = 'marche infinite 1s';
            if(e.key==='ArrowLeft'){
                pivoine.style.left = (pivoine.computedStyleMap().get('left').value - 2)+'px' ;
                pivoine.style.transform= 'scaleX(1)';
            };
            if(e.key==='ArrowRight'){
                pivoine.style.left = (pivoine.computedStyleMap().get('left').value + 2)+'px' ;
                pivoine.style.transform= 'scaleX(-1)';
            };
        })
    }
}

function removeAnimation(){
    let pivoine = document.querySelector(".tama-outdoor")
    if (document.body.classList.contains('outdoor-body')){
        document.addEventListener('keyup', ()=>{
            pivoine.style.animation = 'none';
        })
    }
}

function affichageRegleOutdoor(){
    let chaineDeCharacter = 'Degourdissez les jambes de Pivoine vous avez 10 secondes'
    let title = document.querySelector('.outdoor-title')
    title.textContent= chaineDeCharacter
}

