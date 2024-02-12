export class Nuages {
    #nuages

    constructor(nuages= {}){
        this.nuages = nuages
    }

    get nuages (){
        return this.#nuages
    }

    set nuages (nuages){
        this.#nuages = nuages
    }

    createHTML (){
        console.log(body.classList)
        if (body.classList.contains('outdoor-body')){
            this.nuages.forEach(nuage => {
                let newDiv = document.createElement('div')
                newDiv.setAttribute('id', 'nuage')
            });
        }
    }
}