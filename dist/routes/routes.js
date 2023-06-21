"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedback_1 = __importDefault(require("../models/feedback"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const staticData = [
    { 'name': 'Daniel', 'intro': "I'm an intern at Saltire" },
    { 'name': 'Yasin', 'intro': "I'm a SWE at Saltire" }
];
//Post =feedback
router.post('/postFeedback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedback = new feedback_1.default({
            description: req.body.description,
            incorrectIdsArray: req.body.incorrectIdsArray,
            correctChoiceId: req.body.correctChoiceId,
        });
        yield feedback.save();
        res.status(200).json({ message: "Feedback saved" });
    }
    catch (error) {
        console.error('error saving feedback', error);
        res.status(500).json({ error: "internal server error" });
    }
}));
//Get all Method
router.get('/getAll', (req, res) => {
    res.send(staticData[0]);
});
//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(staticData[req.params.id]);
});
//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API');
});
//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API');
});
exports.default = router;
