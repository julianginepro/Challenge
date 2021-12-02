module.exports = (sequelize, dataTypes) => {
    
    let alias = "Episode";
    
    let cols = {
      id: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: dataTypes.STRING(500),
        allowNull: true,
      },
       number: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        allowNull: true,
      },
      rating: {
        type: dataTypes.DECIMAL(3, 1),
        allowNull: false,
      },
      season_id: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        allowNull: true,
      },
    };
    let config = {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: false,
    };
    const Episode = sequelize.define(alias, cols, config);
  
    Episode.associate = function (models) {
      Episode.belongsToMany(models.Actor, {
        as: "actors",
        through: "actor_episode",
        foreignKey: "episode_id",
        otherKey: "actor_id",
        timestamps: false,
      });
    };
  
    return Episode;
  
};
  