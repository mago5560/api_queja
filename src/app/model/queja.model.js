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
      
      ,comercioId:{
        type: Sequelize.INTEGER
      }
      ,municipioId:{
        type: Sequelize.INTEGER
      }
      ,departamentoId:{
        type: Sequelize.INTEGER
      }
      ,regionId:{
        type: Sequelize.INTEGER
      }
    });
  
    return Queja;
  };