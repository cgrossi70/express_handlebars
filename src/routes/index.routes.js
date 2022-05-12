import { Router } from 'express'
import { index, about, list } from '../controllers/index.controllers'

const router = Router()

router.get('/',index)
router.get('/about', about)
router.get('/list', list)

export default router