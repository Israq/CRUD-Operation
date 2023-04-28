import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Israq",
        lastName: "Syed",
        age: 26
    },
    {
        firstName: "Syed",
        lastName: "Ragib",
        age: 26
    }
]

//all routes in here are starting from /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;