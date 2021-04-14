const { Router } = require('express')
const router = Router()
const PhotoController = require('../controller/PhotoController')

router.get("/api/photo/:limit?", PhotoController.index)
router.get("/api/photo/:id", PhotoController.getById)

module.exports = router;