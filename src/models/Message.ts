import mongoose from 'mongoose'

export interface TMessage {
    id: mongoose.Schema.Types.ObjectId,
    name: string,
    country: string,
    message: string,
    translation: string
}

const MessageSchema = new mongoose.Schema<TMessage>({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
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
        required: [true, 'Please provide a text'],
        maxlength: [500, 'The text cannot be longer than 500 characters']
    },
    translation: {
        type: String
    }
},
    {
        timestamps: true
    })

MessageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.models.Message || mongoose.model<TMessage>('Message', MessageSchema)