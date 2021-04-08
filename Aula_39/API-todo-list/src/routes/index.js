const { Router } = require('express')
const router = Router()
const TaskController = require('../controller/TaskController')

router.get("/api/task/list",TaskController.index)

router.post("/api/task/create",TaskController.create)

router.post("/api/task/getbyid",TaskController.getById)

router.post("/api/task/update",TaskController.update)

router.post("/api/task/delete",TaskController.delete)

module.exports = router;