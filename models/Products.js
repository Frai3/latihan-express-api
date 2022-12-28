const Sequelize = require('sequelize');
const DataTypes = require(".");

module.exports = (Sequelize, DataTypes) => {

    const Products = Sequelize.define('Products', {
          id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          brand: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.TEXT,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
    },{
        tableName: 'products'
    });

    return Products;

}