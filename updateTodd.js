const Todo = require("../models/todo");

exports.updateTodd = async(req,res)=>{
      try{
             const id  = req.params.id;
             const{ title , description } =  req.body ;
             const todo =  await Todo.findByIdAndUpdate(
                 {_id : id },
                 {title , description ,  updatedAt:Date.now() },
             )
             console.log(todo);
             if(!todo)
           {
                res.status(404).json({
                    success:false ,
                    message:"no data found with given id"
                })
           }

           res.status(200).json({
                success:true ,
                data:todo,
                message:"Data fetch by id successfully  and updated"
           })

      }catch(error){

        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message 
        });



      }
}