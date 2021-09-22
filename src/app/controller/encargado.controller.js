const db = require("../model");
const Obj = db.encargado;
const Op = db.Sequelize.Op;

exports.create=(req, res) =>{

    if (!req.body.nombre) {
        res.status(400).send({
          message: "El Campo Nombre es obligatorio."
        });
        return;
      }
      
      if (!req.body.telefono) {
        res.status(400).send({
          message: "El Campo telefono es obligatorio."
        });
        return;
      }

      if (!req.body.dpi) {
        res.status(400).send({
          message: "El Campo dpi es obligatorio."
        });
        return;
      }

      const _Obj = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          telefono: req.body.telefono,
          direccion: req.body.direccion,
          dpi: req.body.dpi,
          activo: req.body.activo ? req.body.activo :true
      }

      Obj.create(_Obj)
      .then(data =>{res.json(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the object."
        });
    });

};

exports.findAll = (req, res) => {

    Obj.findAll({ include:'comercios'})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving object."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Obj.findByPk(id,{ include:'comercios'})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving find one object with id=" + id
        });
      });
  };


exports.findOneComercio = (req, res) => {
  const id = req.params.id;

  Obj.findAll({where:{comercioId:id}, 
                include:'comercios'})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving find one object with id=" + id
      });
    });
};

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Obj.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Object was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update object with id=${id}. Maybe object was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating object with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Obj.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Object was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Object with id=${id}. Maybe Object was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Object with id=" + id
        });
      });
  };
