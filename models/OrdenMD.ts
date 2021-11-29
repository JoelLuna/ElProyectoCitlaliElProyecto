import {Schema, model, Document} from 'mongoose'

const ordenSchema = new Schema({
    fecha:{type: String},
    numMesa:{type: Number},
    ordenDetalles: [{type:String}],
    total: {type: Number}
})


interface IOrden extends Document{
    fecha: Date,
    numMesa: Number,
    ordenDetalles: String, 
    total: Number
    
}

export const Orden = model<IOrden> ('Orden', ordenSchema)