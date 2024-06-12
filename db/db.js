import { Sequelize } from "sequelize";

const db = new Sequelize("parcial_backend", "root", "",{
    host: "localhost",
    dialect: "mysql"
})


export default db