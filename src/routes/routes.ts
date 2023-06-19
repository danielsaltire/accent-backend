import FeedbackModel from '../models/feedback'
import express from 'express'

const router = express.Router()

const staticData = [
    {'name': 'Daniel', 'intro': "I'm an intern at Saltire"},
    {'name': 'Yasin', 'intro': "I'm a SWE at Saltire"}
]

//Post =feedback
router.post('/postFeedback', async (req, res) => {

    try{
        const feedback = new FeedbackModel({
            description: req.body.description,
            incorrectIdsArray: req.body.incorrectIdsArray,
            correctChoiceId: req.body.correctChoiceId,
        })

        
        await feedback.save()
        res.status(200).json({message:"Feedback saved"})

    }catch(error){
        console.error('error saving feedback', error)
        res.status(500).json({error: "internal server error"})

    }
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(staticData[req.params.id])
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

export default router