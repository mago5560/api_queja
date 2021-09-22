module.exports = router =>{
    const usuario = require("../controller/usuario.controller.js");
    var api = require("express").Router();

    api.post("/", usuario.create);
    api.get("/",usuario.findAll);
    api.get("/:id",usuario.findOne);
    api.get("/activos",usuario.findAllActivo);
    api.put("/:id",usuario.update);
    api.delete("/:id",usuario.delete);


    router.use("/api/usuario",api);
}