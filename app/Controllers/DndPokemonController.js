import { ProxyState } from "../AppState.js";
import { dndPokemonService } from "../Services/DndPokemonService.js";


//Private
function _drawDndPokemon() {
  let dndPokemon= ProxyState.dndPokemon
  let template = ''
  dndPokemon.forEach(d => {
    template += `<li class="action" onclick="app.dndPokemonController.getPokemon('${d.name}')">${d.name.toUpperCase()}</li>`})
  document.getElementById("api-data").innerHTML = template
}

function _drawShowPokemon(){
  let template=''
  if(ProxyState.showPokemon){
  template=ProxyState.showPokemon.Template
}
  document.getElementById("displayBox").innerHTML=template
}
//Public
export default class DndPokemonController {
  constructor() {
    console.log("controller working")
    ProxyState.on("dndPokemon", _drawDndPokemon);
    ProxyState.on("showPokemon",_drawShowPokemon)
    this.getAllPokemon()
  }
 getAllPokemon(){
   try{
     dndPokemonService.getAllPokemon()
   }catch(error){
     console.log(error)
   }
 }
 
getPokemon(name){
  try{
    dndPokemonService.getPokemon(name)
  }catch(error){
    console.error(error)
  }
}
}
