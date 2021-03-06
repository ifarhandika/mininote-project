import mongoose from 'mongoose'

const noteSchema = mongoose.Schema({
    title: String,
    note: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const NoteMessage = mongoose.model('NoteMessage', noteSchema)

export default NoteMessage