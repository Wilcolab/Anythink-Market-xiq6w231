const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, " y mira si completa tu oración
router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
    });
});
// add another endpoint for deleting a comment using async/await
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});
