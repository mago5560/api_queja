const db = require("../model");
const Obj = db.usuario;
const Op = db.Sequelize.Op;

  exports.findLogin = (req, res) => {
    const usuario = req.params.usuario;
    const contraseña = req.params.contra;

    Obj.findAll({ where:[{usuario:usuario},{contraseña:contraseña}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving find one object with usaurio=" + usuario +" and contraseña="+contraseña
        });
      });
  };