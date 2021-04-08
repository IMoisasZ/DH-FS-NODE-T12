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

        res.send("getbyid")
    },
    update: async (req, res, next) =>{

        res.send("update")
    },
    delete: async (req, res, next) =>{

        res.send("delete")
    }
}
module.exports = TaskController;