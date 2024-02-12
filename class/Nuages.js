export class Nuages {
    #nuages

    constructor(nuages= {}){
        this.nuages = nuages
        this.createHTML()
    }

    get nuages (){
        return this.#nuages
    }

    set nuages (nuages){
        this.#nuages = nuages
    }

    createHTML (){
        let outdoorContainer = document.querySelector('.outdoor-container')

        let newDivContainer = document.createElement('div');
        newDivContainer.setAttribute('class', 'nuages-container');

        for (let nuageKey in this.nuages) {

            let nuageLink = this.nuages[nuageKey];



            let newImg = document.createElement('img');
            newImg.setAttribute('class', nuageKey);
            newImg.setAttribute('src', nuageLink);

            document.body.append(newDivContainer);
            newDivContainer.append(newImg);

        };
    }
}