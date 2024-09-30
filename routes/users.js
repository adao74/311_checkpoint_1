const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users.js')

router.get('/', controllers.listUsers)
router.get('/:id', controllers.showUser)
router.post('/', controllers.createUser)
router.put('/:id', controllers.updateUser)
router.delete('/:id', controllers.deleteUser)

module.exports = router