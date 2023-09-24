const express = require("express");
const router = express.Router();

const todos = require('./todos');
// import other routes here
const users = require('./users');


router.get("/", (req, res) => {
  res.send("main page!");
});

router.use("/todos", todos);
// use other routes here
router.use('/users', users) 
<<<<<<< HEAD



=======
>>>>>>> 0166a6d (.)

module.exports = router;
