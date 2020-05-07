module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Product
      // A Post can't be created without an Product due to the foreign key constraint
      Post.belongsTo(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  