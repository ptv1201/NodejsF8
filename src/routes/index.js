const newsRouter=require('./news')
const homeRouter=require('./home')
function route(app){
// app.get('/', (req, res) => {
//   res.render('home');
// })

app.use('/home',homeRouter)

// app.post('/news',(req,res) => {
//   console.log(req.body)
//   res.render('news')
// })

app.use('/news',newsRouter)

}
module.exports =route