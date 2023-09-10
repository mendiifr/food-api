//ב"ה
import  Sequelize  from "sequelize";

const connection = new Sequelize(
    "food_db",
    "root",
    "770770",
    {
        dialect: "mysql",
        host: "localhost"
    }

);

export default connection;
