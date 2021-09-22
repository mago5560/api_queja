module.exports = router =>{
    const ws = require("../controller/comercio.controller.js");
    var api = require("express").Router();

    api.post("/", ws.create);
    api.get("/",ws.findAll);
    api.get("/:id",ws.findOne);
    api.get("/municipio/:id",ws.findOneMunicipio);
    api.put("/:id",ws.update);
    api.delete("/:id",ws.delete);

    router.use("/api/comercio",api);
}