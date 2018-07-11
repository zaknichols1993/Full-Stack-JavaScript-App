const path = require('path')

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'beer-fun',
        user: process.env.DB_USER || 'beer-fun',
        password: process.env.DB_PASS || 'beer-fun',
        options: {
          dialect: process.env.DIALECT || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: path.resolve(__dirname, '../../beer-fun.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    },
}