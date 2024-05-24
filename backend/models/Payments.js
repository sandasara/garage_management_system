module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define('Payments', {
      payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      pay_date: {
        type: DataTypes.DATE,
        allowNull: false,
    
      },
      method: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    });
  
    return  Payments;
  };
  