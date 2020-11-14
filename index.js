const express = require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");
//middleware
app.use(cors());
app.use(express.json());//req.body
//routes
//create a movie route
app.post("/movies",async(req,res)=>{
    try{
        
        const {movietitle}=req.body;
        const newTitle=await pool.query("INSERT INTO movie (movietitle) VALUES($1)",
        [movietitle]);
        const {moviecast}=req.body;
        const newCast=await pool.query("INSERT INTO movie (moviecast) VALUES($1)",
        [moviecast]);
        const {moviegenre}=req.body;
        const newgenre=await pool.query("INSERT INTO movie (moviegenre) VALUES($1)",
        [moviegenre]);
        const {moviedirector}=req.body;
        const newDirector=await pool.query("INSERT INTO movie (moviedirector) VALUES($1)",
        [moviedirector]);
        const {movierating}=req.body;
        const newRating=await pool.query("INSERT INTO movie (movierating) VALUES($1)",
        [movierating]);
        const {moviereviews}=req.body;
        const newReview=await pool.query("INSERT INTO movie (moviereviews) VALUES($1)",
        [moviereviews]);

    }
    catch(err){
        console.error(err.message);
    }
})
//updating movie

app.listen(5000,()=>{
    console.log("server has started on port 5000");
})
