'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CalligraphyLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CalligraphyLesson.init(
    {
      galligraphy_course_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'CalligraphyCourses',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'CalligraphyLesson',
    }
  );
  return CalligraphyLesson;
};
