const models = require('../models');
const Validator = require('fastest-validator');

//Create Book
function Create_Book(req,res){
    const book ={
        name: req.body.name,
        author: req.body.author,
        content: req.body.content,
        price: req.body.price,
        pages: req.body.pages,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId:1
    }
      //Validator Schema
      const schema = {
        name:{type:"string",Optional: false,max:"100"},
        content:{type: "string",optional: false, max:"500"},
        //categoryId:{type:"string",optional:false}
    }

    const v = new Validator();
    const ValidationResponse= v.validate(book,schema);
    
    if(ValidationResponse!== true){
        return res.status(400).json({
            message:"validation failed",
            error: ValidationResponse
        });
    }
    // Categories Model
    models.cate

    models.Book.create(book).then(result=>{
        res.status(201).json({
            message: "Book created successfully",
            book: result
        });
    }).catch(error=>{
        res.status(500).json({
            message:"Something went wrong",
            error: error
        });
    });

}
//Get By id Book
function get_Book(req,res){
    const id = req.params.id;
    models.Book.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Book not found!"
            })

        }

    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong!"
        })

    });
}

// Get all the Book
function get_allBook(req,res){
    models.Book.findAll().then(result=>{
        res.status(200).json(result)
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong!"
        })

    });
}

//Updating the Book
function update_Book(req,res){
    const id = req.params.id;
    const updatedBook = {
        name: req.body.name,
        author: req.body.author,
        content: req.body.content,
        price: req.body.price,
        pages: req.body.pages,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
    }
    const userId =1;

    //Validator Schema
    const schema = {
        name:{type:"string",Optional: false,max:"100"},
        content:{type: "string",optional: false, max:"500"},
       // categoryId:{type:"string",optional:false}
    }

    const v = new Validator();
    const ValidationResponse= v.validate(updatedBook,schema);
    
    if(ValidationResponse!== true){
        return res.status(400).json({
            message:"validation failed",
            error: ValidationResponse
        });
    }

    models.Book.update(updatedBook, {where: {id:id,userId: userId}}).then(result=>{
        res.status(200).json({
            message: "Book updated successfully",
            book: updatedBook
        });
    }).catch(error=>{
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    })

    }
// Delete the Book
function delete_Book(req,res){
    const id = req.params.id;
    const userId = 1;

    models.Book.destroy({where:{id:id,userId:userId}}).then(result=>{
        res.status(200).json({
            message: "Book deleted  successfully"
        });
    }).catch(error=>{
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    })

    }



module.exports = {
    Create_Book,
    get_Book,
    get_allBook,
    update_Book,
    delete_Book
}
