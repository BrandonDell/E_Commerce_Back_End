// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// To-Do: Ask/look into foreignkey and if onDelete is necessary

// Products belongsTo Category
Product.hasOne(Category, {
  foreignkey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignkey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: 'ProductTag' });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: 'ProductTage' });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
