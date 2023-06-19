import mongoose from 'mongoose'

const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    description: {type: String, required: false },
    incorrectIdsArray: {type: Array<string>},
    correctChoiceId: {type: String}
})

export default mongoose.model('Feedback', feedbackSchema)

//primsa client + orms optional
//how to change scheme shape
