"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const feedbackSchema = new Schema({
    description: { type: String, required: false },
    incorrectIdsArray: { type: (Array) },
    correctChoiceId: { type: String }
});
exports.default = mongoose_1.default.model('Feedback', feedbackSchema);
//primsa client + orms optional
//how to change scheme shape
