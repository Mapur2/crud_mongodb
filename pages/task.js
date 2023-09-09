const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json(); 
const { gettask, 
    update, 
    getsingle, 
    remove, 
    create } = require("../controll/taskroute")

router.route("/").get(gettask)
router.route("/").post(jsonParser,create)
router.route("/:id").get(getsingle).patch(jsonParser,update).delete(remove)
module.exports = router