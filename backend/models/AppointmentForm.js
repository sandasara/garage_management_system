module.exports = (sequelize, DataTypes) => {
    const AppointmentForm = sequelize.define('AppointmentForm', {
    
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
          },
          
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
          
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        vehicle_type: {
            type: DataTypes.STRING,
            allowNull: false
        },

        vehicle_no: {
            type: DataTypes.STRING,
            allowNull: false
        },

        select_service: {
            type: DataTypes.STRING,
            allowNull: false
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        time: {
            type: DataTypes.DATE,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false
        },

        appointment_type: {
            type: DataTypes.STRING,
            allowNull: false
        },

        
        
    });
  
    return  AppointmentForm;
  };