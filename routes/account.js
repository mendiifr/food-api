//ב"ה
import express  from 'express';
const router = express.Router();
import axios from 'axios';

router.get('/sayWelcome',(req,res)=>{
    axios.get('https://jsonplaceholder.typicode.com/users') 
    .then(results => {
        const users = results.data;
        console.log('number of users: '+ users.length);
        users.forEach(x => {
            console.log(x.name);
        });
        //console.log(results.data);
        return res.status(200).json({data: results.data})
    })
    .catch(error => {
        return res.status(500).json({message: 'Err: ' + error.message})
    })


})
/*
router.get('/sayWelcome',(req,res)=>{
    return res.status(200).json({
        messages: 'Welcome to Food-Api Sarver'
    })

})
*/
router.post('/sayMyName',(req,res) => {
    const {username, password} = req.body
    return res.status(200).json({
        message: `Helllo ${username} Your password is ${password}`
    })
})



export default router;