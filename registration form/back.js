const ipt1 = document.getElementById("ip1");
const ipt2 = document.getElementById("ip2");
const ipt3 = document.getElementById("ip3");
const ipt4 = document.getElementById("ip4");
const ipt5 = document.getElementById("ip5");
const ipt6 = document.getElementById("ip6");
const ipt7 = document.getElementById("ip7");
const ipt8 = document.getElementById("ip8");
const ipt9 = document.getElementById("ip9");

const btn = document.getElementById("btn");



const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("server created");
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017//registration",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connecter")})
.catch((err)=>{console.log(err)});

const tables = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    Hostel:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now()
    }

});

const Data=mongoose.model("Data",tables);


btn.onclick = async()=>{

    const data1=ipt1.value;
    const data2=ipt2.value;
    const data3=ipt3.value;
    const data4=ipt4.value;
    const data5=ipt5.value;
    const data6=ipt6.value;
    const data7=ipt7.value;
    const data8=ipt8.value;
    const data9=ipt9.value;
    const response = await Data.create({data1,data2,data3,data4,data5,data6,data7,data8,data9});
    console.log(response);
};