const express = require ('express');
const path = require("path");
const Rollbar = require('rollbar');


let rollbar = new Rollbar({
    accessToken: "96792af912f94227a75dad39b5c31f5e",
    captureUncaught: true,
    captureUnhandledRejections: true
})
const colleges = [];
const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, "/public/index.html"));
//         rollbar.info("HTML file served successfully!");
    // });
    app.post('/api/college', (req, res)=>{
        let {name} = req.body
        name = name.trim()
    
        const index = colleges.findIndex(collegeName=> collegeName === name)
    
        if(index === -1 && name !== ''){
            students.push(name)
            rollbar.log('College has been added successfully', {author: 'Bryan B', type: 'manual entry'})
            res.status(200).send(colleges)
        } else if (name === ''){
            rollbar.error('No name given')
            res.status(400).send('must provide a name.')
        } else {
            rollbar.error('student already exists')
            res.status(400).send('that student already exists')
        }
    
    })
    Rollbar.critical("Connection error from remote Payments API");
    Rollbar.critical("DDOS attack in progress!");
    Rollbar.warning("Connection not secure!");
    

        rollbar.log("Hello World");
        // res.status(200).send(students);
    

const port = process.env.PORT || 4545;
// app.use(rollbar.errorHandler());

app.listen(port, () => {
    console.log(`Serving up on ${port}!`);
    });