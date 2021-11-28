import {Router, Request, Response} from "express"
import {Producto} from '../models/productoMD'

import Token from '../classes/token'
import { verificaToken } from "../middlewares/authentication";

const productoRoutes = Router()

productoRoutes.get('/',async (req: any,res: Response)=>{
    let pagina = Number(req.query.pagina) || 1
    let skip = pagina - 1
    skip= skip * 10

    const orden = await Producto.find().sort({_id: -1}).skip(skip).limit(10).exec()
    res.json({
        ok:true,
        pagina,
        orden 
    })
})

productoRoutes.post('/addProducto', (req: any,res: Response)=>{
    const body= req.body
     Producto.create(body).then(async productoDB =>{
         res.json({
             ok:true,
             orden: productoDB
         })
     }).catch(err =>{
         res.json(err)
     })    
 })


 productoRoutes.delete('/deleteProducto/:id', async (req: any,res: Response)=>{
    const {id} = req.params;
    await Producto.findByIdAndDelete(id);
    
})

export default productoRoutes