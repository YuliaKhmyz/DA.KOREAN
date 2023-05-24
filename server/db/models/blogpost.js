'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      this.hasMany(Comment, { foreignKey: 'post_id' });
    }
  }
  BlogPost.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'BlogPost',
    }
  );
  return BlogPost;
};
