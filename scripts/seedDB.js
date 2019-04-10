const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/vendorbooker", {
        useNewUrlParser: true
    }
);

const userSeed = [
    {
        userType: 'vendor',
        firstName: 'Alex',
        lastName: 'Sanabria',
        phone: '905-555-1234',
        email: 'alex@mail.com',
        address: '123 Main',
    },
    {
        userType: 'user',
        firstName: 'Juan',
        lastName: 'Diaz',
        phone: '905-555-1234',
        email: 'juan@mail.com',
        address: '123 Main',
    },
    {
        userType: 'user',
        firstName: 'Christopher',
        lastName: 'Donner',
        phone: '905-555-1234',
        email: 'christopher@mail.com',
        address: '123 Main',
    },
    {
        userType: 'user',
        firstName: 'Pryambudhi',
        lastName: 'Cahyadi',
        phone: '905-555-1234',
        email: 'pryambudhi@mail.com',
        address: '123 Main',
    },
    {
        userType: 'user',
        firstName: 'Homer',
        lastName: 'Simpson',
        phone: '905-555-1234',
        email: 'homer@mail.com',
        address: '123 Main',
    },
];

const petSeed = [
    {
        petTag: '',
        petType: 'Dog',
        petName: 'Piper',
        petBreed: 'Lagotto Romagnolo',
        petAge: '6',
        petWeigth: '11',
        petBehaviour: 'Friendly',
        petVaccines: 'to date',
        petNotes: '',
    },
    {
        petTag: '',
        petType: 'Dog',
        petName: 'Aston',
        petBreed: 'Terrier',
        petAge: '12',
        petWeigth: '5',
        petBehaviour: '',
        petVaccines: '',
        petNotes: '',
    },
    {
        petTag: '',
        petType: 'Dog',
        petName: 'Carlota',
        petBreed: 'Terrier',
        petAge: '3',
        petWeigth: '6',
        petBehaviour: '',
        petVaccines: '',
        petNotes: '',
    },
    {
        petTag: '',
        petType: 'Cat',
        petName: 'Levi',
        petBreed: 'White cat',
        petAge: '16',
        petWeigth: '9',
        petBehaviour: '',
        petVaccines: '',
        petNotes: '',
    },
];

db.User
    .deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(dataUser => {
        console.log(dataUser.result.n + " USER records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.SecondaryUser
    .deleteMany({})
    .then(() => db.SecondaryUser.collection.insertMany(petSeed))
    .then(data => {
        console.log(data.result.n + " PET records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });



