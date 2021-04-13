const { Task } = require('../models');

const TaskController = {
    index: async (req, res, next) =>{
        try {
            let task = await Task.findAll({where:{
                deleted: 0,
                done: 0
            }})
            return res.status(200).json(task)

        } catch (error) {
            return res.status(400).json({ message: 'Error: ' + error.message });
        }
        

        res.send("index")
    },
    create: async (req,res,next) =>{
        try {
            let task = await Task.create({ ...req.body })
            return res.status(201).json(task);
        } catch (error) {
            return res.status(400).json({ message: 'Error: ' + error.message });
        }
    }, 
    getById: async (req, res,  next) =>{
        try {
            let { id } = req.params
            let task = await Task.findByPk(id)
            return res.status(201).json(task)
        } catch {
            return res.status(400).json({ message: 'Error:' + error.message})
        }
    },
    update: async (req, res, next) =>{
        try {
            let { id } = req.params
            let { title, description, done = false } = req.body
            let task = await Task.findByPk(id)
            task.update({
                title,
                description,
                done,
            })
            return res.status(200).json(task)
        } catch {
            return res.status(400).json({ message: 'Error:' + error.message})
        }
    },
    delete: async (req, res, next) =>{
        try {
            let { id } = req.params
            let task = await Task.findByPk(id)
            task.update({
                deleted: true
            })
            return res.status(200).json("Registro deletado com sucesso")
        } catch {
            return res.status(400).json({ message: 'Error:' + error.message})
        }
    }
}
module.exports = TaskController;