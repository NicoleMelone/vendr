import VendrController from "./Controllers/vendrControllers.js";

class App {
  vendrController = new VendrController();
}

window["app"] = new App();
