const router = require("express").Router();
const calendar = require("../../controllers/calendarController");

// Matches with "/api/calendar"
router.route("/")
    .get((req, res) => { // get ALL calendar events from database
        calendar.findAll()
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .post((req, res) => { // add ONE calendar event to database
        calendar.create(req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });


// Matches with "/api/calendar/:id"
router
    .route("/:id")
    .get((req, res) => { // get ONE calendar event from database
        calendar.findById(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .put((req, res) => { // update ONE calendar event from database
        calendar.updateOne(req.params.id, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .delete((req, res) => { // delete ONE calendar event from database
        calendar.deleteOne(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });

module.exports = router;