import { Router } from "express";
import { getAll } from "../controller/servers.js";

const router = Router()

router.get('/', getAll)

export default router