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
   search(req, res, next) { // bỏ qua dấu tiếng việt bỏ qua in thường in hoa, include
      const keyword = req.query.name
      const nomalizeKeyWord = keyword
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase()
      Course.find({ nomalizeName: { $regex: nomalizeKeyWord, $options: "i" } }).lean()
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
      body.nomalizeName = body.name
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')
         .toLowerCase()
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