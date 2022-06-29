import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'purple_development',
    username: 'purple',
    password: 'purple',
    define: {
        underscored: true
    }
})