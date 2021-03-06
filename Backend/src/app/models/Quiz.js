module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define('Quiz', {
      nome: DataTypes.STRING,
      deadline: DataTypes.DATE,
      list_questions: DataTypes.JSON,
      createdAt: {
           field: 'created_at',
           type: DataTypes.DATE,
       },
       updatedAt: {
           field: 'updated_at',
           type: DataTypes.DATE,
       }  
    },
    );
    return Quiz;
  };