const router = require("express").Router();
const notif = require("../../controllers/notifsController");

// Matches with "/api/notifications"
router.route("/")
    .get((req, res) => { // get ALL notifications from database
        notif.findAll()
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .post((req, res) => { // add ONE notification to database
        notif.create(req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });


// Matches with "/api/notifications/:id"
router
    .route("/:id")
    .get((req, res) => { // get ONE notification from database
        notif.findById(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .put((req, res) => { // update ONE notification from database
        notif.updateOne(req.params.id, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .delete((req, res) => { // delete ONE notification from database
        notif.deleteOne(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });

module.exports = router;