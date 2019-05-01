const router = require("express").Router();
const secusers = require("../../controllers/secusersController");

// Matches with "/api/secusers"
router.route("/")
    .get((req, res) => { // get ALL secondary users from database
        secusers.findAll()
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .post((req, res) => { // add ONE secondary user to database
        secusers.create(req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });


// Matches with "/api/secusers/:id"
router
    .route("/:id")
    .get((req, res) => { // get ONE secondary user from database
        secusers.findById(req.params.id)
            .then((data) => {
                // console.log(data)
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .put((req, res) => { // update ONE secondary user from database
        secusers.findOneAndUpdate(req.params.id, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .delete((req, res) => { // delete ONE secondary user from database
        secusers.deleteOne(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });

module.exports = router;