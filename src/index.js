require('dotenv').config();
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000;

const route = require('./routes')
const db = require('./config/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//connect to db
db.connect()

app.use(morgan('combined'))
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views')
)
app.use(express.static(path.join(__dirname, 'public')))


route(app)




app.listen(port,() => {
  console.log(`app listening on port ${port}`)
})
