'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoughtCalligraphy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BoughtCalligraphy.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      calligraphy_course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CalligraphyCourses',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'BoughtCalligraphy',
    }
  );
  return BoughtCalligraphy;
};
