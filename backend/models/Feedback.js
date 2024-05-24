module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
        feedback_no: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: true
      },

      ratings: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
    });
  
    return  Feedback;
  };