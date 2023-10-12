const express = require("express");
const app =express();
const mysql = require("mysql");

const db = mysql.createConnection({

    host:"localhost",
    user: "root",
    password:"",
    database:"sistema_crud"
});

app.post("/create",(req,res) =>{
     const nombrecompleto =req.body.nombrecompleto;
     const nombre =req.body.nombre;
     const apellidopaterno =req.body.apellidopaterno;
     const apellidomaterno =req.body.apellidomaterno;
     const curp =req.body.curp;
     const telefono =req.body.telefono;
     const celular =req.body.celular;
     const email =req.body.email;
     const nivel =req.body.nivel;
     const municipio =req.body.municipio;
     const asunto =req.body.asunto;
                                   
                                  //asi es como vienen en la bdd                                                   //de la variable que se van a recibir
     db.query('INSERT INTO alumno(curp,nombre,apellidoMaterno,apellidoPaterno) VALUES(?,?,?,?)',[curp,nombre,apellidomaterno,apellidopaterno],
     (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Alumno registrado con éxito!")
        }
     }
     
     )


})

app.listen(3001,()=> {
    console.log("Corriendo en el puerto 3001")

})
