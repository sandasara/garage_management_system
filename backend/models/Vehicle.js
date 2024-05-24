module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define('Vehicle', {

        v_no: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
          },
        
      chase_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      reg_distric: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      insurance_No: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      engine_No: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Vehicle;
  };
  