const express = require('express')
const Profile = require('../model/profile');
const router = express.Router()




// members home
router.get('/', (req, res) => {
    res.send(`members home`)
});

router.post('/', (req, res,) => {
    const profile = new Profile({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    });
    res.status(201).json({
        message: 'handling request to /api/members',
        createdProfile: profile
    });
});





//user plan
// router.get('/user', (req, res) => {
//     res.send('user plan');
// });


//create a plan

// router.post('/user', async (req, res) => {
//     const profile1 = new Profile({
//         name: req.body.name,
//         age: req.body.age,
//         email: req.body.email,
//         situps: req.body.situps,
//         curls: req.body.curls,
//         water: req.body.water
//     });
//     try {
//         const savedProfile = await profile1.save();
//         res.status(200).send(savedProfile);
//     }
//     catch (err) {
//         console.log('err', err)
//         res.status(400).send(err);
//     }
// });




module.exports = router