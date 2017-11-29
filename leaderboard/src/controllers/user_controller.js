
var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports.submit_score = saveScore;


function saveScore(req, res, next) {
  var user = req.body;
  if(!user.email || !user.name || !user.score) {
    return res.status(400).send('Invalid request parameters');
  }

  let newUser = new User({
    name: user.name,
    email: user.email,
    score: user.score
  });
  newUser.save((err) => {
    if(err) {
      return res.status(500).send('Error saving new user', err);
    }

    return res.status(200).send({ createdUser: newUser });
  });
}
