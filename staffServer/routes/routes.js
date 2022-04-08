const router = require("express").Router();
const Staff = require("../models/Staff");

router.get("/", (req, res) => {
  Staff.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.post("/", (req, res) => {
  Staff.create(req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.put("/:id", (req, res) => {
  Staff.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    }
  );
});

router.delete("/:id", (req, res) => {
  Staff.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end();
  });
});

module.exports = router;
