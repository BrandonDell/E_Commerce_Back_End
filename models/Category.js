const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// const Product = require('./Product');
// const Tag = require('./Tag');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Category.hasMany(Product, {
//   foreignKey: 'category_id',
//   onDelete: 'CASCADE',
// });
// Category.belongsToMany(Tag, {
//   through: 'category_tag',
//   foreignKey: 'category_id',
// });

module.exports = Category;



