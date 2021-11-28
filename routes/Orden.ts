import {Router, Request, Response} from "express"
import {Orden} from '../models/OrdenMD'

import Token from '../classes/token'
import { verificaToken } from "../middlewares/authentication";

const ordenRoutes = Router()

ordenRoutes.get('/',async (req: any,res: Response)=>{
    let pagina = Number(req.query.pagina) || 1
    let skip = pagina - 1
    skip= skip * 10

    const orden = await Orden.find().sort({_id: -1}).skip(skip).limit(10).exec()
    res.json({
        ok:true,
        pagina,
        orden 
    })
})


ordenRoutes.post('/addOrden', (req: any,res: Response)=>{
   const body= req.body
    Orden.create(body).then(async ordenDB =>{
        res.json({
            ok:true,
            orden: ordenDB
        })
    }).catch(err =>{
        res.json(err)
    })


   
})

ordenRoutes.delete('/deleteOrden/:id', async (req: any,res: Response)=>{
    const {id} = req.params;
    await Orden.findByIdAndDelete(id);
    
})

export default ordenRoutes 