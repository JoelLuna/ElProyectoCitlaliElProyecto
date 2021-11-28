"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const mongoose_1 = require("mongoose");
const productoSchema = new mongoose_1.Schema({
    nombre: { type: String },
    precio: { type: Number },
    categoria: { type: String }
});
exports.Producto = (0, mongoose_1.model)('Producto', productoSchema);
