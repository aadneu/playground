const mongoose = require('mongoose')

helloSchema = new mongoose.Schema({
    text: String,
    name: String,
    date: String,
});

module.exports = mongoose.model('Hello', helloSchema);

// const hellos = [
//     {
//         "text": "Gullgutten min :)",
//         "name": "mamma",
//         "date": "10/2 - 2024"
//     },
//     {
//         "text": "Halla, så kul hjemmeside du har laget!!",
//         "name": "T-man",
//         "date": "5/2 - 2024"
//     }
// ]