const express= require('express')
const router=express.Router()
const homeController=require('../app/controllers/HomeController')


router.get('/',homeController.index)
router.get('/search',homeController.search)
router.get('/create',homeController.create)
router.post('/add',homeController.add)

module.exports=router