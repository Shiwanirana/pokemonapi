import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService{
  async getAllPokemon(){
   let res =await sandboxApi.get('')
   ProxyState.myPokemon = res.data.map(m=> new Pokemon(m))
  }
  getPokemon(id){
    let pokemon = ProxyState.myPokemon.find(m=>m.id===id)
    ProxyState.showPokemon = pokemon
    console.log(ProxyState.showPokemon)
  }
  async catch(){
    let res = await sandboxApi.post('',ProxyState.showPokemon)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
  }
  async release(){
    let res = await sandboxApi.delete(ProxyState.showPokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(m=>m.id!==ProxyState.showPokemon.id)
    ProxyState.showPokemon=null
  }
}

export const myPokemonService = new MyPokemonService()