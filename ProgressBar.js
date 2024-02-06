export class ProgressBar {
    #title;
    #id;

    constructor (title, id){
        this.title = title;
        this.id = id;
        this.createHTML()
        this.displayTitle();
        this.changeColor('green');
        this.setProgressBar();
        this.decreasingProgress();
    };

    get title(){
        return this.#title
    }

    set title(title){
        this.#title= title;
    }

    get id(){
        return this.#id
    }

    set id(id){
        this.#id= id;
    }

    createHTML(){
        let progressBarContainer = document.querySelector('.progress-bar-container')

        let thisBarContainer = document.createElement('div');
        thisBarContainer.classList.add(`${this.title}-bar-container`);

        let progressBarTitle = document.createElement('p');
        progressBarTitle.classList.add(`${this.title}-bar-title`);

        let progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        let progress = document.createElement('div');
        progress.classList.add('progress');
        progress.setAttribute('id', this.id);

        progressBarContainer.append(thisBarContainer);
        thisBarContainer.append(progressBarTitle, progressBar)
        progressBar.append(progress);
    }

    displayTitle(){
        let title = this.title;
        let titleElement = document.querySelector(`.${title}-bar-title`);
        titleElement.textContent = title;
    }

    changeColor (color){
        console.log(this.id)
        let progressBarElement = document.querySelector(`#${this.id}`);
        progressBarElement.style.backgroundColor = color;
    }

    setProgressBar(){
        let progressBarElement = document.querySelector(`#${this.id}`);
        progressBarElement.style.width= '100%';
    }

    decreasingProgress(){
        let width = 100;
        let progressElements = document.querySelectorAll(`#${this.id}`)
        let time = setInterval(()=>{
            if (width === 0){
                this.displayDead()
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
        },500)
    }

    displayDead(){
        console.log('dead')
    }

    increasingBar(){
        
    }

}