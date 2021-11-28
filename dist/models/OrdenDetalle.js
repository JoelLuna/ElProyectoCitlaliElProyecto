"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenDetalles = void 0;
const mongoose_1 = require("mongoose");
const ordenDetalleSchema = new mongoose_1.Schema({
    orden: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Orden' },
    producto: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Producto' },
    cantidad: { type: Number },
    total: { type: Number }
});
exports.OrdenDetalles = (0, mongoose_1.model)('OrdenDetalle', ordenDetalleSchema);
