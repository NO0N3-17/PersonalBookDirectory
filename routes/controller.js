const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const { bookModel } = require('../model/model')

module.exports.Homepage = async(req, res) => {
  res.render('home')
}


module.exports.addBookGet = (req, res)=>{
    res.render('addbook')
}


module.exports.addBookPost = async(req, res)=>{
    const { title , author , isbn } = req.body
    var newbook = await bookModel.create({title,author,isbn})
    res.redirect('/addbook')
}


module.exports.showBook = async(req, res)=>{

    var books =  await bookModel.find({},{__v:0,_id:0})
    
    res.json(books);

}



module.exports.removeBookGet = (req, res)=>{
    res.render('removebook')
}


module.exports.removeBookPost = async(req, res)=>{
    const { isbn } = req.body
    await bookModel.deleteOne({isbn:isbn})
    bookModel.
    res.redirect('/removebook')
}


module.exports.searchBookGet = (req, res)=>{
    res.render('searchbook')
}


module.exports.searchBookPost = async(req, res)=>{
    const { isbn } = req.body
    const book = await bookModel.findOne({isbn},{__v:0,_id:0})
    res.json(book);
}

module.exports.getBook=async(req, res)=>{
    const { isbn } = req.params
    const book = await bookModel.findOne({isbn},{__v:0,_id:0})
    if(book){
        
        res.json(book);
    }
    res.send('Book Not Found');
}


module.exports.removeBook=async(req, res)=>{
    const { isbn } = req.params
    await bookModel.deleteOne({isbn})
    res.redirect('/showbook')
}


module.exports.addBook=async(req, res)=>{
    const { isbn , author , title} = req.params
    await bookModel.create({title,author,isbn})
    res.redirect('/showbook')
}
