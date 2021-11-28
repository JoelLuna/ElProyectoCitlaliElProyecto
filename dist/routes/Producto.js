"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoMD_1 = require("../models/productoMD");
const productoRoutes = express_1.Router();
productoRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pagina = Number(req.query.pagina) || 1;
    let skip = pagina - 1;
    skip = skip * 10;
    const orden = yield productoMD_1.Producto.find().sort({ _id: -1 }).skip(skip).limit(10).exec();
    res.json({
        ok: true,
        pagina,
        orden
    });
}));
productoRoutes.post('/addProducto', (req, res) => {
    const body = req.body;
    productoMD_1.Producto.create(body).then((productoDB) => __awaiter(void 0, void 0, void 0, function* () {
        res.json({
            ok: true,
            orden: productoDB
        });
    })).catch(err => {
        res.json(err);
    });
});
productoRoutes.delete('/deleteProducto/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield productoMD_1.Producto.findByIdAndDelete(id);
}));
exports.default = productoRoutes;
