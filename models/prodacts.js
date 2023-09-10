//ב"ה
import  Sequelize  from "sequelize";
import database from "../utilis/database.js";


const Products = database.define("products",{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    prodName: Sequelize.STRING,
    prodDesc: Sequelize.STRING,
    categoryId: Sequelize.INTEGER,
    storeId: Sequelize.INTEGER
});
export default Products;