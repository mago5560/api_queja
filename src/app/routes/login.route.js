module.exports = router =>{
    const usuario = require("../controller/login.controller.js");
    var api = require("express").Router();

    api.get("/:usuario/:contra",usuario.findLogin);

    router.use("/api/login",api);
}