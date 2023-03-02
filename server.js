import express from "express";

const app=express();

app.use(logger);

app.get("/", (req, res)=>{
    console.log("Home page entered");
    res.json("Home page");
});

app.get("/users", auth,  (req, res)=>{
    console.log("Users page entered");
    console.log(`User is admin= ${req.admin}`);
    res.json("Users Page");
});

function logger(req, res, next){
    console.log("logger middleware before next part");
    next();
    console.log("logger middleware after next part");
};

function auth(req, res, next){
    console.log("Auth middleware entered");
    if(req.query.admin==="true"){
        req.admin=true;
        next();
    }
    else
    res.send("Not Authenticated")  
};

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
});

