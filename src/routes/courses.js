const express= require('express')
const router=express.Router()
const coursesController=require('../app/controllers/coursesController')

router.get('/:slug',coursesController.detail)
router.get('/update/:slug',coursesController.update)
router.post('/updated/:slug',coursesController.updated)
router.post('/delete/:slug',coursesController.delete)
router.post('/save/:slug',coursesController.saveNote)

module.exports=router