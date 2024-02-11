import { ProgressBar } from "./class/ProgressBar.js"; 

//instanciation des barres de vies
let lifeBar = new ProgressBar('faim', 'faimBar');
let joieBar = new ProgressBar('joie', 'joieBar');
let dodoBar = new ProgressBar('dodo', 'dodoBar');
let sortieBar = new ProgressBar('sortie', 'sortieBar');

//ajouts des fonctionnalités liées aux boutons
let faimBtn = document.querySelector('#faimIcon')
faimBtn.addEventListener('click', ()=>{
    lifeBar.addLife(30);
    lifeBar.sourir();
})
let joieBtn = document.querySelector('#joieIcon')
joieBtn.addEventListener('click', ()=>{
    joieBar.addLife(30);
    joieBar.sourir();
})
let dodoBtn = document.querySelector('#dodoIcon')
dodoBtn.addEventListener('click', ()=>{
    dodoBar.addLife(30);
    dodoBar.sourir();
})

// lancement du mode sortie
let sortieBtn = document.querySelector('#sortieIcon')
sortieBtn.addEventListener('click', ()=>{
        let tamaImg = document.querySelector('#tamaImg');

        if(tamaImg.classList.contains('dead')){
            return 
        } else {
            //changement de l'interface grace aux classes
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
    
            //ajouts fonctionnalités lié au clique
            sortieBar.addLife(50);
            dodoBar.addLife(20);
            joieBar.addLife(40);
            lifeBar.addLife(5);
    
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
    }
)


// les fonctions pour gérer le mode exterieur
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

