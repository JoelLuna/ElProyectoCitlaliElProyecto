"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const Orden_1 = __importDefault(require("./routes/Orden"));
const OrdenDetalle_1 = __importDefault(require("./routes/OrdenDetalle"));
const server = new server_1.default();
//Configurar CORS
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//Body Parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Rutas de la ap
server.app.use('/user', usuario_1.default);
server.app.use('/orden', Orden_1.default);
server.app.use('/ordenDetalle', OrdenDetalle_1.default);
//Conectando DB
mongoose_1.default.connect('mongodb://localhost:27017/pruebaBD', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log('base de datos conectada');
    }
});
//Levantando Express
server.start(() => {
    console.log(`Puerto ${server.port}`);
});
