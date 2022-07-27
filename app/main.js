import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();
  carsController = new CarsController()

  housesController = new HousesController()
}

loadState()
window["app"] = new App();
