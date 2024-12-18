const express = require('express')
const app = express()


const students = {
    1:{
        name: "Vishwa",
        age:99,
        id:1
    },
    2:{
        name: "Kaushika Vats",
        age:78,
        id:2
    },
    3:{
        name:"Shailja ",
        age:45,
        id:3

    }
}
///GET127.0.0.1:3000/api/v1/students/123
app.get("/students/:id",(req,res)=>{
    let std_id = req.params.id
    console.log(std_id);
    
    let std_obj = students[std_id]

    if(std_obj){
        res.status(200).send(std_obj)
    }else{
        res.status(500).send({
            err:"Student not found"
        })
    }
})
app.listen(3000,()=>{
    console.log("Server has started");
    
})