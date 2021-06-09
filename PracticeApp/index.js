var express = require('express');
app = express();

// app.get("/",function(req,res){
//     res.send("Hello This is Home");
// })
// app.post("/about",function(req,res){
//     res.send("Hello This is About");
// })
// app.put("/contact",function(req,res){
//     res.send("Hello This is Contact");
// })
// app.delete("/terms",function(req,res){
//     res.send("Hello This is Terms");
// })


//in this code you can change status in your Postman app
// app.post("/one",function(req,res){
//     res.status(403).end();
// })

//this is for JSON response
app.post("/four", function (req, res) {

    let myJSONarray = [
        {
            name: "Ahsanul",
            age: 20,
            city: "Sylhet"
        },
        {
            name: "Hakim",
            age: 21,
            city: "Dhaka"
        },
        {
            name: "Honey",
            age: 19,
            city: "Habigonj"
        }

    ]
       res.json(myJSONarray);

})

app.listen(8000, function () {
    console.log("Server Run Successfully")
})

// some important information
// When you run this in the localhost or browser it will only run when u use get() method.. otherwise it will not work.. so how u run this??!!

// For that you have to install Postman.. this app has so many method...then you can easily run your programme