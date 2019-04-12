const router = require("express").Router();
const services = require("../../controllers/servicesController");

// Matches with "/api/services"
router.route("/")
    .get((req, res) => {
        services.findAll()
            .then((data) => {res.send(data)})
            .catch(err => res.status(422).json(err));
    });

// Matches with "/api/service/:id"
router
    .route("/:id")
    .get((req, res) => {
        services.findById(req.params.id)
            .then((data) => {res.send(data)})
            .catch(err => res.status(422).json(err));
    })
    // .put(booksController.update)
    // .delete(booksController.remove);

module.exports = router;