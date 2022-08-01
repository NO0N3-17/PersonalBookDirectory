const { Router }= require('express')
const router = Router()
const controller = require('./controller')


router.get('/',controller.Homepage);


router.get('/addbook',controller.addBookGet);

router.post('/addbook',controller.addBookPost);

router.get('/showbook',controller.showBook);

router.get('/removebook',controller.removeBookGet);

router.get('/removebook/:isbn',controller.removeBook);

router.get('/addbook/:title/:author/:isbn',controller.addBook);

router.post('/removebook',controller.removeBookPost);

router.get('/searchbook',controller.searchBookGet);

router.post('/searchbook',controller.searchBookPost);

router.get('/book/:isbn',controller.getBook);

module.exports = router;