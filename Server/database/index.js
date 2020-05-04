const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://david:Dv6Pl3ML11@cluster0-gfvr6.gcp.mongodb.net/Local-Drive?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then( () => console.log('Connexion à la DB réussie !'))
    .catch( err => console.log(err));