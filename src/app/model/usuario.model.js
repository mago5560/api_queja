module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Usuario;
  };