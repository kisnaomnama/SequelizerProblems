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
    const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

    res.json(allPuppies);
});


// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {

    //! update - does not need save() method
    const { name, ageYrs, breed, weightLbs, microchipped } = req.body

    const puppyId = req.params.puppyId

    const foundPuppy = await Puppy.findByPk(puppyId);

    foundPuppy.update({
        name: name || foundPuppy.name,
        ageYrs: ageYrs || foundPuppy.ageYrs,
        breed: breed || foundPuppy.breed,
        weightLbs: weightLbs || foundPuppy.weightLbs,
        microchipped: microchipped || foundPuppy.microchipped
    })

    res.json({
        foundPuppy
    })

    // !Update the multiple records
    //     const { name, ageYrs, breed, weightLbs, microchipped } = req.body
    //     const puppyId = req.params.puppyId

    //     await Puppy.update(
    //         {ageYrs: ageYrs, weightLbs: weightLbs},
    //         {
    //             where: {
    //                     id: { [Op.or]: [1,2,3]}
    //             }
    //         }
    //     )

    //! set method -- need to -> await .foundpuppy. save()
    // const { name, ageYrs, breed, weightLbs, microchipped } = req.body

    // const puppyId = req.params.puppyId

    // const foundPuppy = await Puppy.findByPk(puppyId);

    // foundPuppy.set({
    //     name: name || foundPuppy.name,
    //     ageYrs: ageYrs || foundPuppy.ageYrs,
    //     breed: breed || foundPuppy.breed,
    //     weightLbs: weightLbs || foundPuppy.weightLbs,
    //     microchipped: microchipped || foundPuppy.microchipped
    // })
    // await foundPuppy.save();

    // res.json({
    //     foundPuppy
    // })
})


// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
    // const foundPuppy = await Puppy.findByPk(req.params.puppyId)
    // foundPuppy.destroy();
    // res.json({
    //     foundPuppy,
    //     message: "following puppy has been deleted"
    // })

    const foundPuppy = await Puppy.findOne({
        where :{id: req.params.puppyId}
    })
    
    foundPuppy.destroy();
    
    res.json({
        foundPuppy,
        message: "following puppy has been deleted"
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
