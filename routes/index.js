var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Out of Time' });
});

router.get('/browse', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Sign Up' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Log In' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

router.get('/message', function(req, res) {
  res.render('message', { title: 'Beginning of the End' });
});

router.get('/validation', function(req, res) {
  res.render('validation', { title: 'Upload Expiration Validation' });
});

router.get('/preferences', function(req, res) {
  res.render('preferences', { title: 'Set Preferences' });
});

/* GET New User page. */
// router.get('/user/:username', function(req, res) {
//   var db = req.db;
//   var collection = db.get('usercollection');
//   users = collection.find({},{},function(e,docs){
//     return docs;
//   });
//   console.log(users);
//   if (!users[req.params.username])
//     res.send('No user matching');
//   res.render('user', { title: 'Profile - ' + req.params.username, user: users[req.params.username]});
// });

/* GET New User page. */
router.get('/user/DeathBecomesHer', function(req, res) {
  res.render('DeathBecomesHer', { title: 'Profile - DeathBecomesHer' });
});

/* GET New User page. */
// router.get('/login', function(req, res) {
//   res.render('login', { title: 'Login' });
// });

/* GET New User page. */
// router.get('/logout', function(req, res) {
//   res.render('logout', { title: 'Logout' });
// });

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username" : userName,
    "email"    : userEmail
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("userlist");
    }
  });
});

module.exports = router;
