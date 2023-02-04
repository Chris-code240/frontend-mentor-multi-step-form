const express = require("express")
const expressEJS = require("express-ejs-layouts")
const cors = require("cors")

const app = express()


app.use(expressEJS)
app.set("view engine","ejs")
app.set('layout','layouts/layout')
app.set('views',__dirname + '/views')
app.use(express.static("public"))
app.use(cors({
    origin: "*",
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Origin','Content-Type','X-Requested-With','Accept']
}))
app.get('/',(req,res)=>{
    res.render('pages/index',{title:"Home"})
})

app.get("/plans",(req,res)=>{
    res.render('pages/plan',{title:"Plans"})
})

app.listen(process.env.PORT || 5000)