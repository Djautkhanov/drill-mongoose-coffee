const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use(require("./routers/drinks.route"));

mongoose
  .connect("mongodb+srv://vakha:vakha123@cluster0.jzwrdu1.mongodb.net/drink4")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3050, () => {
  console.log("Сревер успешно запушен");
});
