module.exports = (sequelize, Sequelize) => {
    const Queja = sequelize.define("queja", {
      fecha: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      }      
    });
  
    return Queja;
  };