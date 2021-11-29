import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from './routes/usuario';
import ordenRoutes from './routes/Orden';


const server = new Server()

//Configurar CORS

server.app.use(cors({origin: true, credentials: true}));


//Body Parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//Rutas de la ap
server.app.use('/user', userRoutes);
server.app.use('/orden',ordenRoutes);



//Conectando DB
mongoose.connect('mongodb://localhost:27017/pruebaBD',
                {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
                    
                    if(err){
                        throw err;
                    }
                     else{
                         console.log('base de datos conectada');
                    }
                });

//Levantando Express
server.start(()=>{
    console.log(`Puerto ${server.port}`);
});

