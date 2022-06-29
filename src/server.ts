import { sequelize } from './database/index';
import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB Connection successfull')
    })
    console.log('Server started successfuly at port ' + PORT)
})