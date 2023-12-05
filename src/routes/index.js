const { Router } = require("express");

const usersRoutes = require("./users.routes");

const routes = Router();

routes.use("/users", usersRouter);

module.exports = usersRoutes;
