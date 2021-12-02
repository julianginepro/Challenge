const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  
  const alias = "PasswordReset";
  
  const col = {
    email: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    token: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
  };
  const config = {
    timestamps: false,
    tableName: "password_resets",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const PasswordReset = sequelize.define(alias, col, config);

  return PasswordReset;


};