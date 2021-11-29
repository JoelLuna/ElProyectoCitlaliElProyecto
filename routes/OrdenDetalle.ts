import {Router, Request, Response} from "express"
import {OrdenDetalles} from '../models/OrdenDetalleMD'

import Token from '../classes/token'
import { verificaToken } from "../middlewares/authentication";

const ordenDetalleRoutes = Router()

ordenDetalleRoutes.get('/',async (req: any,res: Response)=>{
    let pagina = Number(req.query.pagina) || 1
    let skip = pagina - 1
    skip= skip * 10

    const orden = await OrdenDetalles.find().sort({_id: -1}).skip(skip).limit(10).exec()
    res.json({
        ok:true,
        pagina,
        orden 
    })
})

ordenDetalleRoutes.post('/addOrdenDetalle', (req: any,res: Response)=>{
    const body= req.body
    body.orden = req.orden._id
    body.producto = req.producto._id

     OrdenDetalles.create(body).then(async ordenDetalleDB =>{
         res.json({
             ok:true,
             orden: ordenDetalleDB
         })
     }).catch(err =>{
         res.json(err)
     })    
 })

 ordenDetalleRoutes.delete('/deleteOrdenDetalle/:id', async (req: any,res: Response)=>{
    const {id} = req.params;
    await OrdenDetalles.findByIdAndDelete(id);
    
})

export default ordenDetalleRoutes

