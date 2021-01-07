export default class Pokemon {
    constructor(data) {
        this.id=data.id
        this.name = data.name
        this.index=data.index
        this.weight=data.weight
        this.height=data.height
        this.img=data.img || data.sprites.front_default
    
        this.types=data.types
        this.url=data.url
    }

    get Template() {
        return`
        <div class="card main-box"  style="width: 18rem;">
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${this.id}</h5>
                  <p class="card-text">${this.name}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Weight:${this.weight}-Height:${this.height}</li>
                  <li class="list-group-item">${this.types}</li>
                  
                <div class="card-body">
                  ${this.Buttons}
                </div>
              </div>
        `
    }

    get Buttons(){
        if(this.id){
            return `<button class="btn btn-success" onclick="app.myPokemonController.catch()">Catch</button>`
        }
        return `<button class="btn btn-danger" onclick="app.myPokemonController.release()">Release</button>`
    }
}
