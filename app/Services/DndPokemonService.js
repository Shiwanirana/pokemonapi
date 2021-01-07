import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js"
import {dndApi} from "../Services/AxiosService.js"

class DndPokemonService{
  async getAllPokemon(){
    let res = await dndApi.get('?limit=150')
    ProxyState.dndPokemon= res.data.results
    console.log(res.data)
  }
  async getPokemon(name){
    let res = await dndApi.get(name)
    ProxyState.showPokemon = new Pokemon(res.data)
    console.log(ProxyState.showPokemon)
  }
}
export const dndPokemonService = new DndPokemonService()