const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

  const alias = "Serie";
  
  const col = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },

    release_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },

    end_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },

    genre_id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
    },
  };

  const config = {
    timestamps: false,
    tableName: "series",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Serie = sequelize.define(alias, col, config);

  return Serie;


};
