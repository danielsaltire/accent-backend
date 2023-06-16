const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema({
    description: String,
    gameChoices: any,
    correctChoiceIdx: number
});
const FeedbackModel = mongoose.model('Feedback', FeedbackSchema);
module.exports = FeedbackModel;
//primsa client + orms optional
//how to change scheme shape
//typescript
