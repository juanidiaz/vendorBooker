const router = require("express").Router();
const users = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
    .get((req, res) => { // get ALL users from database
        users.findAll()
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .post((req, res) => { // add ONE user to database
        users.create(req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });


// Matches with "/api/users/:id"
router
    .route("/:id")
    // .get((req, res) => { // get ONE user from database
    //     users.findById(req.params.id)
    //         .then((data) => {
    //             res.send(data)
    //         })
    //         .catch(err => res.status(422).json(err));
    // })
    .put((req, res) => { // update ONE user from database
        users.updateOne(req.params.id, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .delete((req, res) => { // delete ONE user from database
        users.deleteOne(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });

// Matches with "/api/users/uid/:id"
router
    .route("/uid/:uid")
    .get((req, res) => { // get ONE user from database based in UID (Firebase)
        console.log(`@ api/users.js - ${req.params.uid}`)
        users.findOne({
                'uid': req.params.uid
            })
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });

module.exports = router;