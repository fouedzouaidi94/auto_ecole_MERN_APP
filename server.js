const express= require ("express")
const mongoose = require("mongoose")
const app=express()

//Middlware
app.use(express.json())
// connect DB
const mongoURI="mongodb+srv://foued:1234@cluster0-v0hmx.mongodb.net/test?retryWrites=true&w=majority"
//const db="Auto-Ecole"
mongoose.connect(mongoURI,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true  })
.then(()=>console.log("Mongodb connected ...")).catch(err=>console.log(err))
//routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/trainingSession", require("./routes/api/trainingSession"));
app.use('/api/exam', require('./routes/api/exam'));

// Serve static assets if in production
if(process.env.NODE_ENV==='production'){
    // set static folder
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


//starting the server
const port = process.env.PORT || 5000

app.listen(port,err=>{
    err?console.log("failed to connect"):console.log(`server running on port ${port}....`)
})
