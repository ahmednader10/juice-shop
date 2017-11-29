const models = require('../models/index')
const datacache = require('../data/datacache')

exports = module.exports = function saveCurrentUser () {
    return (req, res) => {
        var user = req.body
        datacache.currentUser = user

        res.status(200).send(datacache.currentUser)
    }
}