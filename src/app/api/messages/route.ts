import doConnect from '@/lib/db_client'
import Temp_Message from '@/models/Temp_Message'
import Message from '@/models/Message'
import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

export const GET = async () => {
    try {
        await doConnect()

        const result = await Message.find({})

        const messages = result.map((doc) => {
            const message = JSON.parse(JSON.stringify(doc))

            return message
        })

        logger.info(`200 GET /api/messages`)
        return NextResponse.json(messages)
    } catch (e) {
        logger.error(`ERROR on GET /api/messages.\nError message:\n${e}`)

        return NextResponse.json(e)
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await doConnect()

        const { name, country, message, translation } = await req.json()

        const newMessage = new Temp_Message({
            name: name,
            country: country,
            message: message,
            translation: translation
        })

        const response = await newMessage.save()

        return NextResponse.json(response)
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 400 })
    }
}