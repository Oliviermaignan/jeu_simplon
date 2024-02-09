export class ProgressBar {
    #title;
    #id;
    #amount

    constructor (title, id, amount = 100){
        this.title = title;
        this.id = id;
        this.amount = amount;
        this.createHTML()
        this.displayTitle();
        this.changeColor('#b1e46b');
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

    get amount(){
        return this.#amount
    }

    set amount(amount){
        this.#amount= amount;
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
        let progressBarElement = document.querySelector(`#${this.id}`);
        progressBarElement.style.backgroundColor = color;
    }

    setProgressBar(){
        let progressBarElement = document.querySelector(`#${this.id}`);
        progressBarElement.style.width= '100%';
    }

    decreasingProgress(){
        let progressElements = document.querySelector(`#${this.id}`)
        this.amount = parseInt(progressElements.style.width)
        let time = setInterval(()=>{
            if (this.amount === 0){
                clearInterval(time)
                this.displayDead()
            }
            if (this.amount > 40){
                this.changeColor('#b1e46b');
                this.amount -= 1
                progressElements.style.width = this.amount + '%';
            }
            if (this.amount > 0 && this.amount <=40){
                this.changeColor('#FF3030');
                this.amount -= 1
                progressElements.style.width = this.amount + '%';
            }
        },500)
    }

    displayDead(){
        let tamaImg = document.querySelector('#tamaImg');
        tamaImg.classList.replace("live", "dead")
        let title = document.querySelector('.playground>p')
        title.textContent= "✟ J'étais Pivoine ✟"
    }

    addLife(){
        let progressElements = document.querySelector(`#${this.id}`);

        this.amount = parseInt(progressElements.style.width);
        if (this.amount>80){
            this.amount = this.amount + 100-this.amount;
            progressElements.style.width += this.amount;
        } else {
            this.amount += 25
            progressElements.style.width += this.amount;
        }
    }

    sourir(){
        let tamaImg = document.querySelector('#tamaImg');
        tamaImg.classList.replace("live", "happy")
        setTimeout( ()=>{
            tamaImg.classList.replace("happy", "live")
        }  
        ,700)
    }

}