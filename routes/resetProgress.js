var request = require('request')
var challenges = require('../data/datacache').challenges
var datacache = require('../data/datacache')
const models = require('../models')
const datacreator = require('../data/datacreatorCallback')

exports = module.exports = function resetProgress () {
    return (req, res) => {
        var solvedChallenges = 0
        var count = 0

        for (var index in challenges) {
            count++
            var challenge = challenges[index]
            
            if(challenge.solved === false) continue;
            solvedChallenges++
            // challenge.solved = false 

            // challenge.save()
        }
        var score = (100 * solvedChallenges / count).toFixed(0)

        if (datacache.currentUser.email && datacache.currentUser.name) {
            sendScoreData(datacache.currentUser, score, (err, resp, body) => {
                if(err) {
                    console.log('got error:', err)
                    return res.status(500).send(err)
                }

                console.log(body)
                dropTables(function () {
                    models.sequelize.sync().success(function () {
                        datacreator(function() {
                            return res.status(200).send(body)
                        })
                    })
                })
            })
        }
    }
}

function dropTables() {
    models.Basket.destroy({ })
    models.BasketItem.destroy({ })
    models.Challenge.destroy({ })
    models.Complaint.destroy({ })
    models.Feedback.destroy({ })
    models.Product.destroy({ })
    models.Recycle.destroy({ })
    models.SecurityAnswer.destroy({ })
    models.SecurityQuestion.destroy({ })
    models.User.destroy({ })
  }

function sendScoreData(user, score, cb) {
    var data = {
        email: user.email,
        name: user.name,
        score: score
    }

    var postData = JSON.stringify(data);
    var contentLength = postData.length;

    var leaderboard_uri = process.env.LEADERBOARD_URI || 'localhost'
    var leaderboard_port = process.env.LEADERBOARD_PORT || '4200'
    request({
        headers: {
            'Content-Length': contentLength,
            'Content-Type': 'application/json'
        }, 
        uri: 'http://' + leaderboard_uri + ':' + leaderboard_port + '/',
        body: postData,
        method: 'POST'
    }, cb)
}