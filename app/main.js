import MyPokemonController from "./Controllers/MyPokemonController.js";
import DndPokemonController from "./Controllers/DndPokemonController.js"
class App {
  dndPokemonController = new DndPokemonController()
  myPokemonController = new MyPokemonController();

}

window["app"] = new App();
