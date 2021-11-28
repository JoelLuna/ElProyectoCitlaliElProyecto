"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orden = void 0;
const mongoose_1 = require("mongoose");
const ordenSchema = new mongoose_1.Schema({
    fecha: { type: String },
    /*ordenDetalles: [{type: Schema.Types.ObjectId, ref: 'OrdenDetalle'}],*/
    total: { type: Number }
});
exports.Orden = (0, mongoose_1.model)('Orden', ordenSchema);
