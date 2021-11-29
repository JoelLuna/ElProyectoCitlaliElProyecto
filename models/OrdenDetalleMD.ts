import {Schema, model, Document} from 'mongoose'

const ordenDetalleSchema = new Schema({
    orden:{type: Schema.Types.ObjectId, ref: 'Orden'},
    producto:{type: Schema.Types.ObjectId, ref: 'Producto'},
    cantidad: {type: Number},
    total: {type: Number}
})

interface IOrdenDetalle extends Document{
   orden: String,
   producto: String,
   cantidad: Number,
   total: Number
}

export const OrdenDetalles = model<IOrdenDetalle> ('OrdenDetalle', ordenDetalleSchema)