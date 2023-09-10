//ב"ה
import  Sequelize  from "sequelize";
import database from "../utilis/database.js";


const ProductImages = database.define("productImages",{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    productId: Sequelize.INTEGER,
    imageUrl: Sequelize.STRING
})
export default ProductImages;