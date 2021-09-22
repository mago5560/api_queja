module.exports = (sequelize, Sequelize) => {
    const Encargado = sequelize.define("encargado", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      dpi: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Encargado;
  };