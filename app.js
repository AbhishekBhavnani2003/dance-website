const express = require("express");
const path = require("path");
const bodyparser = require("body-parser")
const app = express();
const port = 8000;


// starting to connect database for contact form 

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactdance');
}

// mongoose schema 

const contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    age: String , 
    dancestyles : String 
  });

  // mongoose model 
  const contact = mongoose.model('contact', contactschema);




// app.use(express.static('static', options))

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()) // to bring the data to exoress 

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get('/services', (req, res)=>{
    const params = { }
    res.status(200).render('services.pug', params);
})
app.get('/about', (req, res)=>{
    const params = { }
    res.status(200).render('about.pug', params);
})
app.get('/academyinfo', (req, res)=>{
    const params = { }
    res.status(200).render('academyinfo.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})


// for saving the form into database on submit click by user 

app.post('/contact', (req, res)=>{
    var mydata = new contact(req.body)
    mydata.save().then(() => 
    {
        res.send(" this information is saved succesfully to database ")
    }
    ).catch(()=>
        {
            res.status(400).send(" information could not be saved in database ")

        }
    )

    // res.status(200).render('contact.pug');
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
