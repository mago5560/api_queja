module.exports = (sequelize, Sequelize) => {
    const Comercio = sequelize.define("comercio", {
      nombre: {
        type: Sequelize.STRING
      }
    });
  
    return Comercio;
  };