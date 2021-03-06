const jwt = require("jsonwebtoken");

module.exports = router =>{
    const ws = require("../controller/queja.controller.js");
    var api = require("express").Router();

    api.post("/", ws.create);
    api.get("/",ensureToken,ws.findAll);
    api.get("/:id",ensureToken,ws.findOne);
    api.get("/region/:id",ensureToken,ws.findOneRegion);
    api.get("/departamento/:id",ensureToken,ws.findOneDepartamento);
    api.get("/municipio/:id",ensureToken,ws.findOneMunicipio);
    api.get("/comercio/:id",ensureToken,ws.findOneComercio);
    api.get("/sucursal/:id",ensureToken,ws.findOneSucursal);
    api.put("/:id",ensureToken,ws.update);
    api.delete("/:id",ensureToken,ws.delete);

    router.use("/api/queja",api);
}

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader)
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(bearerToken,'LAMG',(err)=>{
          if(err){
              res.status(403).json({"mensaje":"Token incorrecto"});
          }else{
              next();
          }
      });
    } else {
      res.status(403).json({"mensaje":"Token requerido"});
    }
  }