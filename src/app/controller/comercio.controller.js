const db = require("../model");
const Obj = db.comercio;
const Departamento = db.departamento;
const Municipio = db.municipio;
const Encargado = db.encargado;
const Op = db.Sequelize.Op;

exports.create=(req, res) =>{

    if (!req.body.nombre) {
        res.status(400).send({
          message: "El Campo Nombre es obligatorio."
        });
        return;
      }

      const _Obj = {
          nombre: req.body.nombre,
          municipioId: req.body.municipioId,
          encargadoId: req.body.encargadoId

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

    Obj.findAll({ include:[
                           {model:Municipio,include:[{model:Departamento ,include:'region' }]
                          },{model:Encargado}]      
    })
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
  
    Obj.findAll({ where:{id:id},include:[
                            { model: Municipio,include:[{model: Departamento, include:'region'}
                            ,{model:Encargado}
                          ]
    }]
  })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving find one object with id=" + id
        });
      });
  };


exports.findOneMunicipio = (req, res) => {
  const id = req.params.id;

  Obj.findAll({where:{municipioId:id}, 
                include:[
                  {model: Municipio,include:[{model: Departamento, include:'region'}]}
                  ,{model:Encargado}
              ]
              })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving find one object with id=" + id
      });
    });
};


exports.findOneEncargado = (req, res) => {
  const id = req.params.id;

  Obj.findAll({where:{encargadoId:id}, 
                include:[
                  {model: Municipio,include:[{model: Departamento, include:'region'}]}
                  ,{model:Encargado}
              ]
              })
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
