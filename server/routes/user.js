const Controller = require("../controller/userController");

const userRouter = require("express").Router();

userRouter.get("/", Controller.getAllUser);

userRouter.get("/:id", Controller.getOneUser);

userRouter.post("/", Controller.createUser);

userRouter.patch("/:id", Controller.updateUser);

userRouter.delete("/:id", Controller.deleteUser);

module.exports = userRouter;
