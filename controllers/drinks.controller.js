const Drink = require("../Model/Drink.model");

module.exports.drinkController = {
  getDrinks: function (req, res) {
    Drink.find({}, ["name", "price"])
      .then((dr) => {
        res.json(dr);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    // – список всех напитков
  },

  getDrinkByStock: function (req, res) {
    Drink.find({ drinkcStock: true })
      .then((dr) => {
        res.json(dr);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    //  список всех напитков, которые есть в наличии
  },
  getInfoDrinkById: function (req, res) {
    Drink.findById( req.params.id)
      .then((drink) => {
          res.json(drink)
      })
      .catch((err) => {
        res.json(err);
      });
    //  подробная информация о конкретном напитке
  },
  addDrink: function (req, res) {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      drinkStock: true,
      caffeineContent: req.body.caffeineContent,
      volume: req.body.volume,
      descript: req.body.descript,
    })
      .then((newDrink) => {
        res.json(newDrink);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    // – добавление нового напитка
  },
  delteDrinkById: function (req, res) {
    Drink.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Напиток удален");
      })
      .catch((err) => {
        res.json({ error: err });
      });
    //  – удаление конкретного напитка
  },
  eidtDrinkById: function (req, res) {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      drinkStock: req.body.drinkStock,
      caffeineContent: req.body.caffeineContent,
      volume: req.body.volume,
      descript: req.body.descript,
    })
      .then((editDrink) => {
        res.json(editDrink);
      })
      .catch((err) => {
        res.json({ error: err });
      });
    // – изменение конкретного напитка
  },
};
