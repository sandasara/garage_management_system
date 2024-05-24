module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        appointment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },

      time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      
    });
  
    return  Appointment;
  };
  