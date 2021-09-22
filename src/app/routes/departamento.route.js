module.exports = router =>{
    const ws = require("../controller/departamento.controller.js");
    var api = require("express").Router();

    api.post("/", ws.create);
    api.get("/",ws.findAll);
    api.get("/:id",ws.findOne);
    api.get("/region/:id",ws.findOneRegion);
    api.put("/:id",ws.update);
    api.delete("/:id",ws.delete);

    router.use("/api/departamento",api);
}