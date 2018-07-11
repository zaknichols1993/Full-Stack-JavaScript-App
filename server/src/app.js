const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const stripe = require('stripe')
//stripe is not included in these dependencies.
const {sequelize} = require('./models')
const config = require('./config/config')
//const keyPublishable = process.env.PUBLISHABLE_KEY;
//const keySecret = process.env.SECRET_KEY;

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes/routes')(app)

sequelize.sync({force: false})
    .then(() => {
        app.listen(config.port)
        console.log(`Server Started On Port ${config.port}`)
    })