'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, BlogPost }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(BlogPost, {
        foreignKey: 'post_id',
      });
    }
  }
  Comment.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      post_id: { type: DataTypes.INTEGER, allowNull: false },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
