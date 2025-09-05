const homeRouter=require('./home')
const coursesRouter=require('./courses')
function route(app){
app.use('/',homeRouter)
app.use('/courses', coursesRouter)
}
module.exports =route