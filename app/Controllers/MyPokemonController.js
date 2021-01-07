import { ProxyState } from "../AppState.js"
import { myPokemonService } from "../Services/MyPokemonService.js"

function _drawMyPokemon(){
  let template=''
  ProxyState.myPokemon.forEach(m=>{
    template+=`<li class="action" onclick="app.myPokemonController.getPokemon('${m.id}')">${m.name.toUpperCase()}</li>`
  })
  document.getElementById('my-data').innerHTML=template
}


export default class MyPokemonController{
  constructor(){
    ProxyState.on("myPokemon",_drawMyPokemon)
    this.getAllPokemon()
  }
  getAllPokemon(){
    try{
      myPokemonService.getAllPokemon()
    }catch(error){
      console.error(error)
    }
  }
  getPokemon(id){
    myPokemonService.getPokemon(id)
  }
  catch(){
    try{
      myPokemonService.catch()
    }catch(error){
      console.error(error)
    }
  }

    release(){
      try{
        myPokemonService.release()
      }catch(error){
        console.error(error)
      }
    }
  
}