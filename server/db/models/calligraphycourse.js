'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CalligraphyCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsToMany(User, {
        foreignKey: 'user_id',
        through: 'BoughtCalligraphies',
      });
    }
  }
  CalligraphyCourse.init(
    {
      link: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      koreantitle: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'CalligraphyCourse',
    },
  );
  return CalligraphyCourse;
};
