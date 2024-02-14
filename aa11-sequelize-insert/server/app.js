// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    // const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });
    const allPuppies = await Puppy.findAll();

    res.json(allPuppies);
});


// STEP 1
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to BUILD a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/build', async (req, res, next) => {
    const { name, ageYrs, weightLbs, breed, microchipped } = req.body
    // console.log(name, ageYrs, weightLbs, breed, microchipped )
    const newPuppy = Puppy.build(
        {
            name,
            ageYrs,
            weightLbs,
            breed,
            microchipped
        }
        // {
        //     name: name,
        //     ageYrs: ageYrs,
        //     weightLbs: weightLbs,
        //     breed: breed,
        //     microchipped: microchipped
        // }
    )
    newPuppy.save();

    const newPuppyId = await Puppy.findOne({
        attributes: ['id', 'name'],
        where:
        {
            name: newPuppy.name
        }
    })


    res.json({
        newPuppyId,
        message: "A new puppy BUILD Success"
    })
})

// STEP 2
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to CREATE a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/create', async (req, res, next) => {
    const { name, ageYrs, weightLbs, breed, microchipped } = req.body

    const newPuppy = await Puppy.create(
        {
            name,
            ageYrs,
            weightLbs,
            breed,
            microchipped
        }
    )

    res.json({
        newPuppy,
        message: "A new puppy CREATE success "
    })

})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
