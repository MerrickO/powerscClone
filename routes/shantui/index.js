const router = require('express').Router();

 /* Landfill Compactors */
router.get('/landfill/sr23mr', (req,res) => {
    res.render('/products/shantui/landfill-compactors/sr23mr')
})

.get('/landfill/sr26mr-3', (req,res) => {
    res.render('/products/shantui/landfill-compactors/sr26mr-3')
})

.get('/landfill/sr28mr-3', (req,res) => {
    res.render('/products/shantui/landfill-compactors/sr28mr-3')
})

.get('/landfill/sr26mr-3', (req,res) => {
    res.render('/products/shantui/landfill-compactors/qs300')
})
/* Landfill compactors END */

/* Bulldozers */
.get('/bulldozers/sd16', (req,res) => {
    res.render('/products/shantui/bulldozers/sd16')
})

.get('/bulldozers/sd22w', (req,res) => {
    res.render('/products/shantui/bulldozers/sd22w')
})

.get('/bulldozers/sd32w', (req,res) => {
    res.render('/products/shantui/bulldozers/sd32w')
})

.get('/bulldozers/sd52-s', (req,res) => {
    res.render('/products/shantui/bulldozers/sd52-s')
})

/* Bulldozers END */

/* Excavators */
.get('/excavators/se220', (req,res) => {
    res.render('/products/shantui/excavators/se220')
})

.get('/excavators/se330', (req,res) => {
    res.render('/products/shantui/excavators/se330')
})

.get('/excavators/se480', (req,res) => {
    res.render('/products/shantui/excavators/se480')
})

.get('/excavators/sd52-s', (req,res) => {
    res.render('/products/shantui/excavators/sd52-s')
})
/* Excavators END */

/* Forklifts */
.get('/forklift/sf20&sf25', (req,res) => {
    res.render('/products/shantui/forklift/sf20&sf25')
})

.get('/forklift/sf30&sf35', (req,res) => {
    res.render('/products/shantui/forklift/sf30&sf35')
})

.get('/forklift/sl60w-3', (req,res) => {
    res.render('/products/shantui/forklift/sf50-sf60-sf70')
})
/* Forklifts END */

/* Motor Graders */
.get('/motor-graders/sf20&sf25', (req,res) => {
    res.render('/products/shantui/motor-graders/sg21-3')
})
/* Motor Graders END */

/* Wheel Loaders */
.get('/wheel-loaders/sl30w', (req,res) => {
    res.render('/products/shantui/wheel-loaders/sl30w')
})

.get('/wheel-loaders/sl50w-3', (req,res) => {
    res.render('/products/shantui/wheel-loaders/sl50w-3')
})

.get('/wheel-loaders/sl60w-3', (req,res) => {
    res.render('/products/shantui/wheel-loaders/sl60w-3')
})
/* Wheel Loaders END */


/* Road Rollers */
.get('/road-rollers/sr12-5', (req,res) => {
    res.render('/products/shantui/road-rollers/sr12-5')
})

.get('/road-rollers/sr19p', (req,res) => {
    res.render('/products/shantui/road-rollers/sr19p')
});

/* Road Rollers END */

module.exports = router