const saveData = require('../Utils/saveData')

let recipes = require("../Data/recipes")

module.exports = {
    async index(req,res){
        res.render("recipes", {receitas:recipes})
    },

    async save(req,res){
        let { nome, email, mensagem } = req.body

        let ultimoId = 0
        for(let i in recipes){
            if(recipes[i].id > ultimoId){
                ultimoId=recipes[i].id
            }            
        }
        let id = ultimoId + 1
        recipes.push({id:id, nome, email, mensagem})
        saveData(recipes, 'recipes.js')
        res.redirect("/recipes")
    },

   async delete(req, res) {
        let {id} = req.params
        let recipeIndex = recipes.findIndex(rec => rec.id == id)
        recipes.splice(recipeIndex, 1)
        saveData(recipes, 'recipes.js')
        res.render("recipes",{ receitas: recipes, deleted: true})
    },

    async edit(req, res) {
        let { id } = req.params
        let recipe = recipes.find(recipe => recipe.id == id )
        res.render('edit-recipe', { recipe })
    },

    async update(req, res) {
        let { id } = req.params
        let { nome, email, mensagem } = req.body
        let recipe = recipes.find(recipe => recipe.id == id)
        recipe.nome = nome
        recipe.email = email
        recipe.mensagem = mensagem
        saveData(recipes, 'recipes.js')
        res.render('edit-recipe', {recipe, updated: true})
    }
}