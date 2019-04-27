const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/vendorbooker", {
        useNewUrlParser: true
    }
);

const userSeed = [{
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

const servicesSeed = [
    {
        name: 'Bathing',
        description: 'We bathe your dog with mild shampoos that are safe to use with Front-line and Advantage and other spot–on products. We express the anal gland before bathing. Regular bathing keeps your dog’s skin healthy, and his coat clean and shiny.',
        duration: '90',
        price: '80',
        specialPrice: '',
        cost: '',
        images: 'servs_bathing.jpg',
        notes: '',
    },
    {
        name: 'Drying and brushing',
        description: 'Drying and brushing is the most important step in grooming your dog. By removing all matted and loose fur before the haircut, your dog will come out looking his best.',
        duration: '45',
        price: '50',
        specialPrice: '',
        cost: '',
        images: 'servs_drying.jpg',
        notes: '',
    },
    {
        name: 'De-tangle',
        description: 'De-Tangling services can be provided when coat has been maintained properly by brushing it out regularly.',
        duration: '45',
        price: '45',
        specialPrice: '',
        cost: '',
        images: 'servs_detangle.jpg',
        notes: '',
    },
    {
        name: 'Ear cleaning/plucking',
        description: 'Dog’s ears are very sensitive and susceptible to infection, excessive wax buildup and parasites.\nA gentle cleaning with proper products will eliminate most problems. Removing the fur by plucking will maintain the ears in a healthy condition.',
        duration: '15',
        price: '35',
        specialPrice: '',
        cost: '',
        images: 'servs_plucking.jpg',
        notes: '',
    },
    {
        name: 'Haircut',
        description: 'Haircuts and Styling are frequently needed, depending on the breed. Our professional dog/cat groomers have extensive experience in all styles and breeds. We will custom design your dog’s haircut according to your taste.',
        duration: '35',
        price: '65',
        specialPrice: '',
        cost: '',
        images: 'servs_haircut.jpg',
        notes: '',
    },
    {
        name: 'Nail trimming',
        description: 'Dogs and Cats need to have their nails trimmed every 4-6 weeks in order to maintain their quick nice and short.',
        duration: '20',
        price: '20',
        specialPrice: '',
        cost: '',
        images: 'servs_nails.jpg',
        notes: '',
    },
    {
        name: 'Tooth brushing',
        description: 'Tooth Brushing on a regular basis will reduce tartar and help prevent periodontal disease.',
        duration: '25',
        price: '34',
        specialPrice: '',
        cost: '',
        images: 'servs_tbrush.jpg',
        notes: '',
    },
    {
        name: 'SPA service',
        description: ' Amazing Pet Grooming has packages to suit different needs and budgets. From basic Bath and Brush to the ultimate Full Service Groom, Amazing Pet Grooming provides options for your pet.\nTake your pets to the professionals, after all… they deserve it.',
        duration: '120',
        price: '170',
        specialPrice: '',
        cost: '',
        images: 'servs_spa.jpg',
        notes: ''
    },
];

const calendarSeed = [
    {
        title: 'first event',
        // userID: 1,
        // petID: 2,
        // skuID: 1234,
        start: '2019-04-01 11:00:00',
        end: '2019-04-01 13:00',
        // status: 'confirmed'
    },
    {
        title: 'second event',
        // userID: 2,
        // petID: 3,
        // skuID: 5432,
        start: '2019-04-25 13:00',
        end: '2019-04-25 13:00',
        // status: 'confirmed'
    }
]

db.User
    .deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(dataUser => {
        console.log(dataUser.result.n + " USER records inserted!");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        // process.exit(1);
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
        // process.exit(1);
    });

db.Service
    .deleteMany({})
    .then(() => db.Service.collection.insertMany(servicesSeed))
    .then(data => {
        console.log(data.result.n + " SERVICES records inserted!");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        // process.exit(1);
    });

db.Calendar
.deleteMany({})
    .then(() => db.Calendar.collection.insertMany(calendarSeed))
    .then(data => {
        console.log(data.result.n + " Calendar records inserted!");
        // process.exit(0);
    })
    .catch(err => {
        console.error(err);
        // process.exit(1);
    });