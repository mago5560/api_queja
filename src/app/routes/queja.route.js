module.exports = router =>{
    const ws = require("../controller/queja.controller.js");
    var api = require("express").Router();

    api.post("/", ws.create);
    api.get("/",ws.findAll);
    api.get("/:id",ws.findOne);
    api.get("/comercio/:id",ws.findOneComercio);
    api.put("/:id",ws.update);
    api.delete("/:id",ws.delete);

    router.use("/api/queja",api);
}