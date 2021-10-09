const stockController = require("../Controller/stock");
const medicineController = require("../Controller/medicine");

function initRoutes(app) {
  //handdle all stock routes
  app.post("/stock/create", stockController().store);

  app.get("/stock/read", stockController().read);

  //read one datea
  app.get("/stock/readone/:id", stockController().readone);

  //patch
  app.patch("/stock/update/:id", stockController().update);

  //delete
  app.delete("/stock/delete/:id", stockController().delete);

  // handdle all medicine route
  app.post("/medicine/create", medicineController().store);

  app.get("/medicine/read/", medicineController().read);

  //read one datea
  app.get("/medicine/read/:id", medicineController().readone);

  //patch
  app.patch("/medicine/update/:id", medicineController().update);

  //delete
  app.delete("/medicine/delete/:id", medicineController().delete);
}

module.exports = initRoutes;
