"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../../Models/Student"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class StudentsController {
    async index() {
        const student = await Database_1.default.from('students')
            .join('courses', 'students.course_id', '=', 'courses.id')
            .select('students.id as id')
            .select('students.name as name')
            .select('students.phone as phone')
            .select('students.cpf as cpf')
            .select('students.address as address')
            .select('students.email as email')
            .select('students.student_id as student_id')
            .select('courses.id as course_id')
            .select('courses.name as course_name');
        return student;
    }
    async store({ request, response }) {
        const body = request.body();
        const student = await Student_1.default.create(body);
        response.status(201);
        return {
            message: 'Student created!',
            data: student,
        };
    }
    async show({ params }) {
        const student = await Student_1.default.find(params.id);
        return student;
    }
    async update({ request, params }) {
        const student = await Student_1.default.find(params.id);
        student.name = request.input('name');
        student.course_id = request.input('course_id');
        student.email = request.input('email');
        student.phone = request.input('phone');
        student.cpf = request.input('cpf');
        student.address = request.input('address');
        student.student_id = request.input('student_id');
        await student.save();
        return student;
    }
    async destroy({ params }) {
        const student = await Student_1.default.find(params.id);
        await student.delete();
        return {
            message: 'Student deleted',
            data: student,
        };
    }
}
exports.default = StudentsController;
//# sourceMappingURL=StudentsController.js.map