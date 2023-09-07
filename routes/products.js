//ב"ה
import express  from 'express';
const router = express.Router();


router.post('/addProduct',(req,res) => {
    const {
        prodName,
        prodPrice,
        prodImage,
        prodDesc
    } = req.body
    return res.status(200).json({
        message: `your product name ${prodName} price: ${prodPrice} image: ${prodImage} desc: ${prodDesc}`
    })
})


export default router;