import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import { engine } from 'express-handlebars'
import router from './routes/index.routes'

// Config
dotenv.config()
const port = process.env.PORT || 3000
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Handlebars
app.set('views',path.join(__dirname, 'views'))
app.engine('handlebars',engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".handlebars",
}))
app.set('view engine','handlebars')

app.use(router)

// Initialize
app.listen(port)
console.log('Server is listening on port ' + port)
