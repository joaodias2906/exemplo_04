const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
      res.render("pages/index",{"resultado":null,"valores":{"resul":"digite qual é o resultado"}});  
});


router.post("/resul", (req, res)=>{

let nota = parseInt(req.body.resul);

if(nota >=9 && nota <=10){
    var resul = "Nota A";
}else if(nota >= 7.5 && nota <=9){
    var resul = "Nota B";
}else if(nota >= 6 && nota <= 7.5){
    var resul = "Nota C";
}else if(nota >= 4 && nota <= 6){
    var resul = "Nota D";
}else{
    var resul = "Nota E";
}

 let objJson = {"resul":resul}

    res.render("pages/index", {"resultado":objJson,"valores":{"resul":req.body.resul}})

});


module.exports = router;