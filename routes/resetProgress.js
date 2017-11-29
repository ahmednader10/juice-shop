var challenges = require('../data/datacache').challenges
var datacache = require('../data/datacache')
const models = require('../models/index')

exports = module.exports = function resetProgress () {
    return (req, res) => {
        var solvedChallenges = 0
        var count = 0

        for (var index in challenges) {
            count++
            var challenge = challenges[index]
            
            if(challenge.solved === false) continue;
            solvedChallenges++
            challenge.solved = false 

            challenge.save()
        }
        var score = (100 * solvedChallenges / count).toFixed(0)

        if (datacache.currentUser.email && datacache.currentUser.name) {
            models.Leaderboard.create({
                email: datacache.currentUser.email,
                name: datacache.currentUser.name,
                score: score
            }).success(createdLeaderBoard => {
                datacache.currentUser = {}
            })
        }

        return res.status(200).send('reset successful.')
    }
}
