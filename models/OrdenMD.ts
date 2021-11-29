import {Schema, model, Document} from 'mongoose'

const ordenSchema = new Schema({
    fecha:{type: String},
    ordenDetalles: [{type: Schema.Types.ObjectId, ref: 'OrdenDetalle'}],
    total: {type: Number}
})


interface IOrden extends Document{
    fecha: Date,
    ordenDetalles: String, 
    total: Number
    
}

export const Orden = model<IOrden> ('Orden', ordenSchema)