const router = require("express").Router();
const vendors = require("../../controllers/vendorsController");

// Matches with "/api/vendors"
router.route("/")
    .get((req, res) => { // get ALL vendors from database
        vendors.findAll()
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .post((req, res) => { // add ONE vendor to database
        vendors.create(req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });


// Matches with "/api/vendors/:id"
router
    .route("/:id")
    .get((req, res) => { // get ONE vendor from database
        vendors.findById(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .put((req, res) => { // update ONE vendor from database
        vendors.updateOne(req.params.id, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    })
    .delete((req, res) => { // delete ONE vendor from database
        vendors.deleteOne(req.params.id)
            .then((data) => {
                res.send(data)
            })
            .catch(err => res.status(422).json(err));
    });

module.exports = router;