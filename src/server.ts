import { adminjs, adminJsRouter } from './adminjs/index';
import { sequelize } from './database/index';
import express from 'express'

const app = express()

app.use(express.static('public'))

app.use(adminjs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB Connection successfull')
    })
    console.log('Server started successfuly at port ' + PORT)
})