"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Teacher_1 = __importDefault(require("../../Models/Teacher"));
class TeachersController {
    async index() {
        const teacher = await Teacher_1.default.all();
        return teacher;
    }
    async store({ request, response }) {
        const body = request.body();
        const teacher = await Teacher_1.default.create(body);
        response.status(201);
        return {
            message: 'Teacher created!',
            data: teacher,
        };
    }
    async show({ params }) {
        const teacher = await Teacher_1.default.find(params.id);
        return {
            data: teacher,
        };
    }
    async update({ request, params }) {
        const teacher = await Teacher_1.default.find(params.id);
        teacher.name = request.input('name');
        teacher.email = request.input('email');
        teacher.phone = request.input('phone');
        teacher.address = request.input('address');
        teacher.teacher_id = request.input('teacher_id');
        await teacher.save();
        return teacher;
    }
    async destroy({ params }) {
        const teacher = await Teacher_1.default.find(params.id);
        await teacher.delete();
        return {
            message: 'Teacher deleted',
            data: teacher,
        };
    }
}
exports.default = TeachersController;
//# sourceMappingURL=TeachersController.js.map