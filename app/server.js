const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser"),
app = express();

port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
mongoose.connect( "mongodb+srv://admin:IM5SEOxgy1RNsLeX@cluster0.x9how.mongodb.net/apiContatos?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro ao se conectar com MongoDB!"));
db.once("open", function(){
    console.log("MongoDB connection OK!")
})

//Configuração do body parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoute = require('./routes/user/user-route')
userRoute(app);
//Configurar a porta no qual o servidor irá escutar 

app.listen(port);
console.log('Server running at port ' + port);
// export default app;
