const router = require('express').Router();
const Books = require('../models/BookModel')

router.post('/add', async(req, res) => {
    try {
        const {bookname, description, author, image, price} = req.body;

        let book = new Books({
            bookname,
            description,
            author,
            image,
            price,
        })
        await book.save();
        res.status(200).json({message:'Book added successfully'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})

router.get('/getbooks', async(req, res) => {
    try {
        let data = await Books.find({});
        if(data){
            res.status(200).json(data)
        }
        
    } catch (error) {
        console.log(err);
        res.status(500).send()
    }
})

router.get('/getbook/:id', async(req, res) =>{
    try {
       
        let getbookdata = await Books.findById({_id:req.params.id
        });
        if(getbookdata){
            res.status(200).json(getbookdata);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
})

router.put('/updatebook/:id', async(req, res) => {
    try {
        const {bookname, description, author, price, image} = req.body;
        let updatebook = await Books.findByIdAndUpdate(req.params.id, {
            bookname,
            description,
            author,
            price,
            image,
        });
        await updatebook.save(); 
        res.status(200).json({message:'Data updated'});
        
    } catch (error) {
        console.log(err);
        res.status(500).send()
    }
})

router.delete('/deletebook/:id', async(req, res) => {
    try {
        let deletedbook = await Books.findByIdAndDelete(req.params.id);
        if(deletedbook){
            res.status(200).json({message:'Book Deleted success'})
        }
        
    } catch (error) {
        console.log(err);
        res.status(500).send()
    }
})


module.exports = router;