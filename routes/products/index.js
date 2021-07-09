const router = require('express').Router();

router.get('/shantui', (req,res) => {
    res.render('./products/shantui');
})

.get('/ft-series', (req,res) => {
    res.render('./products/ft-series');
})

.get('/powerstar-trucks', (req,res) => {
    res.render('./products/powerstar-trucks');
})

.get('/special', (req,res) => {
    res.render('./products/special');
})

.get('/weichai', (req,res) => {
    res.render('./products/weichai');
})

module.exports = router
