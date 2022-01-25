"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server rodando em http://localhost:${address.port}`);
    }
    else {
        console.error(`Falha ao iniciar o server .`);
    }
});
;
app.get('/', (req, res) => {
    console.log('Teste console');
    res.send('Ok').status(200);
});
const users = [
    {
        id: 1,
        username: 'Leanne Graham',
        phone: '1-770-736-8031 x56442',
        email: 'Sincere@april.biz',
        website: 'hildegard.org'
    },
    {
        id: 2,
        username: 'Ervin Howell',
        phone: '010-692-6593 x09125',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net'
    },
    {
        id: 3,
        username: 'Clementine Bauch',
        phone: '1-463-123-4447',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info'
    }
];
app.get('/users', (req, res) => {
    const currentUsers = users;
    const getUsers = currentUsers.map((user) => {
        return user.username;
    });
    const result = getUsers;
    res.status(200).send(result);
});
