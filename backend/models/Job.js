module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define('Job', {
      job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },

      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },

      estimate_end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      actual_end_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return  Job;
  };
  