const fs = require("fs")
const path = require("path")

let recipes = require("../Data/recipes")

const caminhoReceitas = path.join("Data","recipes.js")

module.exports = {
    index(req,res){
        res.render("recipes", {receitas:recipes})
    },

    save(req,res){
        let {id, nome, email, mensagem} = req.body
        id = recipes.length + 1
        recipes.push({id, nome, email, mensagem})
        recipes = JSON.stringify(recipes)
        fs.writeFileSync(caminhoReceitas,'module.exports = ')
        fs.appendFileSync(caminhoReceitas, recipes)
        res.redirect("/recipes")
    }
    
}