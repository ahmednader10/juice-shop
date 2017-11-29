module.exports = (sequelize, DataTypes) => {
    const Leaderboard = sequelize.define('Leaderboard', {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      score: DataTypes.INTEGER
    })
    return Leaderboard
  }