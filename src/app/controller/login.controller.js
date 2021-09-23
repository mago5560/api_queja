const db = require("../model");
const Obj = db.usuario;
const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');


  exports.findLogin = (req, res) => {
    const usuario = req.params.usuario;
    const contraseña = req.params.contra;

    Obj.findAll({ where:[{usuario:usuario},{contraseña:contraseña}]
      ,attributes:['nombre','apellido','usuario','telefono','direccion']}
                )
      .then(data => {
        if(data.length > 0){
          const token = jwt.sign({data},'LAMG');         
          res.json({token});
        }else{
          res.status(500).json({"mensaje":"Usuario No autorizado"})
        }
        
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving find one object with usaurio=" + usuario +" and contraseña="+contraseña
        });
      });
  };