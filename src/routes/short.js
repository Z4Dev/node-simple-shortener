import {Router} from 'express';

import * as ShortController from '../controllers/Short.controller.js';

const router = Router()

router.get('/', (req,res) => {
    res.render('home', {
        title:'[JS] Encurtador de Link'
    })
})

router.get('/:short',ShortController.shortload)

router.post('/api',ShortController.createShort)

  

export default router;