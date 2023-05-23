'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // Один курс может принадлежать нескольким пользователям
      this.belongsToMany(User, {
        foreignKey: 'user_id',
        through: 'Lessons',
      });
    }
  }
  Course.init(
    {
      main_title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      main_description: {
        type: DataTypes.TEXT,
      },
      start_title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      start_description: {
        type: DataTypes.TEXT,
      },
      condition_title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      condition_description: {
        type: DataTypes.TEXT,
      },
      price_title: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Course',
    },
  );
  return Course;
};
