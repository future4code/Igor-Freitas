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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskByUserId = exports.getAllUsers = exports.getTask = exports.tasks = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const connection_1 = require("./connection");
const getUsers = (tableName) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, connection_1.connection)()
        .select('*')
        .from(tableName);
    return result;
});
exports.getUsers = getUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, connection_1.connection)().select('*').from('TodoListUser').where('id', id);
    return result;
});
exports.getUser = getUser;
const createUser = (name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection.raw(`
        INSERT INTO TodoListUser (id, name, nickname, email)
        VALUES("${Date.now()}", "${name}", "${nickname}", "${email}")
    `);
});
exports.createUser = createUser;
const updateUser = (id, name, nickname) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connection)("TodoListUser")
        .update({
        name: name,
        nickname: nickname
    })
        .where("id", id);
});
exports.updateUser = updateUser;
const tasks = (title, description, limitDate, creatorUserId) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection.raw(`
        INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id)
        VALUES("${Date.now()}","${title}", "${description}", "${limitDate}", "${creatorUserId}")
    `);
});
exports.tasks = tasks;
const getTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, connection_1.connection)("TodoListTask").select("*").from("TodoListTask").where("id", id);
    return result;
});
exports.getTask = getTask;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, connection_1.connection)().select("*").from("TodoListUser");
    return result;
});
exports.getAllUsers = getAllUsers;
const getTaskByUserId = (creatorUseId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, connection_1.connection)("TodoListTask").select("*").from("TodoListTask").where("creatorUseId", creatorUseId);
    return result;
});
exports.getTaskByUserId = getTaskByUserId;
//# sourceMappingURL=functions.js.map