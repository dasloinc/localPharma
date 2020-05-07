module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      // Giving the Product model a name of type STRING
      name: DataTypes.STRING
    });
  
    Product.associate = function(models) {
      // Associating Product with Posts
      // When an Product is deleted, also delete any associated Posts
      Product.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Product;
  };
  