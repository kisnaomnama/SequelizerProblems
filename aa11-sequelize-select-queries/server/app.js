// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();


// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Import Op to perform comparison operations in WHERE clauses - DO NOT MODIFY
const { Op } = require("sequelize");

// Express using json - DO NOT MODIFY
app.use(express.json());


// STEP 1
// All puppies in the database
// No WHERE clause
app.get('/puppies', async (req, res, next) => {
    let allPuppies;
    // Your code here 
    allPuppies = await Puppy.findAll({
        attributes: ['id', 'name', 'ageYrs', 'breed', 'weightLbs', 'microchipped'],
        // where: {
        //    name: {
        //     [Op.substring]: '%ie%'
        //    }
        // }
    })

    res.json(allPuppies);
});


// STEP 2
// All puppies that have been microchipped
// WHERE clause with one exact value
app.get('/puppies/chipped', async (req, res, next) => {
    let chippedPuppies;

    // Your code here 
    chippedPuppies = await Puppy.findAll({
        attributes: ['id', 'name', 'ageYrs', 'breed', 'weightLbs'],
        where: {
            microchipped: true
        },
        order: [['name', 'DESC'], ['ageYrs']],
    });

    res.json(chippedPuppies);
});


// STEP 3
// One puppy matching a name param
// Finding one record by attribute
app.get('/puppies/name/:name', async (req, res, next) => {
    let puppyByName;

    // Your code here 
    puppyByName = await Puppy.findOne({
        where: {
            name: req.params.name
        }
    });

    if (!puppyByName) {
        res.json({
            message: `no ${req.params.name} found`
        })
    }

    res.json(puppyByName);
})


// BONUS STEP 5
// All puppies with breed ending in 'Shepherd'
// WHERE clause with a comparison
app.get('/puppies/shepherds', async (req, res, next) => {
    let shepherds;

    // Your code here 
    shepherds = await Puppy.findAll({
        where: {
            breed: {
                [Op.substring]: `%Shepherd%`
            }
        }
    })

    if (shepherds.length === 0) {
        res.json({
            message: `no subpath ${req.path.split('/')[2]} found`
        })
    }
    res.json(shepherds);
})


// BONUS STEP 6
// All puppies with ageYrs <= 1yr and weightLbs <= 20lbs
// WHERE clause with multiple attributes and comparisons
app.get('/puppies/tinybabies', async (req, res, next) => {
    let tinyBabyPuppies;
    tinyBabyPuppies = await Puppy.findAll({
        attributes: ['id', 'ageYrs', 'name', 'breed', 'weightLbs'],
        where: {
            [Op.and]: [
                { ageYrs: { [Op.lte]: 1 } }, // Age less than or equal to 1 year
                { weightLbs: { [Op.lte]: 20 } }
            ]
        }
    })

    res.json(tinyBabyPuppies);
})


// STEP 4
// One puppy matching an id param
// Finding one record by primary key
app.get('/puppies/:id', async (req, res, next) => {
    let puppyById;

    // Your code here 
    puppyById = await Puppy.findOne({
        where: {
            id: req.params.id
        }
    })
    
    if(!puppyById){
       return res.status(404).json({message: `No puppies with ID: ${req.params.id} found`})
    }

    res.json(puppyById);
});


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
