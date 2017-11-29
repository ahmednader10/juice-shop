const models = require('../models/index')

exports = module.exports = function resetProgress () {
    return (req, res) => {
        models.Leaderboard.findAll({}).success(board => {
            res.status(200).send(board)
        })
    }
}