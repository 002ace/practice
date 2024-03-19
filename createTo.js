
const Todo = require('../models/todo');

//in controllers  we create business logic of programe

exports.createTo = async (req, res) => {
    try {

        
        const { title, description } = req.body;

        const response = await Todo.create({ title, description });
        console.log(title);
        console.log(description);

        res.status(200).json({
            success: true,
            data:response,
            message: "Entry created successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message 
        });
    }
};
