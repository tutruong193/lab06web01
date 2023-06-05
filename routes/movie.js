var express = require('express');
const MovieModel = require('../models/MovieModel');
var router = express.Router();

router.get('/',async(req,res)=>{
    var movie_list = await MovieModel.find();
    res.render('movie/index',{movies : movie_list});
});

router.get('/delete/:id',async(req,res)=>{
    await MovieModel.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
});


router.get('/list',async(req,res)=>{
    var movie_list = await MovieModel.find();
    res.render('movie/list',{movies : movie_list});
});

router.post('/rent',async(req,res)=>{
    var id = req.body.id;
    var movie = await MovieModel.findById(id);
    res.render('movie/rent',{movie : movie});
})
router.get('/add',(req,res)=>{
    res.render('movie/add');
})
router.post('add',async(req,res)=>{
    var movie = req.body;
    await MovieModel.create(movie)
    .then(()=> console.log('add ok'))
    res.redirect('/movies')
})


//search function
router.post('/search', async (req, res) => {
    var movies = await MovieModel.find({ title: new RegExp(req.body.title, "i")})
    res.render('movie/index', { movies: movies })
 })
 
 //sort function
 router.get('/sort/asc', async (req, res) => {
    var movies = await MovieModel.find().sort({ title: 1 })
    res.render('movie/index', { movies: movies })
 })
 
 router.get('/sort/desc', async (req, res) => {
    var movies = await MovieModel.find().sort({ title: -1 })
    res.render('movie/index', { movies: movies })
 })
 
module.exports = router;