"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello, world!');
});
app.get('/api', (req, res) => {
    res.status(200);
    res.send('API endpoint working.');
});
