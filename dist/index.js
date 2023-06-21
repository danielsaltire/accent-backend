"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/routes"));
const express_1 = __importDefault(require("express"));
exports.express = express_1.default;
// const cors = require('cors')
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const mongoString = process.env.DATABASE_URL;
//mongoose.connect(mongoString);
//const database = mongoose.connection;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
//database.on('error', (error) => {
//    console.log(error)
//})
//database.once('connected', () => {
//    console.log('Database Connected');
//})
app.listen(80, () => {
    console.log(`Server Started at ${80}`);
});
const routes = require('./routes/routes');
