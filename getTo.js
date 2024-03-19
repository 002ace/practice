const Todo =   require('../models/todo');

exports.getTo =  async(req,res)=>{

    try{
         
        const todo  =  await Todo.find({});
        console.log(todo) ;
        res.status(200).json({
            success: true,
            data:todo,
            message: "Data fecth successfully from db"

        })

    }catch(error)
    {  
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message 
        });

    }

}

exports.getToId = async(req,res)=>{
    try{
           const id =  req.params.id ;
           const todo  = await Todo.findById({_id:id});
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
                message:"Data fetch by id successfully "
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