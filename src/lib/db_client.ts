import mongoose from 'mongoose'
import MONGODB_URI from '@/utils/mongodb_config'

declare global {
    // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
    var mongoose: any
}

if (!MONGODB_URI)
    throw new Error('Please define MONGODB_URI!')

let cached = global.mongoose

if (!cached)
    cached = global.mongoose = { conn: null, promise: null }

const doConnect = async () => {
    if (cached.conn)
        return cached.conn

    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts)
            .then((mongoose) => {
                return mongoose
            })
    }

    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default doConnect