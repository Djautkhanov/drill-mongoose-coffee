const { Router } = require("express");
const { drinkController } = require("../controllers/drinks.controller");
const router = Router();


//– список всех напитков
router.get("/drinks", drinkController.getDrinks);

// список всех напитков, которые есть в наличии
router.get("/drinks/in-stock", drinkController.getDrinkByStock);

// – подробная информация о конкретном напитке
router.get("/drinks/:id", drinkController.getInfoDrinkById);

//– добавление нового напитка
router.post("/drinks", drinkController.addDrink);

// – удаление конкретного напитка
router.delete("/drinks/:id", drinkController.delteDrinkById);

//– изменение конкретного напитка
router.patch("/drinks/:id", drinkController.eidtDrinkById);

module.exports = router;
