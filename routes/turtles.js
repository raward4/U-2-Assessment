import { Router } from 'express'
import * as turtlesCtrl from '../controllers/turtles.js'

const router = Router()

router.get('/', turtlesCtrl.index)
router.get('/new', turtlesCtrl.new)
router.get('/:id', turtlesCtrl.show)
router.get('/:id/edit', turtlesCtrl.edit)
router.post('/', turtlesCtrl.create)
router.put('/:id', turtlesCtrl.update)
router.delete('/:id', turtlesCtrl.delete)

export {
  router
}
