var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user');
var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/User');


//=============================
// Show Page (User Logged In)
//=============================

router.get('/:id', function showAction(request, response) {
	var id = request.params.id;

	User.findById({_id: id}, function(error, user) {
		if(error) response.json({message: 'Could not find the user b/c:' + error});

		response.json({user: user});
	});
});

<<<<<<< HEAD

//======================
// USER REGISTRATION
//======================
// router.post('/', function createUser(req, res){
// 	console.log('body:',request.body);
//
//   var user = new User(request.body);
//
//   user.save(function(error) {
//     if(error) response.json({messsage: 'Could not ceate user b/c:' + error});
//
//     response.json({user: user});
//   });
// });



//======================
// CREATE ASSIGNMENT
//======================
router.put('/:id', function updateAction(request, response) {

  var newAssignment = new Assignment({
    name: request.body.name,
    assignmentType: request.body.assignmentType,
		dateCreated: {},
    pointsEarned: 0,
    pointsMax: request.body.pointsMax,
  });

  var id = request.params.id;

  User.findById((id), function(error, user) {
    console.log("findbyid user " + user);
  }).exec(function(error, user) {
    console.log("from users.js user:" + user);
    user.students.forEach(function(student) {
      student.assignments.push(newAssignment);

    });
  user.save();
  })
});



module.exports = router;
=======
router.put('/:id', function (req, res){

	var updatedStudents = req.body.students //must be an arrays of students with
													//the new assignemnts

	User.findByIdAndUpdate(req.params.id, {
		students: updatedStudents //or just req.body.students
	})
  /*var writers = [req.body.favorite1, req.body.favorite2, req.body.favorite3];
  var books = [req.body.book1, req.body.book2, req.body.book3];

  User.findByIdAndUpdate(req.params.id, {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    favoriteWriters: writers,
    favoriteBooks: books
  }, {new: true})
  .exec(function(err, user) {
    if (err) { console.log(err); }

    console.log(user);
    res.redirect('/users');
  });*/
});

module.exports = router;
>>>>>>> david
