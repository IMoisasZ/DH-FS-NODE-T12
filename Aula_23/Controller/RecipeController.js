const { ok } = require("assert")
const fs = require("fs")
const path = require("path")

let recipes = require("../Data/recipes")

const caminhoReceitas = path.join("Data","recipes.js")

function save(caminho, texto, arquivo){
    arquivo = JSON.stringify(arquivo)
    fs.writeFileSync(caminho,texto)
    fs.appendFileSync(caminho, arquivo)
}

module.exports = {
    async index(req,res){
        res.render("recipes", {receitas:recipes})
    },

    async save(req,res){
        let {id, nome, email, mensagem} = req.body
        id = Math.max(recipes.id)+1
        recipes.push({id, nome, email, mensagem})
        recipes = JSON.stringify(recipes)
        fs.writeFileSync(caminhoReceitas,'module.exports = ')
        fs.appendFileSync(caminhoReceitas, recipes)
        res.redirect("/recipes")
    },

   async delete(req, res) {
        let {id} = req.params
        recipes.forEach(rec =>{
            if(rec.id == id){
                recipes.splice(id-1,1)
            }
        })
        save(caminhoReceitas,'module.exports = ', recipes)
        res.render("recipes",{ receitas: recipes, deleted: true})
    }
}