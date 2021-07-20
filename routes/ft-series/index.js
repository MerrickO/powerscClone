const router = require('express').Router();


router.get('/ft3', (req,res) => {
    res.render('./products/ft-series/ft3');
})

.get('/ft5', (req,res) => {
    res.render('./products/ft-series/ft5')
})

.get('/ft8', (req,res) => {
    res.render('./products/ft-series/ft8')
})



module.exports = router
