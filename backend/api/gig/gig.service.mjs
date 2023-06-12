import { dbService } from '../../services/db.service.mjs'
import { logger } from '../../services/logger.service.mjs'
import { utilService } from '../../services/util.service.mjs'
import mongodb from 'mongodb'
const { ObjectId } = mongodb

const PAGE_SIZE = 3


async function query(filterBy) {
    try {
        const filters = []

        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            filters.push({
                $or: [
                    { title: { $regex: regex } },
                    { 'owner.fullname': { $regex: regex } },
                    { tags: { $regex: regex } }
                ]
            })
        }

        if (filterBy.tag) {
            const regex = new RegExp(filterBy.tag, 'i')
            filters.push({ tags: { $regex: regex } })
        }

        if (filterBy.minPrice) {
            filters.push({ price: { $gte: filterBy.minPrice } })
        }

        if (filterBy.maxPrice) {
            filters.push({ price: { $lte: filterBy.maxPrice } })
        }

        if (filterBy.time) {
            filters.push({ daysToMake: { $lte: filterBy.time } })
        }

        if (filterBy.level2) {
            filters.push({ 'owner.level': 2 })
        }

        if (filterBy.topRated) {
            filters.push({ 'rating.average': { $gt: 4.7 } })
        }

        if (filterBy.pro) {
            filters.push({ 'owner.isPro': true })
        }

        if (filterBy.local) {
            filters.push({ country: 'Israel' })
        }

        if (filterBy.online) {
            filters.push({ 'owner.isOnline': true })
        }

        let sortOption = {}
        if (filterBy.sortBy) {
            if (filterBy.sortBy === 'Best Selling') {
                sortOption = { 'rating.num': -1 }
            } else if (filterBy.sortBy === 'Recommended') {
                sortOption = { 'rating.average': -1 }
            } else if (filterBy.sortBy === 'Price') {
                sortOption = { price: 1 }
            }
        }

        const criteria = filters.length > 0 ? { $and: filters } : {}

        const collection = await dbService.getCollection('gigDB')
        var gigCursor = await collection.find(criteria).sort(sortOption)

        const gigs = gigCursor.toArray()
        return gigs
    } catch (err) {
        logger.error('cannot find gigs', err)
        throw err
    }
}

async function getById(gigId) {
    try {
        const collection = await dbService.getCollection('gigDB')
        const gig = await collection.findOne({ _id : new ObjectId(gigId) })
        logger.debug('service:', gig)
        return gig
    } catch (err) {
        logger.error(`while finding gig ${gigId}`, err)
        throw err
    }
}

async function remove(gigId) {
    try {
        const collection = await dbService.getCollection('gigDB')
        await collection.deleteOne({ _id: ObjectId(gigId) })
        return gigId
    } catch (err) {
        logger.error(`cannot remove gig ${gigId}`, err)
        throw err
    }
}

async function add(gig) {
    try {
        const collection = await dbService.getCollection('gigDB')
        await collection.insertOne(gig)
        return gig
    } catch (err) {
        logger.error('cannot insert gig', err)
        throw err
    }
}

async function update(gig) {
    try {
        const gigToSave = {
            vendor: gig.vendor,
            price: gig.price
        }
        const collection = await dbService.getCollection('gigDB')
        await collection.updateOne({ _id: ObjectId(gig._id) }, { $set: gigToSave })
        return gig
    } catch (err) {
        logger.error(`cannot update gig ${gigId}`, err)
        throw err
    }
}

async function addGigMsg(gigId, msg) {
    try {
        msg.id = utilService.makeId()
        const collection = await dbService.getCollection('gigDB')
        await collection.updateOne({ _id: ObjectId(gigId) }, { $push: { msgs: msg } })
        return msg
    } catch (err) {
        logger.error(`cannot add gig msg ${gigId}`, err)
        throw err
    }
}

async function removeGigMsg(gigId, msgId) {
    try {
        const collection = await dbService.getCollection('gigDB')
        await collection.updateOne({ _id: ObjectId(gigId) }, { $pull: { msgs: { id: msgId } } })
        return msgId
    } catch (err) {
        logger.error(`cannot add gig msg ${gigId}`, err)
        throw err
    }
}

export const gigService = {
    remove,
    query,
    getById,
    add,
    update,
    addGigMsg,
    removeGigMsg
}
