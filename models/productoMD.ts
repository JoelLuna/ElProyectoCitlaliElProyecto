import {Schema, model, Document} from 'mongoose'

const productoSchema = new Schema({
    nombre: {type: String},
    precio: {type: Number},
    categoria: {type: String}

})

interface IProducto extends Document{
    nombre: string,
    precio: Number,
    categoria: String
    
}

export const Producto = model<IProducto> ('Producto', productoSchema)
