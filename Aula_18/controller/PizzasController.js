const pizzas = require("../database/pizzas")

const PizzasController = {

    getPizza: (req, res) => {
        let id = req.params.id
            res.render('pizzas', {pizza:pizzas[id]})
        }
    }
module.exports = PizzasController