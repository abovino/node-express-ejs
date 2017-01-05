// require express
var express = require('express');
var path = require('path');

// create router object
var router = express.Router();

// route router get '/'
router.get('/', function(req, res) {
  res.render('pages/index');
});

// route router get '/'
router.get('/about', function(req, res) {
  var users = [
    {name: 'Holly', email: 'holly@scotch.io', avatar: 'http://www.maaxmarket.com/wp-content/uploads/avatar-1.png'},
    {name: 'Angelo', email: 'holly@scotch.io', avatar: 'http://www.maaxmarket.com/wp-content/uploads/avatar-1.png'},
    {name: 'Benito', email: 'holly@scotch.io', avatar: 'http://www.maaxmarket.com/wp-content/uploads/avatar-1.png'},
    {name: 'Lola', email: 'holly@scotch.io', avatar: 'http://www.maaxmarket.com/wp-content/uploads/avatar-1.png'}
  ];

    res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  console.log(req.body.message);
  res.send('Thanks for contacting us, ' + req.body.name + '! We will be in touch shortly');
  console.log(req.body);
});

module.exports = router;