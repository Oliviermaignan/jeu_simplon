export class ProgressBar {
    #title;

    constructor (title){
        this.title = title;

    };

    get title(){
        return this.#title
    }

    set title(title){

        this.#title= title;
    }

    displayTitle(){
        let title = this.title;
        let titleElement = document.querySelector('#faimBarTitle');
        titleElement.textContent = title;
    }

    changeColor (color){
        let progressBarElement = document.querySelector('#faimBar');
        progressBarElement.style.backgroundColor = color;
    }

    setProgressBar(){
        let progressBarElement = document.querySelector('#faimBar');
        progressBarElement.style.width= '100%';
    }

    decreasingProgress(){
        let width = 100;
        let progressElements = document.querySelectorAll('.progress')
        let time = setInterval(()=>{
            console.log(width);
            if (width === 0){
                console.log('dead')
                clearInterval(time)
            }
            if (width > 40){
                width -= 1
                progressElements.forEach((element)=>{
                    element.style.width = width + '%';
                }) 
            }
            if (width > 0 && width <=40){
                this.changeColor('red');
                width -= 1
                progressElements.forEach((element)=>{
                    element.style.width = width + '%';
                })
            }
        },1)
    }

    displayDead(){

    }
}