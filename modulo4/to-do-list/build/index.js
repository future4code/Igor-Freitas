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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const functions_1 = require("./functions");
const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`failure upon stargin server.`);
    }
});
let reqError = 0;
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, nickname, email } = req.body;
        if (!name || !nickname || !email) {
            reqError = 401;
            res.status(reqError).send('Fill all the fields');
        }
        yield (0, functions_1.createUser)(name, nickname, email);
        res.status(200).send('Created');
    }
    catch (err) {
        reqError = 500;
        res.status(reqError).send('Try again.');
    }
}));
app.get('/user/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, functions_1.getAllUsers)();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}));
app.get('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield (0, functions_1.getUser)(id);
        if (user.length === 0) {
            reqError = 404;
            res.status(reqError).send(`User aren't found`);
        }
        res.status(200).send(user);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}));
app.put('/user/edit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { name, nickname } = req.body;
        yield (0, functions_1.updateUser)(id, name, nickname);
        if (!name || !nickname) {
            reqError = 401;
            res.status(reqError).send();
        }
        res.status(202).send('Completed');
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}));
app.post('/task', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, limitDate, creatorUserId } = req.body;
        const dateLimit = limitDate.split("/");
        const limit = `${dateLimit[2]}/${dateLimit[1]}/${dateLimit[0]}`;
        yield (0, functions_1.tasks)(title, description, limit, creatorUserId);
        if (!title || !description || !limitDate || !creatorUserId) {
            reqError = 401;
            res.status(401).send('Fill all the fields');
        }
        res.status(201).send('Added task');
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}));
app.get('/task/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield (0, functions_1.getTask)(id);
        if (!id) {
            reqError = 401;
            res.status(reqError).send('Please, insert an ID');
        }
        if (task.length === 0) {
            reqError = 401;
            res.status(401).send('Please, insert a valid ID');
        }
        res.status(200).send(task);
    }
    catch (err) {
        res.status(500).send('Try again');
    }
}));
app.get('/task', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
//# sourceMappingURL=index.js.map