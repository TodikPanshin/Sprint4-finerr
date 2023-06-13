import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.mjs'
import { log } from '../../middlewares/logger.middleware.mjs'
import { getGigs, getGigById, addGig, updateGig, removeGig, addGigMsg, removeGigMsg } from './gig.controller.mjs'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, getGigs)
router.get('/:id', getGigById)
router.post('/', requireAuth, addGig)
router.put('/:id', requireAuth, updateGig)
router.delete('/:id', requireAuth, removeGig)
// router.delete('/:id', requireAuth, requireAdmin, removeGig)

router.post('/:id/msg', requireAuth, addGigMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeGigMsg)

export const gigRoutes = router