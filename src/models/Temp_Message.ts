import mongoose from 'mongoose'
import { TMessage } from './Message'

const TempMessageSchema = new mongoose.Schema<TMessage>({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    country: {
        type: String,
        required: [true, 'Please provide a country']
    },
    message: {
        type: String,
        required: [true, 'Please provide a text']
    },
    translation: {
        type: String
    }
},
    {
        timestamps: true
    })

export default mongoose.models.Temp_Message || mongoose.model<TMessage>('Temp_Message', TempMessageSchema)