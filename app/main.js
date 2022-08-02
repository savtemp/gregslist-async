import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
// imports jobs controller

import { loadState } from "./Utils/LocalStorage.js";


class App {
  // valuesController = new ValuesController();
  carsController = new CarsController()

  housesController = new HousesController()

  // jobsController = new JobsController()
}

loadState()
window["app"] = new App();
