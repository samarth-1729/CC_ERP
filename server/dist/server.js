"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("./prisma/client");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.get('/', (_req, res) => {
    res.send('Hello Ts & Express');
});
app.get('/test-prisma', async (req, res) => {
    const users = await client_1.prisma.user.findMany();
    res.status(200).send(users);
});
app.listen(PORT, () => console.log('server running at http://localhost:8080'));
//# sourceMappingURL=server.js.map