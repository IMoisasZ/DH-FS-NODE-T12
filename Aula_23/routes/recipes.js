var express = require('express');
var router = express.Router();
const RecipeController = require("../Controller/RecipeController")

/* GET home page. */
router.get('/', RecipeController.index)
router.post('/save', RecipeController.save)
router.get('/delete/:id', RecipeController.delete)

module.exports = router;