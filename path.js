const express =  require("express");
const router  =  express.Router()


const {createTo}  =  require("../controllers/createTo");
const{getTo , getToId} =  require("../controllers/getTo");
const{updateTodd} = require("../controllers/updateTodd");

router.post("/createTo" , createTo);
router.get("/getTo" ,  getTo);
router.get("/getToId/:id" , getToId );
router.put("/updateTodd/:id" , updateTodd );


module.exports =  router;