const Course = require('../models/Course')
class coursesController {


    detail(req, res) {
        Course.findOne({ _id: req.params.slug }).lean()
            .then(course => {
                res.render('courses/detail', { course });
            })
            .catch(() => res.send(failed))
    }

    update(req, res) {
        Course.findOne({ _id: req.params.slug }).lean()
            .then(course => {
                res.render('courses/update', { course });
            })
            .catch(() => res.send(failed))
    }
    updated(req, res) {
        const body = req.body
        body.imagine = `https://i.ytimg.com/vi/${body.video}/hqdefault.jpg`
        Course.findByIdAndUpdate(req.params.slug, body, { new: true })
            .then(() => res.redirect('/'))
            .catch(() => res.send(failed))
    }
    delete(req, res) {
        Course.findByIdAndDelete(req.params.slug)
            .then(() => res.redirect('/'))
            .catch(() => res.send('failed'))
    }

    saveNote(req, res) {
        // res.json(req.body)
        if (req.body.note!=""){
             Course.findByIdAndUpdate(req.params.slug, req.body, { new: true })
            .then(course => res.redirect(`/courses/${req.params.slug}`))
            .catch(() => res.send(failed))
        }
        else res.redirect(`/courses/${req.params.slug}`)
       
    }
}
module.exports = new coursesController