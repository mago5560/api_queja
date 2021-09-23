module.exports = (sequelize, Sequelize) => {
    const Sucursal = sequelize.define("sucursal", {
      nombre: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      }
    });
  
    return Sucursal;
  };