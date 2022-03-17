import { Router } from "express";
import { getAll, createCar, updateCar, deleteCar, colorId, partialUpd } from "../controller/servers.js";

const router = Router()

router.get('/cars', getAll)

router.post('/cars', createCar )

router.delete('/cars/:id', deleteCar )

router.put('/cars/:id', updateCar)

router.patch('/cars/:id', partialUpd)

router.get('/cars/withcolor/:id', colorId)
export default router
