const Router = require("../framework/Router");
const controller = require("./user-controller");
const router = new Router();

router.get("/users", controller.getUsers);

router.post("/users", controller.createUser);

router.put("/users", controller.updateUser);

router.delete("/users", controller.deleteUser);

module.exports = router;
