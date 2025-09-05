const Course = require('../models/Course')

class HomeController {

   //'GET' home
   index(req, res, next) {
      Course.find({}).lean()
         .then(courses => {
            res.render('home', { courses })
         })
         .catch(next)
   }
   search(req, res, next) {
      const keyword = req.query.name
      Course.find({ name: keyword }).lean()
         .then(courses => {
            res.render('courses/search', { courses })
         })
         .catch(next)
   }
   create(req, res, next) {
      res.render('courses/create')
   }
   add(req, res) {
      const body = req.body
      body.imagine = `https://i.ytimg.com/vi/${body.video}/hqdefault.jpg`
      const course = new Course(body)
      course.save()
         .then(() => {
            res.redirect('/')
         })
         .catch(() => {
            res.send("failed!!");
         })
   }
}
module.exports = new HomeController