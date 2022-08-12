"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../Models/User"));
class UsersController {
    async index() {
        const user = await User_1.default.query().where('id', '>', 1);
        return user;
    }
    async store({ request, response }) {
        const body = request.body();
        const user = await User_1.default.create(body);
        response.status(201);
        return {
            message: 'User created!',
            data: user,
        };
    }
    async show({ params }) {
        const user = await User_1.default.find(params.id);
        return {
            data: user,
        };
    }
    async update({ request, params }) {
        const user = await User_1.default.find(params.id);
        user.email = request.input('email');
        user.password = request.input('password');
        await user.save();
        return user;
    }
    async destroy({ params }) {
        const user = await User_1.default.find(params.id);
        await user.delete();
        return {
            message: 'User deleted',
            data: user,
        };
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map