const Course = require('../models/Course')
class coursesController{


detail(req,res,next){
       Course.findOne({_id: req.params.slug}).lean()
      .then(course=>{
        res.render('courses/detail',{course});
      })
      .catch(next)
}

}
module.exports = new coursesController