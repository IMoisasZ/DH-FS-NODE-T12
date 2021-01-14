var express = require('express');
const { recipe } = require('../Controller/RecipeController');
var router = express.Router();
const RecipeController = require("../Controller/RecipeController")

/* GET home page. */
router.get('/', RecipeController.index)
router.post('/save', RecipeController.save)

module.exports = router;