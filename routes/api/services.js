const router = require("express").Router();
const services = require("../../controllers/servicesController");

// Matches with "/api/services"
router.route("/")
    .get((req, res) => { // get ALL services from database
        services.findAll()
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .post((req, res) => { // add ONE service to database
        services.create(req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });


// Matches with "/api/service/:id"
router
    .route("/:id")
    .get((req, res) => { // get ONE service from database
        services.findById(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .put((req, res) => { // update ONE service from database
        services.updateOne(req.params.id, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .delete((req, res) => { // delete ONE service from database
        services.deleteOne(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });

module.exports = router;