//ב"ה
import  Sequelize  from "sequelize";
import database from "../utilis/database.js";

const Categories = database.define("Categories",{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    categoryName: Sequelize.STRING,
    categoryImage: Sequelize.STRING,
    categoryOrder: Sequelize.STRING,
    categoryDesc: Sequelize.STRING
});

export default Categories;

export const getCategories = () => {
    Categories.findAll()
    // .then(result => {

    // })
    // .catch(error => {

    // })
};
export const getCategoryById = (id) => {};
export const addNewCategoty = () => {};
export const updateCategoryById = (id) => {};
export const deleteCategoryById = (id) => {};


