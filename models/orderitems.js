//ב"ה
import  Sequelize  from "sequelize";
import database from "../utilis/database.js";

const OrderItems = database.define("orderItems",{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    orderId: Sequelize.INTEGER,
    productId: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER
})

export default OrderItems;