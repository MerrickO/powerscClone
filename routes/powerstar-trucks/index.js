const router = require('express').Router();


router.get('/v3-2646', (req,res) => {
    res.render('./products/powerstar-trucks/v3-2646');
})

.get('/v3-2646-et', (req,res) => {
    res.render('./products/powerstar-trucks/v3-2646-et')
})

.get('/v3-2646s', (req,res) => {
    res.render('./products/powerstar-trucks/v3-2646s-et')
})

.get('/vx1627', (req,res) => {
    res.render('./products/powerstar-trucks/vx1627')
})

.get('/vx1729', (req,res) => {
    res.render('./products/powerstar-trucks/vx1729')
})

.get('/vx2628', (req,res) => {
    res.render('./products/powerstar-trucks/vx2628')
})

.get('/vx2635a', (req,res) => {
    res.render('./products/powerstar-trucks/vx2635')
})

.get('/vx2642', (req,res) => {
    res.render('./products/powerstar-trucks/vx2642')
})

.get('/vx3335', (req,res) => {
    res.render('./products/powerstar-trucks/vx3335')
})

.get('/vx4035', (req,res) => {
    res.render('./products/powerstar-trucks/vx4035')
});



module.exports = router
