const express= require('express');
const {ServerConfig,logger} = require('./config');
const apiroutes=require('./routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended :true}));

app.use('/api',apiroutes);


app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Sucessfully started the server at ${ServerConfig.PORT}`);
    // logger.info("sucessfully started the server",{});
    const {City,Airport}=require('./models');
    //const city = await City.findByPk(8);
    //console.log(city); 
    // await city.createAirport({name:'Patna danapur',code:'DNA'});
    // await City.destroy({
    //     where:
    //     {
    //         id:8
    //     }
    // });
});



//SequelizeDatabaseError
//ValidationError